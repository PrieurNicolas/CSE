import { AuthDTO } from "../DTO/auth.dto";
import { userLoginDTO } from "../DTO/user.dto";
import { IRepositoryAuth } from "../repository/core/repository.interface";
import { IServiceToken } from "./core/service.interface";
export class AuthService implements IServiceToken<AuthDTO, userLoginDTO> {

    private authRepo: IRepositoryAuth<AuthDTO, userLoginDTO>;

    constructor(_authRepo: IRepositoryAuth<AuthDTO, userLoginDTO>) {
        this.authRepo =_authRepo;
    }
    findUT(id: number): Promise<userLoginDTO | null> {
        return this.authRepo.findUserToken(id).then(user => {
            return user
        })
    }
    findUser(email: string): Promise<userLoginDTO | null> {
        return this.authRepo.findUser(email).then(user => {
            return user
        })
    }

    findToken(t: string): Promise<AuthDTO | null> {
        return this.authRepo.findToken(t).then(authdto => {
            return authdto
        })
    }
    create(t: AuthDTO): Promise<AuthDTO | null> {
        return this.authRepo.create(t).then(authdto => {
            if(authdto === null) return null;
            return authdto
        })
    }
    update(t: AuthDTO, id: number): Promise<number | boolean> {
        return this.authRepo.update(t,id).then(good => good)
    }

}