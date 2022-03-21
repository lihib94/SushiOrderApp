import { combineReducers } from "redux";
import cartReducer from './cartReducer'
import orderReducer from './orderReducer';
import productsReducer from './productsReducer'


const reducers = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    order: orderReducer,
})

export default reducers
