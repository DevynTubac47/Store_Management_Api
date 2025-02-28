import { Router } from "express";
import { completePurchase, gethistoryPurchases } from "./purchase.controller.js";
import { completePurchaseValidator, gethistoryPurchasesValidator} from "../middlewares/purchases-validator.js";

const router = Router()

router.post("/completePurchase", completePurchaseValidator, completePurchase)
router.get("/historyPurchase", gethistoryPurchasesValidator, gethistoryPurchases)

export default router;