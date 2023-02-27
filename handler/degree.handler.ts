import { DegreeDTO } from "../DTO/degree.dto";
import { IService } from "../services/core/service.interface";
import { Request, Response } from "express";

export class DegreeHandler {
    private DegreeService: IService<DegreeDTO>;

    constructor(service: IService<DegreeDTO>) {
        this.DegreeService = service;
    }

    getDegreeId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.DegreeService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getDegrees = async (req: Request, res: Response) => {
        try {
            const result = await this.DegreeService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postDegree = async (req: Request, res: Response) => {
        try {
            const result = await this.DegreeService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteDegree = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.DegreeService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateDegree = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.DegreeService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }

}