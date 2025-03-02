import { Router } from "express";
import { addCategory, deleteCategory, getCategory, updateCategory } from "./category.controller.js";
import { createdCategoryValidator, deleteCategoryValidator, updateCategoryValidator } from "../middlewares/category-validators.js";

const router = Router();

/**
 * @swagger
 * /addCategory:
 *   post:
 *     summary: Añadir una nueva categoría
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nameCategory:
 *                 type: string
 *                 description: Nombre de la categoría
 *               descriptionCategory:
 *                 type: string
 *                 description: Descripción de la categoría
 *     responses:
 *       200:
 *         description: Categoría añadida
 *       400:
 *         description: Error de validación
 */
router.post("/addCategory", createdCategoryValidator, addCategory);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtener todas las categorías
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de categorías obtenida
 *       400:
 *         description: Error de validación
 */
router.get("/", getCategory);

/**
 * @swagger
 * /updateCategory/{id}:
 *   patch:
 *     summary: Actualizar una categoría
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nameCategory:
 *                 type: string
 *                 description: Nombre de la categoría
 *               descriptionCategory:
 *                 type: string
 *                 description: Descripción de la categoría
 *     responses:
 *       200:
 *         description: Categoría actualizada
 *       400:
 *         description: Error de validación
 */
router.patch("/updateCategory/:id", updateCategoryValidator, updateCategory);

/**
 * @swagger
 * /deleteCategory/{id}:
 *   delete:
 *     summary: Eliminar una categoría
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Categoría eliminada
 *       400:
 *         description: Error de validación
 */
router.delete("/deleteCategory/:id", deleteCategoryValidator, deleteCategory);

export default router;

