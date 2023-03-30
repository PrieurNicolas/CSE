import { Router } from "express";
import { reportHandler } from "../inject";
const reportController = Router();

reportController.get('/', reportHandler.getReports)
reportController.post('/', reportHandler.postReport)
reportController.delete('/:id', reportHandler.deleteReport)
reportController.get('/:id', reportHandler.getReportId)
reportController.put('/:id', reportHandler.updateReport)

export { reportController }