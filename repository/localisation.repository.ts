import { Localisation } from "../database/connect";
import { LocalisationDTO } from "../DTO/localisation.dto";
import { LocalisationMapper } from "../mapper/localisation.mapper";
import { IRepository } from "./core/repository.interface";

export class LocalisationRepository implements IRepository<LocalisationDTO>{
    async findById(id: number): Promise<LocalisationDTO | null> {
        return Localisation.findByPk(id).then((Localisation: any) => LocalisationMapper.mapToDto(Localisation))
    }
    async findAll(): Promise<LocalisationDTO[]> {
        return Localisation.findAll().then((Localisations: any) => Localisations.map((Localisation: any) => LocalisationMapper.mapToDto(Localisation)))
    }
    async create(t: LocalisationDTO): Promise<LocalisationDTO | null> {
        return Localisation.create(t).then(async (Localisation: any) => LocalisationMapper.mapToDto(Localisation))
    }
    async delete(id: number): Promise<number | boolean> {
        return Localisation.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    async update(t: LocalisationDTO, id: number): Promise<number | boolean> {
        return Localisation.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}