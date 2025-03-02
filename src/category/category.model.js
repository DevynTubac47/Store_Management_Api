import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - nameCategory
 *         - descriptionCategory
 *       properties:
 *         nameCategory:
 *           type: string
 *           description: Nombre de la categoría
 *         descriptionCategory:
 *           type: string
 *           description: Descripción de la categoría
 *         status:
 *           type: boolean
 *           description: Estado de la categoría
 *       example:
 *         nameCategory: "Electrónica"
 *         descriptionCategory: "Productos electrónicos y gadgets"
 *         status: true
 */

const categorySchema = Schema({
    nameCategory: {
        type: String,
        required: [true, "Name category is required"],
        unique: true
    },
    descriptionCategory: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Category', categorySchema);