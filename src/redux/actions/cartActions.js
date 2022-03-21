import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART,GET_CART} from '../types'
import {store} from '../store'
//GET cart from local storage
export const getCart = () => {
    return{
        type: GET_CART,
    }
}
//ADD product to cart
export const addProduct = (product, quantity) => {
    console.log(quantity)
    const {products, totalAmount} = store.getState().cart
    const existingIndex = products.findIndex((item) => item.id === product.id);
    const existingCartItem = products[existingIndex];
    let updatedCart
    let updatedTotalAmount
    let addQuantity = quantity
    if(existingCartItem) {
        updatedTotalAmount = totalAmount  + quantity * product.price
        console.log({'product.quantity':product.quantity})
        const item = {...product, quantity: products[existingIndex].quantity + quantity, amount: product.price*quantity}
        console.log(item)
        products[existingIndex] = item
        updatedCart = [...products]
        console.log({'updatedCart':updatedCart})
    }
    else {
        updatedTotalAmount = totalAmount + quantity * product.price
        updatedCart = [...products, {...product, quantity,id: product.id, amount: product.price*quantity}]
    } 
    return{
        type: ADD_TO_CART,
        payload: {
            updatedCart,
            updatedTotalAmount,
            addQuantity
        }, 
    }
}

//REMOVE product to cart
export const removeProduct = (id) => {
    const {products, totalAmount} = store.getState().cart
    const existingIndex = products.findIndex((item) => item.id === id);
    const existingCartItem = products[existingIndex];
    let updatedCart
    let subQuantity =  1
    const updatedTotalAmount = totalAmount - existingCartItem.price;
    if(existingCartItem.quantity === 1) {
        updatedCart = products.filter((item) => item.id !== id);
        console.log({'updatedCart':updatedCart})
    }
    else {
        let updatedProduct = {...existingCartItem, quantity: products[existingIndex].quantity - 1}
        updatedCart = [...products]
         updatedCart[existingIndex] = updatedProduct
    }
    return{
        type: REMOVE_FROM_CART,
        payload: {
            updatedCart,
            updatedTotalAmount,
            subQuantity
        },
    }
}

//CLEAR products 
export const clearCart = () => {
    return{
        type: CLEAR_CART,
    }
}