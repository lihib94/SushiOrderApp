import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART,GET_CART} from '../types'

const cartString = window.localStorage.getItem('cart');
let cartJson;
if (cartString){
  cartJson = JSON.parse(cartString);
}
const initialState = {
    products: cartJson ? cartJson.products : [],
    totalAmount : cartJson ? cartJson.totalAmount : 0,
    totalQuantity: cartJson ? cartJson.totalQuantity : 0
}
let lastAction
const cartReducer = (state = initialState, action) => {
    if(lastAction === action){
        return
    }
    switch(action.type){
        case GET_CART:
            return {
                ...state,
                products: state.products
            }
        case ADD_TO_CART:
            window.localStorage.setItem('cart',JSON.stringify({...action.payload.updatedCart,totalAmount:action.payload.updatedTotalAmount,totalQuantity:state.totalQuantity + action.payload.addQuantity}));  
        return {
            ...state,
            products: action.payload.updatedCart,
            totalAmount : action.payload.updatedTotalAmount,
            totalQuantity : state.totalQuantity + action.payload.addQuantity
        }
        case REMOVE_FROM_CART:
            window.localStorage.setItem('cart',JSON.stringify({...action.payload.updatedCart,totalAmount:action.payload.updatedTotalAmount > 0 ? action.payload.updatedTotalAmount : 0,totalQuantity:state.totalQuantity - action.payload.subQuantity}));  
        return {
            ...state,
            products: action.payload.updatedCart,
            totalAmount : action.payload.updatedTotalAmount > 0 ? action.payload.updatedTotalAmount : 0,
            totalQuantity : state.totalQuantity - action.payload.subQuantity
        }
        case CLEAR_CART:
            window.localStorage.setItem('cart',JSON.stringify({products: [],totalAmount: 0 ,totalQuantity: 0}));  
            return {
                ...state,
                products: [],
                totalAmount: 0,
                totalQuantity: 0
            }
        default:
            return state
    }

}

export default cartReducer