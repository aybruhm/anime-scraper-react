import React from 'react';
import { Link } from "react-router-dom";
import "./main.css"


const Navbar = () => {
    return (
        <>
            <nav className="navbar">

                <div className="container">
                    <Link className="navbar-brand me-2 mb-1 nav__link" to=".">
                        Anime <span className="anime__scraper">Scraper</span>
                    </Link>
                </div>

            </nav>
        </>
    )
}

export default Navbar;