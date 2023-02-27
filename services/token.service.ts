import { TokenDTO } from "../DTO/token.dto";
import { IRepository } from "../repository/core/repository.interface";
import { IService } from "./core/service.interface";

export class TokenService implements IService<TokenDTO> {
    private TokenRepository: IRepository<TokenDTO>;

    constructor(_TokenRepository: IRepository<TokenDTO>) {
        this.TokenRepository =_TokenRepository;
    }

    findById(id: number): Promise<TokenDTO | null> {
        return this.TokenRepository.findById(id).then(TokenDTO => {
            if(TokenDTO === null) return null;
            return TokenDTO
        })
    }
    findAll(): Promise<TokenDTO[] | null> {
        return this.TokenRepository.findAll().then(TokenDTO => {
            if(TokenDTO === null) return null;
            return TokenDTO
        })
    }
    create(t: TokenDTO): Promise<TokenDTO | null> {
        return this.TokenRepository.create(t).then(TokenDTO => {
            if(TokenDTO === null) return null;
            return TokenDTO
        })
    }
    delete(id: number): Promise<number | boolean> {
        return this.TokenRepository.delete(id).then(good => {
            return good;
        })
    }
    update(t: TokenDTO, id: number): Promise<number | boolean> {
        return this.TokenRepository.update(t,id).then(good => good)
    }

}