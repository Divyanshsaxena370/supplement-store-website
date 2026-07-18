const Product = require("../models/Product");

const addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();

        res.status(201).json({
            message: "Product Added Successfully",
            product
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getProducts = async (req, res) => {
    try{
        const products = await Product.find();

        res.status(200).json({
            success:true,
            data:products,
        });
    }catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        });
    }
};

module.exports = {
    getProducts,
    addProduct
};