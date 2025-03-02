import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Store Management API",
            version: "1.0.0",
            description: "Este proyecto se centra en el desarrollo de una API web implementada en NodeJS, destinada a gestionar el registro de ventas, productos en línea y otras operaciones comerciales de una empresa. La aplicación se estructura en dos secciones principales, administrador y cliente.",
            contact:{
                name: "Devyn Tubac",
                email: "dtubac-2020247@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3001/opinionManager/v1"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        }
    },
    apis:[
        "./src/auth/auth.router.js",
        "./src/user/user.model.js",
        "./src/user/user.router.js",
        "./src/category/category.model.js",
        "./src/category/category.router.js",
        "./src/cart/cart.model.js",
        "./src/cart/cart.router.js",
        "./src/product/product.model.js",
        "./src/product/product.router.js",
        "./src/purchase/purchase.router.js",
        "./src/invoice/invoice.router.js",
        "./src/invoice/invoice.model.js"
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}