import React from 'react';
import { Link } from "react-router-dom";
import "./footer_styles.css";


const Footer = () => {
    return (
        <>
            <footer className="footer__bg">
                <p className="design__copyright">
                    Designed by <Link to="https://" target="_blank" className="design__link">the UX Guy</Link>
                </p>
            </footer>
        </>
    )
}

export default Footer;