import { Degree } from "../database/connect";
import { DegreeDTO } from "../DTO/degree.dto";
import { DegreeMapper } from "../mapper/degree.mapper";
import { IRepository } from "./core/repository.interface";

export class DegreeRepository implements IRepository<DegreeDTO>{
    async findById(id: number): Promise<DegreeDTO | null> {
        return Degree.findByPk(id).then((Degree: any) => DegreeMapper.mapToDto(Degree))
    }
    async findAll(): Promise<DegreeDTO[]> {
        return Degree.findAll().then((Degrees: any) => Degrees.map((Degree: any) => DegreeMapper.mapToDto(Degree)))
    }
    async create(t: DegreeDTO): Promise<DegreeDTO | null> {
        return Degree.create(t).then(async (Degree: any) => DegreeMapper.mapToDto(Degree))
    }
    async delete(id: number): Promise<number | boolean> {
        return Degree.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    async update(t: DegreeDTO, id: number): Promise<number | boolean> {
        return Degree.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}