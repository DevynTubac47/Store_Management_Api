import { Router } from "express";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";
import { createdProductValidator, deleteProductValidator, updateProductValidator, getProductByNameValidator, getProductSouldOutValidator } from "../middlewares/product-validators.js";
import { addProduct, deleteProduct, getProduct, getProductbyCategory, getProductByName, updateProduct, getProductSouldOut, getTopSellingProducts } from "./product.controller.js";

const router = Router();

/**
 * @swagger
 * /addProduct:
 *   post:
 *     summary: Añadir un nuevo producto
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nameProduct:
 *                 type: string
 *                 description: Nombre del producto
 *               descriptionProduct:
 *                 type: string
 *                 description: Descripción del producto
 *               price:
 *                 type: number
 *                 description: Precio del producto
 *               stock:
 *                 type: number
 *                 description: Stock del producto
 *               category:
 *                 type: string
 *                 description: ID de la categoría
 *               imageProduct:
 *                 type: string
 *                 format: binary
 *                 description: Imagen del producto
 *     responses:
 *       200:
 *         description: Producto añadido
 *       400:
 *         description: Error de validación
 */
router.post("/addProduct", uploadProfilePicture.single("imageProduct"), createdProductValidator, addProduct);

/**
 * @swagger
 * /findProduct/{nameProduct}:
 *   get:
 *     summary: Buscar un producto por nombre
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: nameProduct
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del producto
 *     responses:
 *       200:
 *         description: Producto encontrado
 *       400:
 *         description: Error de validación
 */
router.get("/findProduct/:nameProduct", getProductByNameValidator, getProductByName);

/**
 * @swagger
 * /productCatalog:
 *   get:
 *     summary: Obtener el catálogo de productos
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Catálogo de productos obtenido
 *       400:
 *         description: Error de validación
 */
router.get("/productCatalog/", getProduct);

/**
 * @swagger
 * /productCatalog/category/{uid}:
 *   get:
 *     summary: Obtener productos por categoría
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la categoría
 *     responses:
 *       200:
 *         description: Productos obtenidos por categoría
 *       400:
 *         description: Error de validación
 */
router.get("/productCatalog/category/:uid", getProductbyCategory);

/**
 * @swagger
 * /souldOut:
 *   get:
 *     summary: Obtener productos agotados
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Productos agotados obtenidos
 *       400:
 *         description: Error de validación
 */
router.get("/souldOut/", getProductSouldOutValidator, getProductSouldOut);

/**
 * @swagger
 * /updateProduct/{uid}:
 *   put:
 *     summary: Actualizar un producto
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nameProduct:
 *                 type: string
 *                 description: Nombre del producto
 *               descriptionProduct:
 *                 type: string
 *                 description: Descripción del producto
 *               price:
 *                 type: number
 *                 description: Precio del producto
 *               stock:
 *                 type: number
 *                 description: Stock del producto
 *               category:
 *                 type: string
 *                 description: ID de la categoría
 *               imageProduct:
 *                 type: string
 *                 description: URL de la imagen del producto
 *     responses:
 *       200:
 *         description: Producto actualizado
 *       400:
 *         description: Error de validación
 */
router.put("/updateProduct/:uid", updateProductValidator, updateProduct);

/**
 * @swagger
 * /deleteProduct/{uid}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Product]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: uid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado
 *       400:
 *         description: Error de validación
 */
router.delete("/deleteProduct/:uid", deleteProductValidator, deleteProduct);

/**
 * @swagger
 * /topSellingProducts:
 *   get:
 *     summary: Obtener los productos más vendidos
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Productos más vendidos obtenidos
 *       400:
 *         description: Error de validación
 */
router.get("/topSellingProducts", getTopSellingProducts);

export default router;