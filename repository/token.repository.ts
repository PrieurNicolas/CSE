import { Token } from "../database/connect";
import { TokenDTO } from "../DTO/token.dto";
import { TokenMapper } from "../mapper/token.mapper";
import { IRepository } from "./core/repository.interface";

export class TokenRepository implements IRepository<TokenDTO>{
    async findById(id: number): Promise<TokenDTO | null> {
        return Token.findByPk(id).then((Token: any) => TokenMapper.mapToDto(Token))
    }
    async findAll(): Promise<TokenDTO[]> {
        return Token.findAll().then((Tokens: any) => Tokens.map((Token: any) => TokenMapper.mapToDto(Token)))
    }
    async create(t: TokenDTO): Promise<TokenDTO | null> {
        return Token.create(t).then(async (Token: any) => TokenMapper.mapToDto(Token))
    }
    async delete(id: number): Promise<number | boolean> {
        return Token.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    async update(t: TokenDTO, id: number): Promise<number | boolean> {
        return Token.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }

}