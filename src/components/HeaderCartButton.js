
import CartIcon from '../assets/images/cartIcon';
import classes from '../assets/css/components/HeaderCartButton.module.css'
import {useSelector } from 'react-redux'
import {useEffect,useState} from 'react'

const HeaderCartButton = (props) => {
  
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const products = useSelector((state) => state.cart.products)
  
 //for bumping the Cart everytime we are changing our items
 useEffect(() => {
  // if (products.length === 0 || products === undefined) {
  //   return;
  // }
  setBtnIsHighlighted(true);
  const timer = setTimeout(() => {
    setBtnIsHighlighted(false);
  }, 300);
  return () => {
    clearTimeout(timer);
  };
}, [products]);

const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

return ( 
    <button className={btnClasses} onClick={props.onClick}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      <div>Your Cart</div>
      <div className={classes.badge}>{totalQuantity}</div>
    </button>
    );  
}
export default HeaderCartButton