import { Report } from "../database/connect";
import { ReportDTO } from "../DTO/report.dto";
import { ReportMapper } from "../mapper/report.mapper";
import { IRepository } from "./core/repository.interface";

export class ReportRepository implements IRepository<ReportDTO>{
    async findById(id: number): Promise<ReportDTO | null> {
        return Report.findByPk(id).then((Report: any) => ReportMapper.mapToDto(Report))
    }
    async findAll(): Promise<ReportDTO[]> {
        return Report.findAll().then((Reports: any) => Reports.map((Report: any) => ReportMapper.mapToDto(Report)))
    }
    async create(t: ReportDTO): Promise<ReportDTO | null> {
        return Report.create(t).then(async (Report: any) => ReportMapper.mapToDto(Report))
    }
    async delete(id: number): Promise<number | boolean> {
        return Report.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    async update(t: ReportDTO, id: number): Promise<number | boolean> {
        return Report.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}