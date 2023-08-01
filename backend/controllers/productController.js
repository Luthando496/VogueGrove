import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'



// fetches All Products
// @route Get api/products
// @access Public
export const getAllProducts = asyncHandler(async(req,res)=>{
// PAGINATION
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 8
    const skip = (page - 1) * limit
    const products = await Product.find().skip(skip).limit(limit)

    if(req.query.page){
        const numProducts = await Product.countDocuments()
        if(skip >= numProducts){
            res.status(404)
            throw new Error('This Page does not exist')
        } 
    }
    
    res.json({page:page,products})
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