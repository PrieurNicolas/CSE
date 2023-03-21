import { EmployerDTO } from "../DTO/employer.dto";
import { UserDTO } from "../DTO/user.dto";
import { IRepository, IRepositoryS } from "../repository/core/repository.interface";
import { IService } from "./core/service.interface";
import bcrypt from 'bcrypt'
export class EmployerService implements IService<EmployerDTO> {
    private EmployerRepository: IRepositoryS<EmployerDTO>;
    private UserRepository: IRepository<UserDTO>;

    constructor(_EmployerRepository: IRepositoryS<EmployerDTO>, _UserRepository: IRepository<UserDTO>) {
        this.EmployerRepository =_EmployerRepository;
        this.UserRepository =_UserRepository;
    }

    findById(id: number): Promise<EmployerDTO | null> {
        return this.EmployerRepository.findById(id).then(EmployerDTO => {
            if(EmployerDTO === null) return null;
            return EmployerDTO
        })
    }
    findAll(): Promise<EmployerDTO[] | null> {
        return this.EmployerRepository.findAll().then(EmployerDTO => {
            if(EmployerDTO === null) return null;
            return EmployerDTO
        })
    }
    async create(t: any): Promise<EmployerDTO | null | string> {
        if (t.users.password.length > 4){
            if (t.users.password !== t.users.passwordconf) return "mot de passe doit être identique a la confirmation mot de passe"

        }else {
            return "mot de passe doit etre plus long"
        }
        t.users.password && (t.users.password = await bcrypt.hash(t.users.password, 10))
        t.users.email = t.users.email.toLowerCase();
        if (!Number.isInteger(Number (t.users.phone) )){
            return "Le numero de telephone doit être un nombre"
        }

        return this.EmployerRepository.create(t).then(EmployerDTO => {
            if(EmployerDTO === null) return null;
            return EmployerDTO
        })
    }
    async delete(id: number): Promise<number | boolean> {
        return this.EmployerRepository.delete(id).then(good => {
            return good;
        })
    }
    async update(t: any, id: number): Promise<number | boolean | string> {
        if (t.users.password) {
            if (t.users.password.length > 4){
                if (t.users.password !== t.users.passwordconf) return "mot de passe doit être identique a la confirmation mot de passe"
    
            }else {
                return "mot de passe doit etre plus long"
            }
            t.users.password && (t.users.password = await bcrypt.hash(t.users.password, 10))
        }

        if (t.users.phone) {
            if (!Number.isInteger(Number (t.users.phone) )){
                return "Le numero de telephone doit être un nombre"
            }
        }

        if(t.users.email) {
            t.users.email = t.users.email.toLowerCase();
        }


        return this.EmployerRepository.update(t,id).then(good => good)
    }

}