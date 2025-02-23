import User from "../user/user.model.js"
import Product from "../product/product.model.js"

export const emailExists = async (email = "") => {
    const existe = await User.findOne({email})
    if(existe){
        throw new Error(`The email ${email} is already registered`)
    }
}

export const usernameExists = async (username = "") => {
    const existe = await User.findOne({username})
    if(existe){
        throw new Error(`The username ${username} is already registered`)
    }
}

export const userExists = async (uid = " ") => {
    const existe = await User.findById(uid)
    if(!existe){
        throw new Error("No existe el usuario con el ID proporcionado")
    }
}

export const adminRol = async (uid = "", { req }) => {
    if(!req.usuario || !req.usuario.role) {
        throw new Error("No se pudo verificar el rol del usuario"); 
    }

    const userModify = await User.findById(uid);
    if (!userModify) {
        throw new Error("Usuario no encontrado");
    }

    if (userModify.role === "ADMIN_ROLE" && req.usuario.role === "ADMIN_ROLE") {
        throw new Error("No tienes permisos para modificar a otro admin");
    }
};

export const adminRolDelete = async (uid = "", { req }) => {
    if(!req.usuario || !req.usuario.role) {
        throw new Error("No se pudo verificar el rol del usuario"); 
    }

    const userModify = await User.findById(uid);
    if (!userModify) {
        throw new Error("Usuario no encontrado");
    }

    if (userModify.role === "ADMIN_ROLE" && req.usuario.role === "ADMIN_ROLE") {
        throw new Error("No tienes permisos para eliminar a otro admin");
    }
};

export const nameProductExists = async (nameProduct = "") => {
    const existe = await Product.findOne({nameProduct})
    if(existe){
        throw new Error(`The product name ${nameProduct} is already registered`)
    }
}
