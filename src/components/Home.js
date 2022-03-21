import { useState } from 'react';
import Header from './Header';
import Summery from './Summery'
import classes from '../assets/css/components/Home.module.css'
import Menu from '../components/Menu';
import Modal from './Modal'
import {useSelector } from 'react-redux'

//main page contains : Header & modal for Cart, Summery text, Menu itself
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const cart = useSelector((state) => state.cart.products)

return ( 
    <div className={classes.home}> 
      <div className={classes.ModalContainer}>
        <Header onModalClicked={() => setIsOpen(true)}/>
        <Modal open={isOpen} cart={cart} onClose={() => setIsOpen(false)}></Modal>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.pic}></div>
        <div className={classes.SummeryMenu}>
          <Summery/>
          <Menu/>
        </div>
      </div>
     
    </div>
);}
export default Home