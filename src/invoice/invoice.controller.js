import Invoice from "./invoice.model.js";
import Product from "../product/product.model.js";

export const updateInvoice = async (req, res) => {
    try{
        const { id } = req.params;
        const data = req.body;

        const invoice = await Invoice.findById(id);
        if(!invoice){
            return res.status(404).json({
                success: false,
                message: "Invoice not found"
            })
        } 

        let total = 0;

        if(data.products){
            for(const updateProduct of data.products){

                const product = await Product.findOne({nameProduct: updateProduct.nameProduct})
                if(!product){
                    return res.status(404).json({
                        success: false,
                        message: "Product not found"
                    })
                }
                const existingProduct = invoice.products.find(p => p.product && p.product.toString() === product._id.toString());


                if(existingProduct){
                    const quantity = updateProduct.quantity - existingProduct.quantity;
                
                    if(product.stock < quantity){
                        return res.status(400).json({
                            success: false,
                            message: `There are few units available for the product ${product.nameProduct}`
                        })
                    }

                    product.stock -= quantity;
                    await product.save();
                    
                    existingProduct.quantity = updateProduct.quantity;
                    existingProduct.totalProduct = product.price * updateProduct.quantity;
                } else {
                    if (product.stock < updateProduct.quantity) {
                        return res.status(400).json({
                            success: false,
                            message: `There are not enough units available for the product ${product.nameProduct}`
                        });
                    }

                    product.stock -= updateProduct.quantity;
                    await product.save();

                    invoice.products.push({
                        product: product._id,
                        quantity: updateProduct.quantity,
                        totalProduct: product.price * updateProduct.quantity
                    });
                }
            }
        }

        total = invoice.products.reduce((acc, product) => acc + product.totalProduct, 0);
        invoice.total = total;

        await invoice.save();
        return res.status(200).json({
            success: true,
            message: "Invoice updated",
            invoiceUpdated
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Error updating invoice",
            error: error.message
        })
    }
}