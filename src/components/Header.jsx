/* eslint-disable no-unused-vars */
import React from 'react';
import Logo from "/images/airbnb-logo.png"


function Header(){
    return(
        <nav className="navbar">
            <img src={Logo} alt="logo" />
            <ul className="header-flex">
                <li>Home</li>
                <li>Search</li>
                <li>Contacts</li>
            </ul>
        </nav>
    )

}


export default Header