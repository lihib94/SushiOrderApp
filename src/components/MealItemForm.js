
import {useRef} from 'react'
import classes from '../assets/css/components/MealItemForm.module.css'

//form of each dishto order
const MealItemForm = ({id,meal,onAddToCart}) => {
  const amountInputRef = useRef();

     const submitHandler = (event) => {
      event.preventDefault();
      const enteredAmountNumber = +amountInputRef.current.value
      onAddToCart(meal,enteredAmountNumber)
      event.target.reset();
    }

return ( 
    <form  className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor="amount">Amount</label>
        <input ref={amountInputRef} 
            id={'amount_' + id}
            type={'number'}
            min={'1'} 
            max={'5'}
            step={'1'}
            defaultValue={'1'} />
      </div>
      <div className={classes.btnContainer}>
        <button className={classes.addBtn}>+ Add</button>
      </div>
    </form>
);  
}
export default MealItemForm