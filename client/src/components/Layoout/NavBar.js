import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <Header />
            <div className="navbar">
                <ul className="links">
                    <li>
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="links">
                        <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                    </li>
                    <li className="links">
                        <NavLink className="nav-link" to="/wedding">Wedding</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/sutradhar">Sutradhar</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar
