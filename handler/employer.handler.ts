import { EmployerDTO } from "../DTO/employer.dto";
import { IService } from "../services/core/service.interface";
import { Request, Response } from "express";

export class EmployerHandler {
    private EmployerService: IService<EmployerDTO>;

    constructor(service: IService<EmployerDTO>) {
        this.EmployerService = service;
    }

    getEmployerId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.EmployerService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getEmployers = async (req: Request, res: Response) => {
        try {
            const result = await this.EmployerService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postEmployer = async (req: Request, res: Response) => {
        try {
            const result = await this.EmployerService.create(req.body);
            if(null) {
                return  res.status(400).json("Email ou telephone deja utilisé")
            }
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteEmployer = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.EmployerService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateEmployer = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.EmployerService.update(req.body, id);
            if(result.toString().length < 5 && result.toString() !== "0"){
                return res.status(200).json( "mis a jour" );
            } else 
            return res.status(500).json( result ?  result : "fail" );
        } catch (err) {
            res.status(500).json(err)
        }
    }

}