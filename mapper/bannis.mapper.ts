import { BannisDTO } from "../DTO/bannis.dto";

export class BannisMapper {
    static mapToDto(bannis: any): BannisDTO | null {
        if (bannis === null) return null;
        const dto: BannisDTO = {
            email: bannis.email,
            raison: bannis.raison
        }

        return dto;
    }
}