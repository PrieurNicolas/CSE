import { AdminDTO } from "../DTO/admin.dto";
import { IService } from "../services/core/service.interface";
import { Request, Response } from "express";
import bcrypt from 'bcrypt';

export class AdminHandler {
    private adminService: IService<AdminDTO>;

    constructor(service: IService<AdminDTO>) {
        this.adminService = service;
    }

    getAdminId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.adminService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getAdmins = async (req: Request, res: Response) => {
        try {
            const result = await this.adminService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postAdmin = async (req: Request, res: Response) => {
        try {
            if (!req.body.password) return res.status(400).json({ passwordRequired: true, message: 'Mot de passe requis.' })

            req.body.password = await bcrypt.hash(req.body.password, 10);
            const result = await this.adminService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteAdmin = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.adminService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateAdmin = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.adminService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }

}