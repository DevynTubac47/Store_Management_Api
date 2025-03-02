import { config } from "dotenv"
import { initServer } from "./configs/server.js"
import { categoryDefault } from "./src/category/category.controller.js"
import { addAdminDefault } from "./src/auth/auth.controller.js"

config()
initServer()
categoryDefault()
addAdminDefault()