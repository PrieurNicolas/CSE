import { Period } from "../database/connect";
import { PeriodDTO } from "../DTO/period.dto";
import { PeriodMapper } from "../mapper/period.mapper";
import { IRepository } from "./core/repository.interface";

export class PeriodRepository implements IRepository<PeriodDTO>{
    async findById(id: number): Promise<PeriodDTO | null> {
        return Period.findByPk(id).then((Period: any) => PeriodMapper.mapToDto(Period))
    }
    async findAll(): Promise<PeriodDTO[]> {
        return Period.findAll().then((Periods: any) => Periods.map((Period: any) => PeriodMapper.mapToDto(Period)))
    }
    async create(t: PeriodDTO): Promise<PeriodDTO | null> {
        return Period.create(t).then(async (Period: any) => PeriodMapper.mapToDto(Period))
    }
    async delete(id: number): Promise<number | boolean> {
        return Period.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    async update(t: PeriodDTO, id: number): Promise<number | boolean> {
        return Period.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}