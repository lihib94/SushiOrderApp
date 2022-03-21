import classes from '../assets/css/components/MealOption.module.css'
import { Link } from "react-router-dom";
import SaladsPic from '../assets/images/SaladsPic.jpg';
import SoupsPic from '../assets/images/SoupsPic.jpg';
import SushiPic from '../assets/images/SushiPic.jpg';
import NigiriPic from '../assets/images/NigiriPic.jpg';

//choosing one option of meals salads || soups || sushi || nigiri 
const MealOption = () => {
return ( 
    <div className={classes.links}>
        <div className={classes.Linkcontainer}>
            <Link to="/home/salads" className={classes.link}>
                <img className={classes.MenuImage} src={SaladsPic} alt="Salads" />
            </Link>
            <h2>Salads</h2>
        </div>
        <div className={classes.Linkcontainer}>
            <Link to="/home/soups" className={classes.link}>
                <img className={classes.MenuImage} src={SoupsPic} alt="Soups" />
            </Link>
            <h2>Soups</h2>
        </div>
        <div className={classes.Linkcontainer}>
            <Link to="/home/sushi" className={classes.link}>
            <img className={classes.MenuImage} src={SushiPic} alt="Sushi"/>
            </Link>
            <h2>Sushi</h2>
        </div>
        <div className={classes.Linkcontainer}>
            <Link  to="/home/nigiri" className={classes.link}>
            <img className={classes.MenuImage} src={NigiriPic} alt="Nigiri"/>
            </Link>
            <h2>Nigiri</h2>
        </div>
    </div>
);  
}
export default MealOption