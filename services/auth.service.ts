import { AuthDTO } from "../DTO/auth.dto";
import { UserLoginDTO } from "../DTO/user.dto";
import { IRepositoryAuth } from "../repository/core/repository.interface";
import { IServiceToken } from "./core/service.interface";
export class AuthService implements IServiceToken<AuthDTO, UserLoginDTO> {

    private authRepo: IRepositoryAuth<AuthDTO, UserLoginDTO>;

    constructor(_authRepo: IRepositoryAuth<AuthDTO, UserLoginDTO>) {
        this.authRepo = _authRepo;
    }
    findUT(id: number): Promise<UserLoginDTO | null> {
        return this.authRepo.findUserToken(id).then(user => {
            return user
        })
    }
    findUser(email: string): Promise<UserLoginDTO | null> {
        return this.authRepo.findUser(email.toLowerCase()).then(user => {
            return user
        })
    }

    findToken(t: string): Promise<AuthDTO | null> {
        return this.authRepo.findToken(t).then(authdto => {
            return authdto
        })
    }
    async create(t: AuthDTO): Promise<AuthDTO | null> {
        return this.authRepo.create(t).then(authdto => {
            if (authdto === null) return null;
            return authdto
        })
    }
    async update(t: AuthDTO, id: number): Promise<number | boolean> {
        return this.authRepo.update(t, id).then(good => good)
    }
}