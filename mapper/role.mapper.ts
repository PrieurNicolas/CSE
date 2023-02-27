import { RoleDTO } from "../DTO/role.dto";

export class RoleMapper {
    static mapToDto(Role: any): RoleDTO | null {
        if (Role === null) return null;
        const dto: RoleDTO = {
            role: Role.role
        }

        return dto;
    }
}