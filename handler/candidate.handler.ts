import { CandidateDTO } from "../DTO/candidate.dto";
import { IService } from "../services/core/service.interface";
import { Request, Response } from "express";

export class CandidateHandler {
    private CandidateService: IService<CandidateDTO>;

    constructor(service: IService<CandidateDTO>) {
        this.CandidateService = service;
    }

    getCandidateId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.CandidateService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getCandidates = async (req: Request, res: Response) => {
        try {
            const result = await this.CandidateService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postCandidate = async (req: Request, res: Response) => {
        try {
            const result = await this.CandidateService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteCandidate = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.CandidateService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateCandidate = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.CandidateService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }

}