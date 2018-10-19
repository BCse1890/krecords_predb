import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Student Record Webpage</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Homepage</NavLink>
        <NavLink to="/add" activeClassName="is-active">Create Record</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Record</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <NavLink to="/contact" activeClassName="is-active">Registration details</NavLink> 
    </header>
);

export default Header;