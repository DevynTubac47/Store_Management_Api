import { Router } from "express";

import { addProductCart, getShoopingCart, deleteProductCart } from "./cart.controller.js";
import { addProductCartValidator, getShoopingCartValidator, deleteProductCartValidator } from "../middlewares/cart-validator.js";

const router = Router();

/**
 * @swagger
 * /addProductCart:
 *   post:
 *     summary: Añadir un producto al carrito
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 description: ID del producto
 *               quantity:
 *                 type: integer
 *                 description: Cantidad del producto
 *                 minimum: 1
 *     responses:
 *       200:
 *         description: Producto añadido al carrito
 *       400:
 *         description: Error de validación
 */
router.post("/addProductCart", addProductCartValidator, addProductCart);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtener el carrito de compras
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Carrito de compras obtenido
 *       400:
 *         description: Error de validación
 */
router.get("/", getShoopingCartValidator, getShoopingCart);

/**
 * @swagger
 * /deleteProductCart:
 *   delete:
 *     summary: Eliminar un producto del carrito
 *     tags: [Cart]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado del carrito
 *       400:
 *         description: Error de validación
 */
router.delete("/deleteProductCart", deleteProductCartValidator, deleteProductCart);

export default router;