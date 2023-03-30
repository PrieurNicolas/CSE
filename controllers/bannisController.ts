import { Router } from "express";
import { bannisHandler } from "../inject";
const bannisController = Router();

bannisController.get('/', bannisHandler.getBanniss)
bannisController.post('/', bannisHandler.postBannis)
bannisController.delete('/:id', bannisHandler.deleteBannis)
bannisController.get('/:id', bannisHandler.getBannisId)
bannisController.put('/:id', bannisHandler.updateBannis)

export { bannisController }