import { AdminDTO } from "../DTO/admin.dto";

export class AdminMapper {
    static mapToDto(admin: any): AdminDTO | null {
        if (admin === null) return null;
        const dto: AdminDTO = {
            id: admin.id,
            email: admin.email,
            role: admin.Roles[0].role,
            isActif: admin.isActif
        }

        return dto;
    }
}