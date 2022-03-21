import {useState} from 'react'
import FormInput from './FormInput.js'
import {bindActionCreators} from 'redux'
import {clearCart} from '../redux/actions/cartActions'
import orderFetch from '../redux/actions/orderActions'
import {useDispatch } from 'react-redux'
import classes from '../assets/css/components/Checkout.module.css'
const Chenckout = (props) => {

    //dispatch cart actions
    const dispatch = useDispatch()
    const orderFetchtAction = bindActionCreators(orderFetch, dispatch)
    const clearCartAction = bindActionCreators(clearCart, dispatch)

    const [values, setValues] = useState({
        name: "",
        lastname: "",
        phone: "",
        postalcode: "",
        city: "",
        street: "",
        email: "",
      });
      
      //Input's Validation
      const inputs = [
        {
          id: 1,
          name: "name",
          type: "text",
          placeholder: "name",
          errorMessage:
            "name should be 2-10 characters and shouldn't include any special character!",
          label: "name",
          pattern: "^[A-Za-z]{2,10}$",
          required: true,
        },
        {
          id: 2,
          name: "lastname",
          type: "text",
          placeholder: "lastname",
          errorMessage:
            "last name should be 2-10 characters and shouldn't include any special character!",
          label: "lastname",
          pattern: "^[A-Za-z]{2,10}$",
          required: true,
        },
        {
          id: 3,
          name: "phone",
          type: "text",
          placeholder: "phone",
          errorMessage:
            "phone should should be 10 characters and include only numbers!",
          label: "phone",
          pattern: "^[0-9]{10,10}$",
          required: true,
        },
        {
          id: 4,
          name: "postalcode",
          type: "text",
          placeholder: "postalcode",
          errorMessage:
            "postalcode should should be exactly 5 characters and include only numbers!",
          label: "postalcode",
          pattern: "^[0-9]{5,5}$",
          required: true,
        },
        {
          id: 5,
          name: "city",
          type: "text",
          placeholder: "city",
          errorMessage:
            "city should should be 2-10 characters and shouldn't include numbers or special character!",
          label: "city",
          pattern: "^[A-Za-z]{2,10}$",
          required: true,
        },
        {
          id: 6,
          name: "street",
          type: "text",
          placeholder: "street",
          errorMessage:
            "street should be 2-15 characters and include numbers!",
          label: "street",
          pattern: "^([0-9\\\/# ,a-zA-Z]+[ ,]+[0-9\\\/#, a-zA-Z]{1,})$",
          required: true,
        },
        {
          id: 7,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
      ];
    
      //sumbit the form ,upload order to firebase and clear the cart
      const handleSubmit = (e) => {
        e.preventDefault();
        props.setHasOrdered(true)
        orderFetchtAction(values)
        clearCartAction();
      };
    
      //set inputs from the user to the values state
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
return ( 
    <div className={classes.checkoutCard}>
        <form onSubmit={handleSubmit}>
            <h1 className={classes.checkoutHeadline}>Checkout</h1>
            <h5>please enter your details</h5>
            {inputs.map((input) => (
                <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                />
            ))}
            <button className={classes.orderBtn}>Order</button>            
        </form>
    </div>
);  
}
export default Chenckout