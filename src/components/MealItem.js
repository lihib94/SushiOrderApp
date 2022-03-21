import classes from '../assets/css/components/MealItem.module.css'
import MealItemForm from './MealItemForm'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addProduct} from '../redux/actions/cartActions'

//rendering menu dish
const MealItem = (props) => {
  //dispatch cart actions
  const dispatch = useDispatch()
  const addProductAction = bindActionCreators(addProduct, dispatch)
  const addToCartHandler = (meal,quantity) => {
        const item = {
          id: meal.id,
          name: meal.name,
          amount: meal.amount,
          price: meal.price,
          quantity: quantity
        }
        addProductAction(item,quantity)
    }
    
return ( 
    <li className={classes.meal} key={props.id}>
        <div className={classes.details}>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
        </div>
        <div>
            <MealItemForm key={props.id} id={props.id} meal={props.meal} onAddToCart={addToCartHandler}/>
        </div>
    </li>
);  
}
export default MealItem