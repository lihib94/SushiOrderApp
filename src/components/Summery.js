
import classes from '../assets/css/components/Summery.module.css'
const Summery = () => {
  return (
    <section className={classes.summery}>
      <h2 className={classes.headLine}>Delicious Sushi, Delivered To You</h2>
      <div className={classes.summeryLineContainer}>
        <p className={classes.summeryLine}>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className={classes.summeryLine}>
          All our meals are cooked with high-quality ingredients, just-in-time and
          of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};

export default Summery;