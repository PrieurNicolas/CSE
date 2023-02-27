import { TokenDTO } from "../DTO/token.dto";
import { IService } from "../services/core/service.interface";
import { Request, Response } from "express";

export class TokenHandler {
    private TokenService: IService<TokenDTO>;

    constructor(service: IService<TokenDTO>) {
        this.TokenService = service;
    }

    getTokenId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.TokenService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getTokens = async (req: Request, res: Response) => {
        try {
            const result = await this.TokenService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postToken = async (req: Request, res: Response) => {
        try {
            const result = await this.TokenService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteToken = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.TokenService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateToken = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.TokenService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }

}