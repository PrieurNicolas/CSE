import { Candidate, Degree, DegreeUser, Localisation, Period, PeriodUser, Role, RoleUser, User, sequelize } from "../database/connect";
import { CandidateDTO } from "../DTO/candidate.dto";
import { CandidateMapper } from "../mapper/candidate.mapper";
import { candidateId } from "../types/candidate";
import { IRepository, IRepositoryS } from "./core/repository.interface";

export class CandidateRepository implements IRepositoryS<CandidateDTO>{
    async findById(id: number): Promise<CandidateDTO | null> {
        return Candidate.findByPk(id, {
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
        }).then((Candidate: any) => CandidateMapper.mapToDto(Candidate))
    }
    async findAll(): Promise<CandidateDTO[]> {
        return Candidate.findAll({
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
        }).then((Candidates: any) => Candidates.map((Candidate: any) => CandidateMapper.mapToDto(Candidate)))
    }
    async create(t: any): Promise<CandidateDTO | null> {

        const transaction = await sequelize.transaction();
        let u: any
        try {
            await User.create(t.users, { transaction: transaction }).then(async (user: any) => {
                await Candidate.create(t.candidate, { transaction: transaction }).then(async (candidat: any) => {
                    await candidat.setUser(user, { transaction: transaction });
                    u = candidat
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
            const candidatFull = await Candidate.findByPk(id, {
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

            if (t.users) {
                await User.update(t.users, { where: { id: candidatFull.UserId }, transaction: transaction })
            }
            if (t.candidat) {
                await Candidate.update(t.candidat, { where: { id: id }, transaction: transaction })
            }

            const user = await User.findByPk(candidatFull.UserId, { transaction: transaction });

            const promises = [];

            if (t.periods) {
                promises.push(PeriodUser.destroy({ where: { UserId: user.id }, transaction: transaction }));
                promises.push(t.periods.map(async (DispoMap: any) => {
                    const DisponibiliteRow = await Period.findByPk(DispoMap.id, { transaction: transaction });
                    promises.push(user.addPeriod(DisponibiliteRow, { through: PeriodUser, transaction: transaction }))
                }));
            }

            if (t.degrees) {
                promises.push(DegreeUser.destroy({ where: { UserId: user.id }, transaction:transaction }));
                promises.push(t.degrees.map(async (DiploMap: any) => {
                    const DiplomeRow = await Degree.findByPk(DiploMap.id, { transaction:transaction});
                    promises.push(user.addDegree(DiplomeRow, { through: DegreeUser,  transaction:transaction }))
                }));
            }

            if (t.localisation) {
                await Localisation.update(t.localisation, { where: { id: candidatFull.User.Localisation.id }, transaction: transaction })
            }
            await Promise.all(promises);
            await transaction.commit();

            return true
        } catch (error) {
            await transaction.rollback()
            return false
        }
    }

    async findUser(id: number): Promise<candidateId> {
        return Candidate.findByPk(id).then((candidate: any) => candidate)
    }

}