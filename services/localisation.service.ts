import { LocalisationDTO } from "../DTO/localisation.dto";
import { IRepository } from "../repository/core/repository.interface";
import { IService } from "./core/service.interface";

export class LocalisationService implements IService<LocalisationDTO> {
    private LocalisationRepository: IRepository<LocalisationDTO>;

    constructor(_LocalisationRepository: IRepository<LocalisationDTO>) {
        this.LocalisationRepository =_LocalisationRepository;
    }

    findById(id: number): Promise<LocalisationDTO | null> {
        return this.LocalisationRepository.findById(id).then(LocalisationDTO => {
            if(LocalisationDTO === null) return null;
            return LocalisationDTO
        })
    }
    findAll(): Promise<LocalisationDTO[] | null> {
        return this.LocalisationRepository.findAll().then(LocalisationDTO => {
            if(LocalisationDTO === null) return null;
            return LocalisationDTO
        })
    }
    create(t: LocalisationDTO): Promise<LocalisationDTO | null> {
        return this.LocalisationRepository.create(t).then(LocalisationDTO => {
            if(LocalisationDTO === null) return null;
            return LocalisationDTO
        })
    }
    delete(id: number): Promise<number | boolean> {
        return this.LocalisationRepository.delete(id).then(good => {
            return good;
        })
    }
    update(t: LocalisationDTO, id: number): Promise<number | boolean> {
        return this.LocalisationRepository.update(t,id).then(good => good)
    }

}