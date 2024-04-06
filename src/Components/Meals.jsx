import MealItem from "./MealItem";
import useHttp from "../hook/useHttp";
import Error from "./UI/Error";

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if(isLoading){
    return <p className="center">fecting this ....</p>
  }

  if(error){
    return <Error title="Failed to fetch meals" message={error.message}/>
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
