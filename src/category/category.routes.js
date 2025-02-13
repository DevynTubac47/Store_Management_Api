import { Router } from "express";
import { addCategory, getCategory } from "./category.controller.js";
import { createdCategory } from "../middlewares/category-validators.js";

const router = Router();

router.post("/addCategory", createdCategory, addCategory);

router.get("/", getCategory);

export default router;

