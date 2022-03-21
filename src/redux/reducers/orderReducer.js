import {ORDER_FETCH} from '../types'
const initialState = {
    // userData:[],
    // orderedItems : [],
}

const orderReducer = (state = initialState, action) => {
    switch(action.type){
        case ORDER_FETCH:
        return {
            ...state,
        }
        default:
            return state
    }

}

export default orderReducer