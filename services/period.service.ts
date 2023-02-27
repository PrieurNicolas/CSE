import { PeriodDTO } from "../DTO/period.dto";
import { IRepository } from "../repository/core/repository.interface";
import { IService } from "./core/service.interface";

export class PeriodService implements IService<PeriodDTO> {
    private PeriodRepository: IRepository<PeriodDTO>;

    constructor(_PeriodRepository: IRepository<PeriodDTO>) {
        this.PeriodRepository =_PeriodRepository;
    }

    findById(id: number): Promise<PeriodDTO | null> {
        return this.PeriodRepository.findById(id).then(PeriodDTO => {
            if(PeriodDTO === null) return null;
            return PeriodDTO
        })
    }
    findAll(): Promise<PeriodDTO[] | null> {
        return this.PeriodRepository.findAll().then(PeriodDTO => {
            if(PeriodDTO === null) return null;
            return PeriodDTO
        })
    }
    create(t: PeriodDTO): Promise<PeriodDTO | null> {
        return this.PeriodRepository.create(t).then(PeriodDTO => {
            if(PeriodDTO === null) return null;
            return PeriodDTO
        })
    }
    delete(id: number): Promise<number | boolean> {
        return this.PeriodRepository.delete(id).then(good => {
            return good;
        })
    }
    update(t: PeriodDTO, id: number): Promise<number | boolean> {
        return this.PeriodRepository.update(t,id).then(good => good)
    }

}