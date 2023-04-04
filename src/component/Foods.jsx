import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from './Meal';

const Foods = () => {
    const {meals}=useLoaderData();
    return (
        <div className='grid grid-cols-4 gap-4 p-4 mt-8'>
            {
                meals.map(meal=><Meal
                key={meal.idMeal}
                meal={meal}
                ></Meal>)
            }
        </div>
    );
};

export default Foods;