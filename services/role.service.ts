import { RoleDTO } from "../DTO/role.dto";
import { IRepository } from "../repository/core/repository.interface";
import { IService } from "./core/service.interface";

export class RoleService implements IService<RoleDTO> {
    private RoleRepository: IRepository<RoleDTO>;

    constructor(_RoleRepository: IRepository<RoleDTO>) {
        this.RoleRepository =_RoleRepository;
    }

    findById(id: number): Promise<RoleDTO | null> {
        return this.RoleRepository.findById(id).then(RoleDTO => {
            if(RoleDTO === null) return null;
            return RoleDTO
        })
    }
    findAll(): Promise<RoleDTO[] | null> {
        return this.RoleRepository.findAll().then(RoleDTO => {
            if(RoleDTO === null) return null;
            return RoleDTO
        })
    }
    create(t: RoleDTO): Promise<RoleDTO | null> {
        return this.RoleRepository.create(t).then(RoleDTO => {
            if(RoleDTO === null) return null;
            return RoleDTO
        })
    }
    delete(id: number): Promise<number | boolean> {
        return this.RoleRepository.delete(id).then(good => {
            return good;
        })
    }
    update(t: RoleDTO, id: number): Promise<number | boolean> {
        return this.RoleRepository.update(t,id).then(good => good)
    }

}