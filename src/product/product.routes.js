import { Router } from "express";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";
import { createdProductValidator } from "../middlewares/product-validators.js";
import { addProduct } from "./product.controller.js";

const router = Router()

router.post("/addProduct",uploadProfilePicture.single("imageProduct"), createdProductValidator, addProduct)

export default router;