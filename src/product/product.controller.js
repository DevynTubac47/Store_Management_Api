'use strict';

import Product from "./product.model.js";
import Category from "../category/category.model.js";

export const addProduct = async (req, res) => {
    try{
        const data = req.body;
        const category = await Category.findOne({ category: data.category});
        let imageProduct = req.file ? req.file.filename : null;
        data.imageProduct = imageProduct

        if(!category){
            return res.status(404).json({
                success: false,
                message: 'Category not found',
            });
        }

        const product = new Product({
            ...data,
            keeper: category._id,
        });

        await product.save();

        res.status(200).json({
            success: true,
            product
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Error saving product',
            error: error.message
        })
    }
}