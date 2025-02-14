import { body, param } from "express-validator"
import { validarCampos } from "./validate-fields.js"
import { handleErrors } from "./handle-errors.js"
import { validateJWT } from "./validate-jwt.js"
import { hasRoles } from "./validate-roles.js"
import { deleteFileOnError } from "./delete-file-on-error.js"

export const createdProductValidator = [
    validateJWT,
    hasRoles("ADMIN_ROLE"),
    body("nameProduct").notEmpty().withMessage("Name product is required"),
    body("descriptionProduct").notEmpty().withMessage("Description is required"),
    body("price").isDecimal({min: 0}).withMessage("The price must not be less than 0"),
    validarCampos,
    deleteFileOnError,
    handleErrors
]

export const getProductByIdValidator = [
    param("uid").isMongoId().withMessage("It is not a valid ID"),
    validarCampos,
    handleErrors
]