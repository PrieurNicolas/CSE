import { UserDTO } from "../DTO/user.dto";
import { CandidateRepository } from "../repository/candidate.repository";
import { IRepository } from "../repository/core/repository.interface";
import { EmployerRepository } from "../repository/employer.repository";
import { CandidateService } from "./candidate.service";
import { IServiceU } from "./core/service.interface";
import { EmailService } from "./email.service";
import { EmployerService } from "./employer.service";

export class UserService implements IServiceU<UserDTO> {
    private UserRepository: IRepository<UserDTO>;

    constructor(_UserRepository: IRepository<UserDTO>) {
        this.UserRepository =_UserRepository;
    }
    async contact(email: string, connecter: any): Promise<any> {
        // throw new Error("Method not implemented.");
        const emailService = new EmailService(null);
        let data;
        if(connecter.en){
            //info entreprise
            const employerService = new EmployerService(new EmployerRepository(), this.UserRepository)
            data = await employerService.findById(connecter.id)
            if(data == null){
                return false
            }
            return emailService.sendMail(email, "Prise de contact", `
            Bonjour, \n\n
            Vous recevez cette email pour vous prevenir que vous avez était contacté par ${data.structurename}
            Voici de quoi le recontacter. \n
            Pour le recontacter par mail : ${data.User.email} \n
            Pour le recontacter par telephone : ${data.User.phone} \n
            En esperant vous voir decrocher un job.
            `)
        }else {
            const candidateService = new CandidateService(new CandidateRepository(), this.UserRepository)
            //info candidat
            data = await candidateService.findById(connecter.id)
            if(data == null){
                return false
            }

            return emailService.sendMail(email, "Prise de contact", `
            Bonjour, \n\n
            Vous recevez cette email pour vous prevenir que vous avez était contacté par ${data.lastname} ${data.firstname} 
            Voici de quoi le recontacter. \n
            Pour le recontacter par mail : ${data.User.email} \n
            Pour le recontacter par telephone : ${data.User.phone} \n
            En esperant vous voir decrocher une pepite.
            `)
        } 
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