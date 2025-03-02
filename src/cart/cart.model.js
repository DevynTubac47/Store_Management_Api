import { Schema, model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       required:
 *         - user
 *         - products
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
 *               quantity:
 *                 type: integer
 *                 description: Cantidad del producto
 *                 minimum: 1
 *       example:
 *         user: 60d0fe4f5311236168a109ca
 *         products:
 *           - product: 60d0fe4f5311236168a109cb
 *             quantity: 2
 */

const cartSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ]
},{
    timestamps: true,
    versionKey: false 
});

export default model("Cart", cartSchema);
