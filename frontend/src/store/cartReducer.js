import {createSlice} from '@reduxjs/toolkit'
// import {updateCart} from '../utils/cartUtils'

const cartStore = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :[]
const shipStore = localStorage.getItem('ship') ? JSON.parse(localStorage.getItem('ship')) :{}



const addDecimals =(number)=>{
    return (Math.round(number * 100) / 100).toFixed(2)
}


const cartSlice = createSlice({
    name:'cart',
    initialState:{items:cartStore,shippingAddress:shipStore,PaymentMethod:'PayPal'},
    reducers:{
        addToCart(state, action){
            const item = action.payload
            const existItem = state.items.find(p => p._id === item._id)

            if(existItem) {
                state.items = state.items.map((x) =>
                  x._id === existItem._id ? item : x
                );
              } else {
                state.items = [...state.items, item];
              }
        
            localStorage.setItem('cart',JSON.stringify(state.items))
            
        },
        removeItem(state, action){
            // const id = action.payload
            // const exist = state.items.find(p => p.id === id)
            // if(exist.quantity === 1){
                state.items = state.items.filter(item => item._id !== action.payload)
                
                localStorage.setItem('cart',JSON.stringify(state.items))

            // }else{
            //     exist.quantity--
            // }
        },
        saveShippingAddress(state, action){
            state.shippingAddress = action.payload
            state.itemsPrice = addDecimals(state.items.reduce((acc, item) =>  item.price * item.qty,0))
                
        },
        savePaymentMethod(state, action){
          state.PaymentMethod = action.payload
        
        },
        clearCart(state,action){
          state.items = []
          localStorage.removeItem('cart')
          
        }
        // addQty(state, action){}

    }
})


export const cartAction = cartSlice.actions
export const cartReducer = cartSlice.reducer