import { Router } from "express"
import { registerAdmin, register, login} from "./auth.controller.js"
import { registerAdminValidator, loginValidator, registerValidator } from "../middlewares/user-validators.js"
import { uploadProfilePicture } from "../middlewares/multer-uploads.js"

const router = Router()

router.post(
    "/admin/register",
    uploadProfilePicture.single("profilePicture"), 
    registerAdminValidator, 
    registerAdmin
)

router.post(
    "/register",
    uploadProfilePicture.single("profilePicture"), 
    registerValidator, 
    register
)

router.post(
    "/login",
    loginValidator,
    login
)

export default router
