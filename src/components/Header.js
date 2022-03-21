import HeaderCartButton from './HeaderCartButton';
import classes from '../assets/css/components/Header.module.css'

//Header of the page, contain headline and cart button
const Header = (props) => {
    return (
        <div className={classes.header}>
            <nav>
                <h1>Japanese Sushi Restaurant</h1>
                <HeaderCartButton onClick={props.onModalClicked}/>
            </nav>
        </div>
    )
};
export default Header;