import { body, param } from "express-validator";
import { handleErrors } from "./handle-errors.js";
import { validarCampos } from "./validate-fields.js";

export const createdCategory = [
    body("nameCategory").notEmpty().withMessage("The name category is required"),
    body("descriptionCategory").notEmpty().withMessage("The description is required"),
    validarCampos,
    handleErrors
]