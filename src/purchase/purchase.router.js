import { Router } from "express";
import { completePurchase, gethistoryPurchases } from "./purchase.controller.js";
import { completePurchaseValidator, gethistoryPurchasesValidator } from "../middlewares/purchases-validator.js";

const router = Router();

/**
 * @swagger
 * /completePurchase:
 *   post:
 *     summary: Completar una compra
 *     tags: [Purchase]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: ID del usuario
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     product:
 *                       type: string
 *                       description: ID del producto
 *                     quantity:
 *                       type: integer
 *                       description: Cantidad del producto
 *     responses:
 *       200:
 *         description: Compra completada
 *       400:
 *         description: Error de validación
 */
router.post("/completePurchase", completePurchaseValidator, completePurchase);

/**
 * @swagger
 * /historyPurchase:
 *   get:
 *     summary: Obtener el historial de compras
 *     tags: [Purchase]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Historial de compras obtenido
 *       400:
 *         description: Error de validación
 */
router.get("/historyPurchase", gethistoryPurchasesValidator, gethistoryPurchases);

export default router;