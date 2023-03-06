import { Employer, Degree, DegreeUser, Localisation, Period, PeriodUser, Role, RoleUser, User, sequelize } from "../database/connect";
import { EmployerDTO } from "../DTO/employer.dto";
import { EmployerMapper } from "../mapper/employer.mapper";
import { employerId } from "../types/employer";
import { IRepository, IRepositoryS } from "./core/repository.interface";

export class EmployerRepository implements IRepositoryS<EmployerDTO>{
    async findById(id: number): Promise<EmployerDTO | null> {
        return Employer.findByPk(id, {
            include: [
                {
                    model: User,
                    required: false,
                    include: [
                        {
                            model: Localisation,
                            require: false
                        },
                        {
                            model: Degree,
                            require: false,
                        },
                        {
                            model: Period,
                            require: false,
                        }
                    ]
                }
            ]
        }).then((Employer: any) => EmployerMapper.mapToDto(Employer))
    }
    async findAll(): Promise<EmployerDTO[]> {
        return Employer.findAll({
            include: [
                {
                    model: User,
                    required: false,
                    attributes: { exclude: ['password'] },
                    include: [
                        {
                            model: Localisation,
                            require: false
                        },
                        {
                            model: Degree,
                            require: false,
                        },
                        {
                            model: Period,
                            require: false,
                        }
                    ]
                }
            ]
        }).then((Employers: any) => Employers.map((Employer: any) => EmployerMapper.mapToDto(Employer)))
    }
    async create(t: any): Promise<EmployerDTO | null> {

        const transaction = await sequelize.transaction();
        let u: any
        try {
            await User.create(t.users, { transaction: transaction }).then(async (user: any) => {
                await Employer.create(t.employer, { transaction: transaction }).then(async (em: any) => {
                    await em.setUser(user, { transaction: transaction });
                    u = em
                })
                await Localisation.create(t.localisation, { transaction: transaction }).then(async (l: any) => await user.setLocalisation(l, { transaction: transaction }))

                t.periods?.map(async (p: any) => {
                    const periodRow = await Period.findByPk(p.id)
                    await user.addPeriod(periodRow, { through: PeriodUser, transaction: transaction })
                })

                t.period ? t.period.map(async (d: any) => {
                    const degreeRow = await Degree.findByPk(d.id)
                    await user.addDegree(degreeRow, { through: DegreeUser, transaction: transaction })
                }) : await user.addDegree(await Degree.findByPk(5), { through: DegreeUser, transaction: transaction })

                const roleRow = await Role.findByPk(2)
                await user.addRole(roleRow, { through: RoleUser, transaction: transaction })
                await transaction.commit();
            })
            return await this.findById(u!.id)

        } catch (error) {
            await transaction.rollback()
            return null as any
        }
    }
    async delete(id: number): Promise<number | boolean> {

        const transaction = await sequelize.transaction();
        try {
            let c = await this.findById(id);
            await User.destroy({
                where: {
                    email: c!.User.email
                }
            })
            await Localisation.destroy({ where: { id: c!.User.Localisation.id } }, { transaction: transaction })
            await transaction.commit();

            return true
        } catch (error) {
            await transaction.rollback()
            return false
        }

    }
    async update(t: any, id: number): Promise<number | boolean> {
        const transaction = await sequelize.transaction();

        try {
            const employerFull = await Employer.findByPk(id, {
                include: [
                    {
                        model: User,
                        required: false,
                        include: [
                            {
                                model: Localisation,
                                require: false
                            },
                            {
                                model: Degree,
                                require: false,
                            },
                            {
                                model: Period,
                                require: false,
                            }
                        ]
                    }
                ], transaction: transaction
            })
            const user = await User.findByPk(employerFull.UserId, { transaction: transaction });
            const promises = [];
            if (t.periods) {
                promises.push(PeriodUser.destroy({ where: { UserId: user.id }, transaction: transaction }));
                promises.push(t.periods.map(async (DispoMap: any) => {
                    const DisponibiliteRow = await Period.findByPk(DispoMap.id, { transaction: transaction });
                    promises.push(user.addPeriod(DisponibiliteRow, { through: PeriodUser, transaction: transaction }))
                }));
            }
            if (t.users) {
                await User.update(t.users, { where: { id: employerFull.UserId }, transaction: transaction })
            }

            if (t.employer) {
                await Employer.update(t.employer, { where: { id: id }, transaction: transaction })
            }

            if (t.localisation) {
                await Localisation.update(t.localisation, { where: { id: employerFull.User.Localisation.id }, transaction: transaction })
            }
            await Promise.all(promises);
            await transaction.commit();

            return true
        } catch (error) {
            await transaction.rollback()
            return false
        }
    }

    async findUser(id: number): Promise<employerId> {
        return Employer.findByPk(id).then((Employer: any) => Employer)
    }

}