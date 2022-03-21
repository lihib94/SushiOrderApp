import {ORDER_FETCH} from '../types'
import axios from 'axios'
import {store} from '../store'

//'post' the ordered data to firebase, and send it as payload to the reducer
const orderFetch = (userData) => {
  const {products,totalAmount} = store.getState().cart
    try {
    const results =  axios.post('https://foodapp-a1db5-default-rtdb.firebaseio.com/orders.json', {
      user: {
        name: userData.name,
        lastname: userData.lastname,
        phone: userData.phone,
        postalcode: userData.postalcode,
        city: userData.city,
        street: userData.street,
        email: userData.email,
      },
      orderedItems: {products},
      total: {totalAmount}
    })
    return{
        type: ORDER_FETCH,
    }
    }
    catch(err) {
        console.error(err)
    }
    
}

export default orderFetch