import { PeriodDTO } from "../DTO/period.dto";
import { IService } from "../services/core/service.interface";
import { Request, Response } from "express";

export class PeriodHandler {
    private PeriodService: IService<PeriodDTO>;

    constructor(service: IService<PeriodDTO>) {
        this.PeriodService = service;
    }

    getPeriodId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.PeriodService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getPeriods = async (req: Request, res: Response) => {
        try {
            const result = await this.PeriodService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postPeriod = async (req: Request, res: Response) => {
        try {
            const result = await this.PeriodService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deletePeriod = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.PeriodService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updatePeriod = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.PeriodService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }

}