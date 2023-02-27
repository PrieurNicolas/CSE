import { DegreeDTO } from "../DTO/degree.dto";
import { IRepository } from "../repository/core/repository.interface";
import { IService } from "./core/service.interface";

export class DegreeService implements IService<DegreeDTO> {
    private DegreeRepository: IRepository<DegreeDTO>;

    constructor(_DegreeRepository: IRepository<DegreeDTO>) {
        this.DegreeRepository =_DegreeRepository;
    }

    findById(id: number): Promise<DegreeDTO | null> {
        return this.DegreeRepository.findById(id).then(DegreeDTO => {
            if(DegreeDTO === null) return null;
            return DegreeDTO
        })
    }
    findAll(): Promise<DegreeDTO[] | null> {
        return this.DegreeRepository.findAll().then(DegreeDTO => {
            if(DegreeDTO === null) return null;
            return DegreeDTO
        })
    }
    create(t: DegreeDTO): Promise<DegreeDTO | null> {
        return this.DegreeRepository.create(t).then(DegreeDTO => {
            if(DegreeDTO === null) return null;
            return DegreeDTO
        })
    }
    delete(id: number): Promise<number | boolean> {
        return this.DegreeRepository.delete(id).then(good => {
            return good;
        })
    }
    update(t: DegreeDTO, id: number): Promise<number | boolean> {
        return this.DegreeRepository.update(t,id).then(good => good)
    }

}