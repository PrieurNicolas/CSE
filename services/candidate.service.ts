import { CandidateDTO } from "../DTO/candidate.dto";
import { UserDTO } from "../DTO/user.dto";
import { IRepository, IRepositoryS } from "../repository/core/repository.interface";
import { IService } from "./core/service.interface";

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
    create(t: CandidateDTO): Promise<CandidateDTO | null> {
        return this.CandidateRepository.create(t).then(CandidateDTO => {
            if(CandidateDTO === null) return null;
            return CandidateDTO
        })
    }
    async delete(id: number): Promise<number | boolean> {
        console.log(id)
        const user = await this.CandidateRepository.findUser(id);
        return this.UserRepository.delete(user.UserId).then(good => {
            return good;
        })
    }
    update(t: CandidateDTO, id: number): Promise<number | boolean> {
        return this.CandidateRepository.update(t,id).then(good => good)
    }

}