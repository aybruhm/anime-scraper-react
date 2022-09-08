import React from 'react';
import { Link } from "react-router-dom";
import "./navbar_styles.css"


const Navbar = () => {

    const refreshPage = () => {
        window.location.reload(false);
    }

    return (
        <>
            <nav className="navbar">

                <div className="container">
                    <Link className="navbar-brand me-2 mb-1 nav__link" to="/" onClick={refreshPage}>
                        Anime<span className="anime__scraper">sukurepa</span>
                    </Link>
                </div>

            </nav>
        </>
    )
}

export default Navbar;