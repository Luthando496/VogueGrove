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

            if(!existItem){
              const product = {
                _id:item._id,
                name:item.name,
                price:item.price,
                image:item.image,
                qty:1
              }
              state.items = [...state.items, product]
            }else{
              existItem.qty++
            }

        
            localStorage.setItem('cart',JSON.stringify(state.items))
            
        },

        decreaseQTY(state,action){
          const item = action.payload
          const existItem = state.items.find(p => p._id === item._id)
          
          existItem.qty--

            if(existItem.qty < 1){
              state.items = state.items.filter(p => p._id!== item._id)
            }

            localStorage.setItem('cart',JSON.stringify(state.items))
        },
        removeItem(state, action){
            const id = action.payload
            // if(exist.quantity === 1){
                state.items = state.items.filter(item => item._id !== id)
                
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