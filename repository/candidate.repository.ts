import { Candidate, Degree, DegreeUser, Localisation, Period, PeriodUser, Role, RoleUser, User } from "../database/connect";
import { CandidateDTO } from "../DTO/candidate.dto";
import { CandidateMapper } from "../mapper/candidate.mapper";
import { candidateId } from "../types/candidate";
import { IRepository, IRepositoryS } from "./core/repository.interface";
import { sequelize } from "../database/connect";
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

        try {
            await User.create(t.users, { transaction: transaction }).then(async (user: any) => {
                await Candidate.create(t.candidate, { transaction: transaction }).then((candidat:any)=> candidat)
                await Localisation.create(t.localisation, { transaction: transaction })

                console.log("AAAAAAAAAAAAA", t.periods)


                    t.periods?.map(async (p: any) => {
                        const periodRow = await Period.findByPk(p.id)
                        await user.addPeriod(periodRow, { through: PeriodUser, transaction: transaction })
                    })

                    t.period? t.period.map(async (d: any) => {
                        const degreeRow = await Degree.findByPk(d.id)
                        await user.addDegree(degreeRow, { through: DegreeUser, transaction: transaction  })
                    }) : await user.addDegree(await Degree.findByPk(5), { through: DegreeUser, transaction: transaction  })
                
                const roleRow = await Role.findByPk(2)
                await user.addRole(roleRow, { through: RoleUser, transaction: transaction  })
            })

            await transaction.commit();

            return 0 as any
        } catch (error) {
            await transaction.rollback()
            return null as any
        }
    }
    async delete(id: number): Promise<number | boolean> {
        return Candidate.destroy({ where: { id: id } }).then((good: boolean) => good)
    }
    async update(t: CandidateDTO, id: number): Promise<number | boolean> {
        return Candidate.update(t, { where: { id: id } }).then(((good: boolean[]) => good[0]))
    }

    async findUser(id: number): Promise<candidateId> {
        return Candidate.findByPk(id).then((candidate: any) => candidate)
    }

}