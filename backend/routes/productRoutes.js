import express from 'express'
const router = express.Router()
import {getAllProducts,getProductById,getProductByCategory, getProductByBrand} from '../controllers/productController.js'


router.route('/').get(getAllProducts)
router.route('/:id').get(getProductById)
router.route('/collection/:id').get(getProductByCategory)
router.route('/brand/:id').get(getProductByBrand)



export default router;