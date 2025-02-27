import { body } from "express-validator";
import { handleErrors } from "./handle-errors.js";
import { validarCampos } from "./validate-fields.js";
import { validateJWT } from "./validate-jwt.js";
import { nameProductExists } from "../helpers/db-validators.js";


export const addProductCartValidator = [
    validateJWT,
    validarCampos,
    handleErrors
];

export const getShoopingCartValidator = [
    validateJWT,
    validarCampos,
    handleErrors
];

export const deleteProductCartValidator = [
    validateJWT,
    validarCampos,
    handleErrors
];