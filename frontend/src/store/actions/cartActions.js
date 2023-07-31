import {cartAction} from '../cartReducer'

export const addCart =(product)=>{
    return dispatch=>{
        console.log(product);
        dispatch(cartAction.addToCart(product))
    }
}
export const decreaseCart =(product)=>{
    return dispatch=>{
        console.log(product);
        dispatch(cartAction.decreaseQTY(product))
    }
}


export const removeCart =(id)=>{
    return dispatch=>{
        dispatch(cartAction.removeItem(id))
    }
}



export const saveShipping =(product)=>{
    return dispatch=>{
        dispatch(cartAction.saveShippingAddress(product))
    }
}


export const clearCartItems =(product)=>{
    return dispatch=>{
        dispatch(cartAction.clearCart())
    }
}


export const payment =(product)=>{
    return dispatch=>{
        dispatch(cartAction.savePaymentMethod(product))
    }
}