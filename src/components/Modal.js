import { Fragment,useState } from 'react';
import classes from '../assets/css/components/Modal.module.css'
import React from 'react'
import ReactDom from 'react-dom'
import Checkout from './Checkout'
import Cart from './Cart';

//modal overlay for CART & CHECKOUT (opens when pressing the cart button)
const Modal = ({ open, children, onClose,cart }) =>{

  //if "order" button was pressed - hasOrdered will be true,a message will apear and cart & checkout wont be rendered
  const [hasOrdered,setHasOrdered] = useState(false)
  if (!open){
    return null
  } 

  return ReactDom.createPortal(
    <Fragment>
      <div className={classes.overlay} onClick={onClose}/>
        <div className={classes.modal}>
            <button className={classes.closeBtn} onClick={onClose}>X</button>
            {children}
            <div className={classes.cartContainer}>
            {hasOrdered &&
              <div className={classes.orderedContainer}>
                 <div className={classes.ordered}>Your order has been completed, soon you will be full...</div>
              </div>
             }
             {!hasOrdered && <Cart cart={cart} className={classes.cart}/>}
             {!hasOrdered && <Checkout className={classes.checkout} setHasOrdered={setHasOrdered}/>}
            </div>
      </div>
    </Fragment>,
    document.getElementById('portal')
  )
}
export default Modal