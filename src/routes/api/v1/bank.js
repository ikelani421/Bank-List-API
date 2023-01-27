import BankController from "controllers/BankController";
import { Router } from "express";

const bankRouter = Router();


bankRouter.get('/banks', BankController.getBanks)

export default bankRouter;