import { AdminDTO } from "../DTO/admin.dto";
import { IRepository } from "../repository/core/repository.interface";
import { IService } from "./core/service.interface";

export class AdminService implements IService<AdminDTO> {
    private adminRepository: IRepository<AdminDTO>;

    constructor(_adminRepository: IRepository<AdminDTO>) {
        this.adminRepository =_adminRepository;
    }

    findById(id: number): Promise<AdminDTO | null> {
        return this.adminRepository.findById(id).then(adminDTO => {
            if(adminDTO === null) return null;
            return adminDTO
        })
    }
    findAll(): Promise<AdminDTO[] | null> {
        return this.adminRepository.findAll().then(adminDTO => {
            if(adminDTO === null) return null;
            return adminDTO
        })
    }
    create(t: AdminDTO): Promise<AdminDTO | null> {
        return this.adminRepository.create(t).then(adminDTO => {
            if(adminDTO === null) return null;
            return adminDTO
        })
    }
    delete(id: number): Promise<number | boolean> {
        return this.adminRepository.delete(id).then(good => {
            return good;
        })
    }
    update(t: AdminDTO, id: number): Promise<number | boolean> {
        return this.adminRepository.update(t,id).then(good => good)
    }

}