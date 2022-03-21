import {FETCH_PRODUCTS} from '../types'
const initialState = {
    products:[],
    isLoading : true,
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:
        return {
            ...state,
            products: action.payload,
            isLoading: false
        }
        default:
            return state
    }

}

export default productsReducer