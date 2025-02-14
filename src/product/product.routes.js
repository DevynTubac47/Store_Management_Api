import { Router } from "express";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";
import { createdProductValidator, getProductByIdValidator } from "../middlewares/product-validators.js";
import { addProduct, getProductById } from "./product.controller.js";

const router = Router()

router.post("/addProduct",uploadProfilePicture.single("imageProduct"), createdProductValidator, addProduct)

router.get("/findProduct/:uid", getProductByIdValidator, getProductById)

export default router;