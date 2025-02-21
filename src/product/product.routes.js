import { Router } from "express";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";
import { createdProductValidator, deleteProductValidator, getProductByIdValidator, updateProductValidator } from "../middlewares/product-validators.js";
import { addProduct, deleteProduct, getProduct, getProductbyCategory, getProductById, updateProduct } from "./product.controller.js";

const router = Router()

router.post("/addProduct",uploadProfilePicture.single("imageProduct"), createdProductValidator, addProduct)
router.get("/findProduct/:uid", getProductByIdValidator, getProductById)
router.get("/productCatalog/", getProduct)
router.get("/productCatalog/category/:uid", getProductbyCategory)
router.put("/updateProduct/:uid", updateProductValidator, updateProduct)
router.delete("/deleteProduct/:uid", deleteProductValidator, deleteProduct)

export default router;