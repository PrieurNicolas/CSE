import { Bannis } from "../database/connect";
import { BannisDTO } from "../DTO/bannis.dto";
import { BannisMapper } from "../mapper/bannis.mapper";
import { IRepository } from "./core/repository.interface";

export class BannisRepository implements IRepository<BannisDTO>{
    async findById(id: number): Promise<BannisDTO | null> {
        return Bannis.findByPk(id).then((Bannis: any) => BannisMapper.mapToDto(Bannis))
    }
    async findAll(): Promise<BannisDTO[]> {
        return Bannis.findAll().then((Banniss: any) => Banniss.map((Bannis: any) => BannisMapper.mapToDto(Bannis)))
    }
    async create(t: BannisDTO): Promise<BannisDTO | null> {
        return Bannis.create(t).then(async (Bannis: any) => BannisMapper.mapToDto(Bannis))
    }
    async delete(id: number): Promise<number | boolean> {
        return Bannis.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    async update(t: BannisDTO, id: number): Promise<number | boolean> {
        return Bannis.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}