import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
import MealOption from "../components/MealOption";
import Meals from "../components/Meals";
import classes from '../assets/css/components/Menu.module.css'


const Menu = () => {
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
        <div className={classes.mealsContainer}>
            <Meals selectedMeal={loadedMeals} />
        </div>
       
    </div>
);}
export default Menu