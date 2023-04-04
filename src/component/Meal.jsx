import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({meal}) => {
    const {idMeal,strCategory,strMealThumb}=meal;
    return (
        <div className='border-4 border-fuchsia-600 rounded-lg p-4 text-center'>
            <img src={strMealThumb} alt="food" />
            <p className='text-xl font-semibold my-2'>Id: {idMeal}</p>
            <p className='text-lg font-semibold'>Category: {strCategory}</p>
            <Link to={`/meal/${idMeal}`}><button className='bg-pink-600 text-white hover:bg-pink-900 p-2 w-36 my-2 rounded-xl font-bold'>View</button></Link>
        </div>
    );
};

export default Meal;