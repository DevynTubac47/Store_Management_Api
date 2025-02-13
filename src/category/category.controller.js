'use strict';

import Category from "./category.model.js";

export const addCategory = async (req, res)=>{
    try{
        const data = req.body;

        const category = new Category({
            ...data,
        });

        await category.save();
        
        res.status(200).json({
            success: true,
            category
        });
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Error adding category',
            error
        })
    }
}

export const getCategory = async (req, res) => {
    try{
        const { limite = 5, desde = 0 } = req.query
        const query = { status: true }

        const [total, categorys ] = await Promise.all([
            Category.countDocuments(query),
            Category.find(query)
                .skip(Number(desde))
                .limit(Number(limite))
        ])

        return res.status(200).json({
            success: true,
            total,
            category
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error al obtener los usuarios",
            error: error.message
        })
    }
}