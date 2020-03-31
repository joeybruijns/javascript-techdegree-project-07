import React from 'react';

const Header = () => (
    <header>
        {/* Replace this content!! */}
        <span className="icn-logo"><i className="material-icons">code</i></span>
        <ul className="main-nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/teachers">Teachers</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
        </ul>    
    </header>
);
  
export default Header;