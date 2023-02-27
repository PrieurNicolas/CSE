import { Role } from "../database/connect";
import { RoleDTO } from "../DTO/role.dto";
import { RoleMapper } from "../mapper/role.mapper";
import { IRepository } from "./core/repository.interface";

export class RoleRepository implements IRepository<RoleDTO>{
    async findById(id: number): Promise<RoleDTO | null> {
        return Role.findByPk(id).then((Role: any) => RoleMapper.mapToDto(Role))
    }
    async findAll(): Promise<RoleDTO[]> {
        return Role.findAll().then((Roles: any) => Roles.map((Role: any) => RoleMapper.mapToDto(Role)))
    }
    async create(t: RoleDTO): Promise<RoleDTO | null> {
        return Role.create(t).then(async (Role: any) => RoleMapper.mapToDto(Role))
    }
    async delete(id: number): Promise<number | boolean> {
        return Role.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    async update(t: RoleDTO, id: number): Promise<number | boolean> {
        return Role.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}