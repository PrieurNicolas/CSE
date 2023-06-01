import { UserDTO } from "../DTO/user.dto";
import { IServiceU } from "../services/core/service.interface";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';

export class UserHandler {
    private UserService: IServiceU<UserDTO>;

    constructor(service: IServiceU<UserDTO>) {
        this.UserService = service;
    }

    getUserId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.UserService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getUsers = async (req: Request, res: Response) => {
        try {
            const result = await this.UserService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postUser = async (req: Request, res: Response) => {
        try {
            if (!req.body.password) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe requis.' })

            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.UserService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteUser = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.UserService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateUser = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            if(req.body.password) {
                req.body.password = await bcrypt.hash(req.body.password, 10);
            }
            const result = await this.UserService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }

    contact = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            
            const result = await this.UserService.contact(req.body.email, req.body.connecter);
            res.status(200).json(result ? "envoyé" : "non envoyé");
        } catch (err) {
            res.status(500).json(err)
        }
    }

}