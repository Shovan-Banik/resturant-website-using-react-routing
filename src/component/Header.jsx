import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-evenly bg-pink-400 p-5 font-bold hover:text-blue-900'>
            <Link to='/'>Home</Link>
            <Link to='/food'>Foods</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/contact'>Contact Us</Link>
        </div>
    );
};

export default Header;