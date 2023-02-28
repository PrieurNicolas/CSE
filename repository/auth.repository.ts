import { Role, Token, User } from "../database/connect";
import { AuthDTO } from "../DTO/auth.dto";
import { UserLoginDTO } from "../DTO/user.dto";
import { AuthMapper } from "../mapper/auth.mapper";
import { tokenId } from "../types/token";
import { IRepositoryAuth } from "./core/repository.interface";

export class AuthRepository implements IRepositoryAuth<AuthDTO, UserLoginDTO> {
    findUser(email: string): Promise<UserLoginDTO | null> {
        return User.findOne({
            where: { email: email }, include: {
                model: Role,
            }
        }).then((user: any) => AuthMapper.mapToLoginDto(user))
    }
    findUserToken(id: number): Promise<UserLoginDTO | null> {
        return Token.findOne({ where: { UserId: id } }).then((token: any) => AuthMapper.mapToDto(token))
    }
    create(t: AuthDTO): Promise<AuthDTO | null> {
        return Token.create(t).then((token: tokenId) => AuthMapper.mapToDto(token))
    }
    update(t: AuthDTO, id: number): Promise<number | boolean> {
        return Token.update(t, { where: { UserId: id } }).then(((good: boolean[]) => good[0]))
    }
    findToken(t: string): Promise<AuthDTO | null> {
        return Token.findOne({ where: { refreshToken: t } }).then((token: any) => AuthMapper.mapToDto(token))
    }
}