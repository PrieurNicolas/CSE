import { TokenDTO } from "../DTO/token.dto";


export class TokenMapper {
    static mapToDto(token: any): TokenDTO | null {
        if (token === null) return null;
        const dto: TokenDTO = {
            refreshToken: token.refreshToken
        }

        return dto;
    }
}