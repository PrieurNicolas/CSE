import { Role, RoleUser, User } from "../database/connect";
import { AdminDTO } from "../DTO/admin.dto";
import { AdminMapper } from "../mapper/admin.mapper";
import { IRepository } from "./core/repository.interface";

export class AdminRepository implements IRepository<AdminDTO>{
    async findById(id: number): Promise<AdminDTO | null> {
        return User.findByPk(id, {include: [
            {
                model: Role,
                required: true,
            },
        ]}).then((user: any) => AdminMapper.mapToDto(user))
    }
    async findAll(): Promise<AdminDTO[]> {
        return User.findAll({
            include: [
                {
                    model: Role,
                    // required: false
                }
            ]
        }).then((users: any) => users.filter((user: any) => user.Roles[0]?.role == "ADMIN").map((admin: any) => AdminMapper.mapToDto(admin)))
    }
    async create(t: AdminDTO): Promise<AdminDTO | null> {
        return User.create(t).then(async (user: any) => {

            const roleRow = await Role.findByPk(1)
            await user.addRole(roleRow, { through: RoleUser })

            return await this.findById(user.id)
        })
    }
    async delete(id: number): Promise<number | boolean> {
        return User.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    async update(t: AdminDTO, id: number): Promise<number | boolean> {
        return User.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}