import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Invoice:
 *       type: object
 *       required:
 *         - user
 *         - products
 *         - total
 *       properties:
 *         user:
 *           type: string
 *           description: ID del usuario
 *         products:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               product:
 *                 type: string
 *                 description: ID del producto
 *               nameProduct:
 *                 type: string
 *                 description: Nombre del producto
 *               quantity:
 *                 type: integer
 *                 description: Cantidad del producto
 *               price:
 *                 type: number
 *                 description: Precio del producto
 *               totalProduct:
 *                 type: number
 *                 description: Precio total del producto
 *         total:
 *           type: number
 *           description: Precio total de la factura
 *         purchaseDate:
 *           type: string
 *           format: date-time
 *           description: Fecha de la compra
 *       example:
 *         user: "60d0fe4f5311236168a109ca"
 *         products:
 *           - product: "60d0fe4f5311236168a109cb"
 *             nameProduct: "Producto A"
 *             quantity: 2
 *             price: 100
 *             totalProduct: 200
 *         total: 200
 *         purchaseDate: "2025-03-02T00:00:00.000Z"
 */

const invoiceSchema = Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products:[{
        product:{
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        nameProduct:{
            type: String,
            required: true
        },
        quantity:{
            type: Number,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        totalProduct:{
            type: Number,
            required: true
        }
    }],
    total:{
        type: Number,
        required: true
    },
    purchaseDate:{
        type: Date,
        default: Date.now
    },
},{
    timestamps: true,
    versionKey: false
});

export default model("Invoice", invoiceSchema);