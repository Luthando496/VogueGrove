import {configureStore,createSlice} from '@reduxjs/toolkit';
import {cartReducer} from './cartReducer'
import {userReducer} from './userReducer'
import {orderReducer} from './orderReducer'



const productSlice = createSlice({
    name:'product',
    initialState:{products:[],loading:false,error:null, product:null,page:null,totalPages:6},
    reducers:{
        allProductsRequest(state, action){
            state.loading =true
        },
        ProductsSuccess(state, action){
            state.products = action.payload
            state.page = action.payload
            state.loading = false
        },
        pageLoad(state,action){
            state.page = action.payload
        },
        ProductsFail(state, action){
            state.er =action.payload
            state.loading =false
            state.products = []
        },
        SingleProduct(state, action){
            state.product =action.payload
            state.loading = false
        },
        nameLow(state,action){
            state.products = state.products.sort((a,b)=>a.name.toLowerCase() - b.name.toLowerCase())

        }
        // newProduct(state, action){
        //     state.newProd = action.payload
        //     state.proErr = null
        //     state.proLoad = false
        // },
        // newProdFail(state, action){
        //     state.newProd = {}
        //     state.proErr = action.payload
        //     state.proLoad = false
        // }

    }
})


export const productAction = productSlice.actions

const store = configureStore({
    reducer:{
        prod:productSlice.reducer,
        cart:cartReducer,
        user:userReducer,
        order:orderReducer
    }
})


export default store