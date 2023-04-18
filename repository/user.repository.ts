import { Localisation, User, sequelize } from "../database/connect";
import { UserDTO } from "../DTO/user.dto";
import { UserMapper } from "../mapper/user.mapper";
import { IRepository } from "./core/repository.interface";

export class UserRepository implements IRepository<UserDTO>{
    async findById(id: number): Promise<UserDTO | null> {
        return User.findByPk(id).then((user: any) => UserMapper.mapToDto(user))
    }
    async findAll(): Promise<UserDTO[]> {
        return User.findAll().then((users: any) => users.map((user: any) => UserMapper.mapToDto(user)))
    }
    async create(t: UserDTO): Promise<UserDTO | null> {
        return User.create(t).then(async (user: any) => UserMapper.mapToDto(user))
    }
    async delete(id: number): Promise<number | boolean> {
        const transaction = await sequelize.transaction();

        try {
            let c = await this.findById(id);
            await User.destroy({
                where: {
                    id:id
                }
            }, {transaction:transaction})
            await Localisation.destroy({ where: { id: c!.LocalisationId } }, { transaction: transaction })
            await transaction.commit();

            return true
        } catch (error) {
            await transaction.rollback()
            return false
        }
    }
    async update(t: any, id: number): Promise<number | boolean> {
        return User.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}