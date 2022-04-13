import {useState} from 'react'
import FormInput from './FormInput.js'
import {bindActionCreators} from 'redux'
import {clearCart} from '../redux/actions/cartActions'
import orderFetch from '../redux/actions/orderActions'
import {useDispatch } from 'react-redux'
import {useSelector } from 'react-redux'
import classes from '../assets/css/components/Checkout.module.css'
const Chenckout = (props) => {

    //dispatch cart actions
    const dispatch = useDispatch()
    const orderFetchtAction = bindActionCreators(orderFetch, dispatch)
    const clearCartAction = bindActionCreators(clearCart, dispatch)

    //Extreme case - order without having any dishes on cart
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)
    const [cantOrder, setCantOrder] = useState(false)

    //if "order" button was pressed - hasOrdered will be true,a message will apear and cart will be reset.
    const [hasOrdered,setHasOrdered] = useState(false)

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
          placeholder: "Name",
          errorMessage:
            "Name should be 2-10 characters and shouldn't include any special character",
          label: "Name",
          pattern: "^[A-Za-z]{2,10}$",
          required: true,
        },
        {
          id: 2,
          name: "lastname",
          type: "text",
          placeholder: "Lastname",
          errorMessage:
            "Last name should be 2-10 characters and shouldn't include any special character",
          label: "Lastname",
          pattern: "^[A-Za-z]{2,10}$",
          required: true,
        },
        {
          id: 3,
          name: "phone",
          type: "text",
          placeholder: "Phone",
          errorMessage:
            "Phone should be 10 characters and include only numbers",
          label: "Phone",
          // pattern: "^[0-9]{10,10}$",
          pattern: "^[0][5][0|2|3|4|5|9]{1}[-]{0,1}[0-9]{7}$",
          required: true,
        },
        {
          id: 4,
          name: "postalcode",
          type: "text",
          placeholder: "Postalcode",
          errorMessage:
            "Postalcode should be exactly 5 characters and include only numbers",
          label: "Postalcode",
          pattern: "^[0-9]{5,5}$",
          required: true,
        },
        {
          id: 5,
          name: "city",
          type: "text",
          placeholder: "City",
          errorMessage:
            "City should be 2-10 characters and shouldn't include numbers or special character",
          label: "City",
          pattern: "^[A-Za-z]{2,10}$",
          required: true,
        },
        {
          id: 6,
          name: "street",
          type: "text",
          placeholder: "Street",
          errorMessage:
            "Street should be 2-15 characters and include numbers",
          label: "Street",
          pattern: "^([0-9\\\/# ,a-zA-Z]+[ ,]+[0-9\\\/#, a-zA-Z]{1,})$",
          required: true,
        },
        {
          id: 7,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address",
          label: "Email",
          pattern: "^([A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64})$",
          required: true,
        },
      ];
    
      //sumbit the form ,upload order to firebase and clear the cart
      const handleSubmit = (e) => {
        e.preventDefault();
        //Extreme case - order without having any dishes on cart
        if (totalQuantity <= 0){
          // alert("You must add dishes in order to order")
          setCantOrder(true)
        }
        else{
          setHasOrdered(true)
          orderFetchtAction(values)
          clearCartAction();
        }
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
            {hasOrdered &&
                 <div className={classes.ordered}> Dear {values.name.toUpperCase()}, Your order has been completed, soon you will be full...</div>
             }
           {cantOrder && <div className={classes.cantOrder}>You must add dishes in order to order</div>} 
        </form>
    </div>
);  
}
export default Chenckout