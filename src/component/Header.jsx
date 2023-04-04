import React from 'react';
import ActiveLink from './ActiveLink';


const Header = () => {
    return (
        <div className='flex justify-evenly bg-pink-400 p-5 font-bold hover:text-blue-900'>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/food'>Foods</ActiveLink>
            <ActiveLink to='/about'>About Us</ActiveLink>
            <ActiveLink to='/contact'>Contact Us</ActiveLink>
        </div>
    );
};

export default Header;