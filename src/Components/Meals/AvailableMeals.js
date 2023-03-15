import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    // const [meals, setMeals] = useState(null);
    
    const MealsList =  DUMMY_MEALS.map((meal)=>  
    <MealItem 
      key={meal.id}
      id={meal.id}
      name={meal.name} 
      description={meal.description} 
      price={meal.price}/>)

    // useEffect(() => {
    //     fetch('http://localhost:8000/DUMMY_MEALS')
    //         .then(res =>  {
    //             return res.json();
    //         })
    //         .then(data => {
    //             // console.log(data);
    //             setMeals(data)
    //         })
    // }, [])


 return (
     <section className={classes.meals}>
        <Card>
          <ul>
          { MealsList }
          </ul>
        </Card>
     </section>
 );
};

export default AvailableMeals;