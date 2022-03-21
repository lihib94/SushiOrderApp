import MealItem from "./MealItem";

//meals are all meals from same salads || soups || sushi || nigiri
//meals containes several "MealItem" 
const Meals = ({selectedMeal}) => {
    const meals = selectedMeal ? Object.values(selectedMeal) : []
return ( 
    selectedMeal && <ul style={{margin: '1rem'}} >
    
     {meals.map((meal) => (
            <MealItem
                key={meal.id}
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
                meal={meal}
            />
    ))}
    
     </ul> || null
)
}
export default Meals