import React from 'react'
import Header from './Header'

const NavBar = () => {
    return (
        <>
            <Header />
            <div className="navbar">
                <ul className="links">
                    <li>
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="links">
                        <a className="nav-link" href="/gallery">Gallery</a>
                    </li>
                    <li className="links">
                        <a className="nav-link" href="/wedding">Wedding</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/news">News</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/sutradhar">Sutradhar</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/register">Register</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar
