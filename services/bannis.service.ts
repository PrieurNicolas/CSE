import { BannisDTO } from "../DTO/bannis.dto";
import { IRepository } from "../repository/core/repository.interface";
import { IService } from "./core/service.interface";

export class BannisService implements IService<BannisDTO> {
    private BannisRepository: IRepository<BannisDTO>;

    constructor(_BannisRepository: IRepository<BannisDTO>) {
        this.BannisRepository =_BannisRepository;
    }

    findById(id: number): Promise<BannisDTO | null> {
        return this.BannisRepository.findById(id).then(BannisDTO => {
            if(BannisDTO === null) return null;
            return BannisDTO
        })
    }
    findAll(): Promise<BannisDTO[] | null> {
        return this.BannisRepository.findAll().then(BannisDTO => {
            if(BannisDTO === null) return null;
            return BannisDTO
        })
    }
    create(t: BannisDTO): Promise<BannisDTO | null> {
        return this.BannisRepository.create(t).then(BannisDTO => {
            if(BannisDTO === null) return null;
            return BannisDTO
        })
    }
    delete(id: number): Promise<number | boolean> {
        return this.BannisRepository.delete(id).then(good => {
            return good;
        })
    }
    update(t: BannisDTO, id: number): Promise<number | boolean> {
        return this.BannisRepository.update(t,id).then(good => good)
    }

}