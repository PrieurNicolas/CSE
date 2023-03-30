import { ReportDTO } from "../DTO/report.dto";
import { IService } from "../services/core/service.interface";
import { Request, Response } from "express";

export class ReportHandler {
    private ReportService: IService<ReportDTO>;

    constructor(service: IService<ReportDTO>) {
        this.ReportService = service;
    }

    getReportId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.ReportService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getReports = async (req: Request, res: Response) => {
        try {
            const result = await this.ReportService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postReport = async (req: Request, res: Response) => {
        try {
            const result = await this.ReportService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteReport = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.ReportService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateReport = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.ReportService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }

}