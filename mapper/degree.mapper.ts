import { DegreeDTO } from "../DTO/degree.dto";

export class DegreeMapper {
    static mapToDto(Degree: any): DegreeDTO | null {
        if (Degree === null) return null;
        const dto: DegreeDTO = {
            degreename: Degree.degreename
        }

        return dto;
    }
}