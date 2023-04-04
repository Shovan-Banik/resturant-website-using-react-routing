import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetails = () => {
    const meal=useLoaderData();
    const {meals}=meal;
    const mealDetail=meals[0]
    console.log(mealDetail);
    return (
        <div className='px-24 py-12'>
             <h2 className='text-5xl font-semibold text-center'>{mealDetail.strMeal}</h2>
            <div className='flex p-8 j justify-center gap-24 border-4 border-pink-800 rounded-lg mt-8'>
            <div className='border-4 border-gray-500 p-4 w-full'>
                <img className='h-96 rounded-lg mx-auto' src={mealDetail.strMealThumb} alt="food" />
            </div>
            <div className='border-4 border-gray-500 p-4 w-full text-center'>
                <h5 className='text-2xl font-semibold text-center mb-4'>Category: {mealDetail.strCategory}</h5>
                <h5 className='text-2xl font-semibold text-center mb-4'>Area: {mealDetail.strArea}</h5>
                <h5 className='text-2xl font-semibold text-center mb-4'>Size: {mealDetail.strMeasure2}</h5>
                <h5 className='text-2xl font-semibold text-center mb-4'>Tags: {mealDetail.strTags}</h5>
                <h5 className='font-semibold text-center'>Description: {mealDetail.strInstructions.slice(0,250)}....</h5>
                <button className='bg-pink-600 text-white hover:bg-pink-900 p-2 w-36 mt-8 rounded-xl font-bold'>Add to Cart</button>
            </div>
            </div>
        </div>
    );
};

export default MealDetails;