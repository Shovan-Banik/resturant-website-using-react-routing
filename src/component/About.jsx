import React from 'react';
import Lottie from "lottie-react";
import welcomeAnimation from '../assets/72342-welcome.json';

const About = () => {
    return (
        <div className='flex gap-24 p-12'>
            <div className='w-full'><Lottie animationData={welcomeAnimation} loop={true}></Lottie></div>
            <div className='w-full text-center pt-16'>
                <h2 className='text-5xl font-bold my-5'>About Us</h2>
                <p className='text-justify'><span className='font-bold'>Welcome to our restaurant</span>, where we strive to provide a memorable dining experience for each and every guest. Our mission is to create a warm and inviting atmosphere that caters to all tastes, whether you're looking for a casual meal or a special occasion.

                    At our restaurant, we pride ourselves on using only the freshest ingredients, sourced from local and sustainable farms. Our skilled chefs use their expertise and creativity to craft delicious dishes that showcase the flavors of each ingredient. From classic comfort food to unique fusion cuisine, our menu has something for everyone.

                    Our team is dedicated to providing excellent service, ensuring that each guest feels welcome and valued. We believe that dining out is not just about the food, but about the entire experience. That's why we pay attention to every detail, from the ambiance to the presentation of each dish.

                    Whether you're joining us for brunch, lunch, or dinner, we are committed to making your experience at our restaurant unforgettable. We are proud to be a part of this community and look forward to serving you soon.</p>
            </div>
        </div>
    );
};

export default About;