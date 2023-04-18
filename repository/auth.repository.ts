import { Candidate, Employer, Role, Token, User } from "../database/connect";
import { AuthDTO } from "../DTO/auth.dto";
import { UserLoginDTO } from "../DTO/user.dto";
import { AuthMapper } from "../mapper/auth.mapper";
import { tokenId } from "../types/token";
import { IRepositoryAuth } from "./core/repository.interface";

export class AuthRepository implements IRepositoryAuth<AuthDTO, UserLoginDTO> {
    async findUser(email: string): Promise<UserLoginDTO | null> {
        const user =await User.findOne({
            where: { email: email }, include: {
                model: Role,
            }
        })

        let test = await Employer.findOne({
            where: { UserId: user?.id}
        })
        
        // return user
        if (test) {
            user.idCE = test.id
  
        } else {
            test = await Candidate.findOne({
                where: { UserId: user?.id || 0}
            })
            
            user.idCE = test.id
        }

        return AuthMapper.mapToLoginDto(user)

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