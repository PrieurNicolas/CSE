import { LocalisationDTO } from "../DTO/localisation.dto";

export class LocalisationMapper {
    static mapToDto(localisation: any): LocalisationDTO | null {
        if (localisation === null) return null;
        const dto: LocalisationDTO = {
            id: localisation.id,
            address: localisation.address,
            zipCode: localisation.zipCode,
            city: localisation.city
        }

        return dto;
    }
}