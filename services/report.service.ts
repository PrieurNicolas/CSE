import { ReportDTO } from "../DTO/report.dto";
import { IRepository } from "../repository/core/repository.interface";
import { IService } from "./core/service.interface";
import ImageService from "./image.service";

export class ReportService implements IService<ReportDTO> {
    private ReportRepository: IRepository<ReportDTO>;
    private imageService: ImageService
    constructor(_ReportRepository: IRepository<ReportDTO>) {
        this.ReportRepository =_ReportRepository;
        this.imageService = new ImageService
    }

    findById(id: number): Promise<ReportDTO | null> {
        return this.ReportRepository.findById(id).then(ReportDTO => {
            if(ReportDTO === null) return null;
            return ReportDTO
        })
    }
    findAll(): Promise<ReportDTO[] | null> {
        return this.ReportRepository.findAll().then(ReportDTO => {
            if(ReportDTO === null) return null;
            return ReportDTO
        })
    }

    //peut faire crash 
    create(t: any): Promise<ReportDTO | null> {
        if(t.files) {
            try {
                t.preuve = this.imageService.upload(t.files, t.candidate, true)
            } catch (error) {
                return error as any
            }
        }


        return this.ReportRepository.create(t).then(ReportDTO => {
            if(ReportDTO === null) return null;
            return ReportDTO
        })
    }
    delete(id: number): Promise<number | boolean> {
        return this.ReportRepository.delete(id).then(good => {
            return good;
        })
    }
    update(t: ReportDTO, id: number): Promise<number | boolean> {
        return this.ReportRepository.update(t,id).then(good => good)
    }

}