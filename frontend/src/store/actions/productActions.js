// import {PRODUCTS_URL,USERS_URL,PAYPAYCONFIG,ORDERS_URL} from '../../constants.js'
import {productAction} from '../store.js'
import axios from 'axios'


export const getProducts = () =>
    async dispatch =>{
        try{
            dispatch(productAction.allProductsRequest())
            const {data} = await axios.get('/api/products')

            dispatch(productAction.ProductsSuccess(data))

        }catch(err){
            console.log(err)
            dispatch(productAction.ProductsFail(err || err.response || err.response.data))
        }
}


export const singleProduct = (id) =>
async dispatch =>{
    try{
            dispatch(productAction.allProductsRequest())
            const {data} = await axios.get(`/api/products/${id}`)

            dispatch(productAction.ProductsSuccess(data))

        }catch(err){
            console.log(err)
            dispatch(productAction.ProductsFail(err || err.response || err.response.data))
        }
}


export const getCollection = (id) =>

async dispatch =>{
    try{
            dispatch(productAction.allProductsRequest())
            const {data} = await axios.get(`/api/products/collection/${id}`)

            dispatch(productAction.ProductsSuccess(data))

        }catch(err){
            console.log(err)
            dispatch(productAction.ProductsFail(err || err.response || err.response.data))
        }
}


