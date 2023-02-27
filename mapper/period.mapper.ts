import { PeriodDTO } from "../DTO/period.dto";

export class PeriodMapper {
    static mapToDto(period: any): PeriodDTO | null {
        if (period === null) return null;
        const dto: PeriodDTO = {
            periodname: period.periodname
        }

        return dto;
    }
}