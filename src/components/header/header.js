import React, { useState } from 'react';
import Logo from "../../assets/logo-proto.png";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return(
        <header>
            <div className="headerImg">
                <img src={Logo} alt="logo AcidGame"></img>
            </div>
            <nav className="desktop-menu">
                <Link to="/actu">Actu</Link>
                <Link to="/tests">Tests</Link>
                <Link to="/dossiers">Dossiers</Link>
                <Link to="/events">Events</Link>
            </nav>
            <div class="header__burger" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div class="header__nav__close" onClick={toggleMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <Link to="/actu">Actu</Link>
                <Link to="/tests">Tests</Link>
                <Link to="/dossiers">Dossiers</Link>
                <Link to="/events">Events</Link>
            </nav>
        </header>
    )
}

export default Header;