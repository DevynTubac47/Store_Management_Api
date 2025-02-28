import { body, param } from "express-validator"
import { validarCampos } from "./validate-fields.js"
import { handleErrors } from "./handle-errors.js"
import { validateJWT } from "./validate-jwt.js"

export const completePurchaseValidator = [
    validateJWT,
    validarCampos,
    handleErrors
]

export const gethistoryPurchasesValidator = [
    validateJWT,
    validarCampos,
    handleErrors
]