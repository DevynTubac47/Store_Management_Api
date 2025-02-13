import { body, param } from "express-validator";
import { handleErrors } from "./handle-errors.js";
import { validarCampos } from "./validate-fields.js";

export const createdCategoryValidator = [
    body("nameCategory").notEmpty().withMessage("The name category is required"),
    body("descriptionCategory").notEmpty().withMessage("The description is required"),
    validarCampos,
    handleErrors
];

export const updateCategoryValidator = [
    param("id").isMongoId().withMessage("It is not a valid ID"),
    body("descriptionCategory").optional().notEmpty().withMessage("Description is required"),
    validarCampos,
    handleErrors
];

export const deleteCategoryValidator = [
    param("id").isMongoId().withMessage("It is not a valid ID"),
    validarCampos,
    handleErrors
];