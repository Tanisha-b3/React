import React from "react";
import Title from "./Title";
import './Title.css'

const Header = () => {
    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Name</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
export default Header;