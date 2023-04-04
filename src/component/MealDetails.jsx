import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetails = () => {
    const meal=useLoaderData();
    const {meals}=meal;
    console.log(meals[0]);
    return (
        <div>
            
        </div>
    );
};

export default MealDetails;