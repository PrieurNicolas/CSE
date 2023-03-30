import { ReportDTO } from "../DTO/report.dto";

export class ReportMapper {
    static mapToDto(Report: any): ReportDTO | null {
        if (Report === null) return null;
        const dto: ReportDTO = {
            idReporte: Report.idReporte,
            reporteurId: Report.reporteurId,
            raison: Report.raison,
            preuve: Report.preuve
        }

        return dto;
    }
}