'use strict'

import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { dbConnection } from "./mongo.js"
import apiLimiter from "../src/middlewares/rate-limit-validator.js"
import categoryRoutes from "../src/category/category.routes.js"
import authRoutes from "../src/auth/auth.router.js"
import userRoutes from "../src/user/user.router.js"
import productRoutes from "../src/product/product.routes.js"
import cartRoutes from "../src/cart/cart.router.js"
import purchaseRouter from "../src/purchase/purchase.router.js"
import invoiceRouter from "../src/invoice/invoice.router.js"
import { swaggerDocs, swaggerUi } from "./swagger.js"

const middlewares = (app) => {
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    app.use(cors())
    app.use(helmet())
    app.use(morgan("dev"))
    app.use(apiLimiter)
}

const routes = (app) =>{
    app.use("/storeManagement/v1/admin/category", categoryRoutes)
    app.use("/storeManagement/v1/auth", authRoutes)
    app.use("/storeManagement/v1/auth/client", authRoutes)
    app.use("/storeManagement/v1/user", userRoutes)
    app.use("/storeManagement/v1/product", productRoutes)
    app.use("/storeManagement/v1/shoopingCart", cartRoutes)
    app.use("/storeManagement/v1/purchase", purchaseRouter)
    app.use("/storeManagement/v1/invoice", invoiceRouter)
    app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs))
}

const conectarDB = async () =>{
    try{
        await dbConnection()
    }catch(err){
        console.log(`Database connection failed: ${err}`)
        process.exit(1)
    }
}

export const initServer = () => {
    const app = express()
    try{
        middlewares(app)
        conectarDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running on port ${process.env.PORT}`)
    }catch(err){
        console.log(`Server init failed: ${err}`)
    }
}
