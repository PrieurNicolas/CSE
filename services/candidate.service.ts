import { CandidateDTO } from "../DTO/candidate.dto";
import { UserDTO } from "../DTO/user.dto";
import { IRepository, IRepositoryS } from "../repository/core/repository.interface";
import { IService } from "./core/service.interface";
import bcrypt from 'bcrypt'
export class CandidateService implements IService<CandidateDTO> {
    private CandidateRepository: IRepositoryS<CandidateDTO>;
    private UserRepository: IRepository<UserDTO>;

    constructor(_CandidateRepository: IRepositoryS<CandidateDTO>, _UserRepository: IRepository<UserDTO>) {
        this.CandidateRepository =_CandidateRepository;
        this.UserRepository =_UserRepository;
    }

    findById(id: number): Promise<CandidateDTO | null> {
        return this.CandidateRepository.findById(id).then(CandidateDTO => {
            if(CandidateDTO === null) return null;
            return CandidateDTO
        })
    }
    findAll(): Promise<CandidateDTO[] | null> {
        return this.CandidateRepository.findAll().then(CandidateDTO => {
            if(CandidateDTO === null) return null;
            return CandidateDTO
        })
    }
    async create(t: any): Promise<CandidateDTO | null> {
        if (t.users.password.length > 4){
            if (t.users.password !== t.users.passwordconf) return "mot de passe doit être identique a la confirmation mot de passe" as any

        }else {
            return "mot de passe doit etre plus long" as any
        }
        t.users.password && (t.users.password = await bcrypt.hash(t.users.password, 10))

        if (!Number.isInteger(Number (t.users.phone) )){
            return "Le numero de telephone doit être un nombre" as any
        }

        return this.CandidateRepository.create(t).then(CandidateDTO => {
            if(CandidateDTO === null) return null;
            return CandidateDTO
        })
    }
    async delete(id: number): Promise<number | boolean> {
        return this.CandidateRepository.delete(id).then(good => {
            return good;
        })
    }
    async update(t: any, id: number): Promise<number | boolean> {
        if (t.users.password) {
            if (t.users.password.length > 4){
                if (t.users.password !== t.users.passwordconf) return "mot de passe doit être identique a la confirmation mot de passe" as any
    
            }else {
                return "mot de passe doit etre plus long" as any
            }
            t.users.password && (t.users.password = await bcrypt.hash(t.users.password, 10))
        }

        if (t.users.phone) {
            if (!Number.isInteger(Number (t.users.phone) )){
                return "Le numero de telephone doit être un nombre" as any
            }
        }


        return this.CandidateRepository.update(t,id).then(good => good)
    }

}