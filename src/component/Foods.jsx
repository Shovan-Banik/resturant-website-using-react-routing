import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Meal from './Meal';
import LoadingSpinner from './LoadingSpinner';

const Foods = () => {
    const {meals}=useLoaderData();
    const navigation=useNavigate();
    if(navigation.state==='loading'){
        return <LoadingSpinner></LoadingSpinner>
    }
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