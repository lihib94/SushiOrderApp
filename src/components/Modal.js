import { Fragment,useState } from 'react';
import classes from '../assets/css/components/Modal.module.css'
import React from 'react'
import ReactDom from 'react-dom'
import Checkout from './Checkout'
import Cart from './Cart';

//modal overlay for CART & CHECKOUT (opens when pressing the cart button)
const Modal = ({ open, children, onClose,cart }) =>{

  
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
              <Cart cart={cart} className={classes.cart}/>
              <Checkout className={classes.checkout}/>
            </div>
      </div>
    </Fragment>,
    document.getElementById('portal')
  )
}
export default Modal