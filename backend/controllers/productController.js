import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'



// fetches All Products
// @route Get api/poducts
// @access Public
export const getAllProducts = asyncHandler(async(req,res)=>{

    const products = await Product.find()
    
    res.json(products)
})


// / fetches products by id
// @route Get api/products/:id
// @access Public
export const getProductById = asyncHandler(async(req,res)=>{

    const product = await Product.findById(req.params.id)


    if(product){
        return res.json(product)
    }

    res.status(404)
    throw new Error('Resource not Found')

})

export const getProductByCategory = asyncHandler(async(req,res)=>{

    const product = await Product.find({category: req.params.id})


    if(product){
        return res.json(product)
    }

    res.status(404)
    throw new Error('Resource not Found')

})

export const getProductByBrand = asyncHandler(async(req,res)=>{

    const product = await Product.find({brand:req.params.id})
    console.log(product)


    if(product){
        return res.json(product)
    }

    res.status(404)
    throw new Error('Resource not Found')

})