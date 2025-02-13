import { Schema, model } from "mongoose";

const userSchema = Schema({
    nameProduct:{
        type: String,
        required: [true, "Name product is required"],
        maxLength: [60, "Nampe product cannot exceed 60 characters"]
    },
    descriptionProduct:{
        type: String,
        required: [true, "Description product is required"],
        maxLength: [200, "Description product cannot exceed 200 characters"]
    },
    price:{
        type: Double,
        required: [true, "Price is required"],
    },
    stock:{
        type: Number
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    imageProduct:{
        type:String
    },
    status: {
        type: Boolean,
        default: true
    },
},{
    timestamps: true,
    versionKey: false
})