import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <Header />
            <div className="navbar">
                <ul className="links">
                    <li className="nav-link" >
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-link" >
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-link" >
                        <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                    </li>
                    <li className="nav-link" >
                        <NavLink className="nav-link" to="/wedding">Wedding</NavLink>
                    </li>
                    <li className="nav-link" >
                        <NavLink className="nav-link" to="/news">News</NavLink>
                    </li>
                    <li className="nav-link" >
                        <NavLink className="nav-link" to="/sutradhar">Sutradhar</NavLink>
                    </li>
                    <li className="nav-link" >
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-link" >
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar
