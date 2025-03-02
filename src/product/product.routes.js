import { Router } from "express";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";
import { createdProductValidator, deleteProductValidator, updateProductValidator, getProductByNameValidator, getProductSouldOutValidator} from "../middlewares/product-validators.js";
import { addProduct, deleteProduct, getProduct, getProductbyCategory, getProductByName, updateProduct, getProductSouldOut, getTopSellingProducts } from "./product.controller.js";

const router = Router()

router.post("/addProduct",uploadProfilePicture.single("imageProduct"), createdProductValidator, addProduct)
router.get("/findProduct/:nameProduct", getProductByNameValidator, getProductByName)
router.get("/productCatalog/", getProduct)
router.get("/productCatalog/category/:uid", getProductbyCategory)
router.get("/souldOut/", getProductSouldOutValidator, getProductSouldOut)
router.put("/updateProduct/:uid", updateProductValidator, updateProduct)
router.delete("/deleteProduct/:uid", deleteProductValidator, deleteProduct)
router.get("/topSellingProducts", getTopSellingProducts)

export default router;