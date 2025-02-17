import { Router } from "express"
import { deleteUser, updateRol, updateUser } from "./user.controller.js"
import { deleteUserValidator, updateRolValidator, updateUserValidator, updateProfileAdminValidator, deleteProfileValidator } from "../middlewares/user-validators.js"

const router = Router()

router.patch("/updateRol/:uid", updateRolValidator, updateRol)
router.put("/updateUser/:uid", updateUserValidator, updateUser)
router.delete("/deleteUser/:uid",deleteUserValidator, deleteUser)

router.put("/updateProfile/:uid", updateProfileAdminValidator, updateUser)
router.delete("/deleteProfile/:uid",deleteProfileValidator, deleteUser)

export default router
