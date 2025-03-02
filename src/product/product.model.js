import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - nameProduct
 *         - descriptionProduct
 *         - price
 *         - category
 *       properties:
 *         nameProduct:
 *           type: string
 *           description: Nombre del producto
 *         descriptionProduct:
 *           type: string
 *           description: Descripción del producto
 *         price:
 *           type: number
 *           description: Precio del producto
 *         stock:
 *           type: number
 *           description: Stock del producto
 *         category:
 *           type: string
 *           description: ID de la categoría
 *         imageProduct:
 *           type: string
 *           description: URL de la imagen del producto
 *         sales:
 *           type: number
 *           description: Ventas del producto
 *         status:
 *           type: boolean
 *           description: Estado del producto
 *       example:
 *         nameProduct: "Laptop"
 *         descriptionProduct: "Laptop de alta gama"
 *         price: 1500
 *         stock: 10
 *         category: "60d0fe4f5311236168a109ca"
 *         imageProduct: "http://example.com/image.jpg"
 *         sales: 5
 *         status: true
 */

const productSchema = new Schema({
    nameProduct:{
        type: String,
        required: [true, "Name product is required"],
        maxLength: [60, "Name product cannot exceed 60 characters"]
    },
    descriptionProduct:{
        type: String,
        required: [true, "Description product is required"],
        maxLength: [200, "Description product cannot exceed 200 characters"]
    },
    price:{
        type: Number,
        required: [true, "Price is required"],
    },
    stock:{
        type: Number
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    imageProduct:{
        type:String
    },
    sales: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: true
    },
},{
    timestamps: true,
    versionKey: false
});

export default model('Product', productSchema);