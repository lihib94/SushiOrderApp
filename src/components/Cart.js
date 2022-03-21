import {useEffect} from 'react'
import {bindActionCreators} from 'redux'
import {useDispatch } from 'react-redux'
import {addProduct} from '../redux/actions/cartActions'
import {removeProduct} from '../redux/actions/cartActions'
import {useSelector } from 'react-redux'
import classes from '../assets/css/components/Cart.module.css'
import CartItem from './CartItem'
const Cart = ({cart}) => {

    //dispatch cart actions
    const dispatch = useDispatch()
    const addProductAction = bindActionCreators(addProduct, dispatch)
    const removeProductAction = bindActionCreators(removeProduct, dispatch)
    const totalAmount = useSelector((state) => state.cart.totalAmount)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    const cartSelector = useSelector((state) => state.cart)

    //displaying 2 digits after dot
    const updatedTotalAmount = `$${totalAmount.toFixed(2)}`;

    //display cart localStorage content
    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cartSelector))
      },[cartSelector]);

      
return ( 
    <div className={classes.CartCard}> 
        <h1 className={classes.yourCart}>Your Cart</h1>
        <div className={classes.total}>Total quantity: {totalQuantity} dishes</div>
        <div className={classes.total}>Total amount: {updatedTotalAmount}</div>
        <ul className={classes.cartItems}>
                        {cart && cart.map((item,indx) => (
                            <CartItem
                            id={item.id}
                            key={item.id}
                            name={item.name}
                            amount={item.amount}
                            price={item.price}
                            quantity={item.quantity}
                            meal={item}
                            onRemove={() => removeProductAction(item.id)}
                            onAdd={() => addProductAction(item,1)}
                            />
                        ))}
        </ul>
        { totalQuantity === 0 ?  <div> Your cart is currently empty, add some dishes before your stomach will get angry </div> : " "}
        
    </div>
);  
}
export default Cart