import { Router } from "express";

import { addProductCart, getShoopingCart, deleteProductCart } from "./cart.controller.js";
import { addProductCartValidator, getShoopingCartValidator, deleteProductCartValidator } from "../middlewares/cart-validator.js";

const router = Router();

router.post("/addProductCart", addProductCartValidator,addProductCart);
router.get("/", getShoopingCartValidator, getShoopingCart);
router.delete("/deleteProductCart", deleteProductCartValidator, deleteProductCart);

export default router;