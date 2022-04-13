import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import { useEffect, useState,useRef } from 'react';
import MealOption from "../components/MealOption";
import Meals from "../components/Meals";
import classes from '../assets/css/components/Menu.module.css'


const Menu = () => {
    const [scrollFlag,setScrollFlag] = useState(false)

    //scrolling to menu element
    const params = useParams();
    const myRef = useRef(null);
    useEffect(()=>{
        if (scrollFlag){
            scrollToSection(myRef)
        }
        setScrollFlag(true)
    },[params])

    const scrollToSection = (elementRef) => {
            window.scrollTo({
                top: elementRef.current.offsetTop+400,
                block: "start",
                behavior: "smooth",
              });
      };

    const {dishId} = useParams()
    //menus are salads,soups,sushi,nigiri
    const menus = useSelector(state => state.products.products)
    const loadedMeals = [];
    //selsectedMeal will contain salads || soups || sushi || nigiri
    const selectedMeal = menus[dishId]
    //fill array loadedMeals with selectedMeal (key,value added)
    if(selectedMeal){
        for (const key in selectedMeal) {
            loadedMeals.push({
                id: key,
                name: selectedMeal[key].name,
                description: selectedMeal[key].description,
                price: selectedMeal[key].price,
            });
        }
}
   
return ( 
    <div className={classes.menu}>
        <h1>Menu</h1>
        <MealOption/>
        <div className={classes.dishId}>{dishId}</div>
        <div className={classes.mealsContainer}  >
            <Meals selectedMeal={loadedMeals} myRef={myRef}/>
        </div>
       
    </div>
);}
export default Menu