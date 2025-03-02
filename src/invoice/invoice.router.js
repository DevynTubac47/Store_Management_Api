import { Router } from 'express';
import { getInvoiceByUserValidator, updateInvoiceValidator } from '../middlewares/invoice-validator.js';
import { updateInvoice, getInvoiceByUser } from './invoice.controller.js';

const router = Router();

/**
 * @swagger
 * /updateInvoice/{id}:
 *   put:
 *     summary: Actualizar una factura
 *     tags: [Invoice]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la factura
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     product:
 *                       type: string
 *                       description: ID del producto
 *                     nameProduct:
 *                       type: string
 *                       description: Nombre del producto
 *                     quantity:
 *                       type: integer
 *                       description: Cantidad del producto
 *                     price:
 *                       type: number
 *                       description: Precio del producto
 *                     totalProduct:
 *                       type: number
 *                       description: Precio total del producto
 *               total:
 *                 type: number
 *                 description: Precio total de la factura
 *     responses:
 *       200:
 *         description: Factura actualizada
 *       400:
 *         description: Error de validación
 */
router.put("/updateInvoice/:id", updateInvoiceValidator, updateInvoice);

/**
 * @swagger
 * /invoices:
 *   get:
 *     summary: Obtener facturas por usuario
 *     tags: [Invoice]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de facturas obtenida
 *       400:
 *         description: Error de validación
 */
router.get("/invoices", getInvoiceByUserValidator, getInvoiceByUser);

export default router;