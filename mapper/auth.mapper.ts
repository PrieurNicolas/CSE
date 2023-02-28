import { AuthDTO } from "../DTO/auth.dto";
import { UserLoginDTO } from "../DTO/user.dto";
import { tokenId } from "../types/token";

export class AuthMapper {
    static mapToDto(auth: tokenId): AuthDTO | null {
        if (auth === null) return null;
        const dto : AuthDTO = {
            UserId: auth.UserId,
            refreshToken: auth.refreshToken
        }

        return dto;
    }

    static mapToLoginDto(user: any): UserLoginDTO {
        if (user === null){
            return null as any;
        } 
        const dto : UserLoginDTO = {
            id: user.id,
            email: user.email,
            password: user.password,
            role: user.Roles[0].role
        }

        return dto;
    }
}