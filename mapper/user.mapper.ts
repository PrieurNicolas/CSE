import { UserDTO } from "../DTO/user.dto";


export class UserMapper {
    static mapToDto(user: any): UserDTO | null {
        if (user === null) return null;
        const dto: UserDTO = {
            id: user.id,
            email: user.email,
            phone: user.phone
        }

        return dto;
    }
}