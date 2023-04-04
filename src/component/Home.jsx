import React from 'react';
import Lottie from "lottie-react";
import foodAnimation from '../assets/36895-healthy-or-junk-food.json'

const Home = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <div className='pt-72 text-center'>
                <h1 className='text-5xl text-violet-900 font-bold italic'>Welcome to <span className='text-pink-600'>Banik Bari</span></h1>
                <p className='text-justify p-8 text-lg font-semibold text-green-900'>We are here to provide you the best meals. Our foods are super natural and 100% hygienic. Our place is noise friendly and you also have the smoking zone too. We offer you also 10% off if you are the first comer in our restaurant. So,why you are waiting for!!! Let's go for a new experience.</p>
            </div>
            <div>
            <Lottie animationData={foodAnimation} loop={true}></Lottie>
            </div>
            
        </div>
    );
};

export default Home;