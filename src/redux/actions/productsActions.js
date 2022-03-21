import {FETCH_PRODUCTS} from '../types'
import axios from 'axios'

//fetching the data, and send it as payload to the reducer
const fetchProducts = () => async dispatch => {
    try {
    const results =  await axios.get("https://foodapp-a1db5-default-rtdb.firebaseio.com/meals.json")
    // console.log(results.data)

    dispatch({
        type: FETCH_PRODUCTS,
        payload: results.data
    })
    }
    catch(err) {
        console.error(err)
    }
    
}

export default fetchProducts