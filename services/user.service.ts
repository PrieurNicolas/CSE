import { UserDTO } from "../DTO/user.dto";
import { IRepository } from "../repository/core/repository.interface";
import { IService } from "./core/service.interface";

export class UserService implements IService<UserDTO> {
    private UserRepository: IRepository<UserDTO>;

    constructor(_UserRepository: IRepository<UserDTO>) {
        this.UserRepository =_UserRepository;
    }

    findById(id: number): Promise<UserDTO | null> {
        return this.UserRepository.findById(id).then(UserDTO => {
            if(UserDTO === null) return null;
            return UserDTO
        })
    }
    findAll(): Promise<UserDTO[] | null> {
        return this.UserRepository.findAll().then(UserDTO => {
            if(UserDTO === null) return null;
            return UserDTO
        })
    }
    create(t: UserDTO): Promise<UserDTO | null> {
        return this.UserRepository.create(t).then(UserDTO => {
            if(UserDTO === null) return null;
            return UserDTO
        })
    }
    delete(id: number): Promise<number | boolean> {
        return this.UserRepository.delete(id).then(good => {
            return good;
        })
    }
    update(t: UserDTO, id: number): Promise<number | boolean> {
        return this.UserRepository.update(t,id).then(good => good)
    }

}