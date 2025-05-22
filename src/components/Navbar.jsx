import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <header className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">
                    <img src="/images/logo.jpg" alt="Dominion Chemical Logo" />
                    <span>Dominion Chemical</span>
                </Link>
            </div>

            <nav className="navbar-links">
                <ul className="nav-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>

                    <li className="dropdown-parent">
                        <span>Products</span>
                        <ul className="dropdown">
                            <li><Link to="/products/industrial">Industrial Chemicals</Link></li>
                            <li><Link to="/products/waxes">Waxes</Link></li>
                            <li><Link to="/products/emulsions">Wax Emulsions</Link></li>
                        </ul>
                    </li>

                    <li className="dropdown-parent">
                        <span>Services</span>
                        <ul className="dropdown">
                            <li><Link to="/services/blending">Blending</Link></li>
                            <li><Link to="/services/packaging">Packaging</Link></li>
                            <li><Link to="/services/def">DEF</Link></li>
                        </ul>
                    </li>

                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <form className="navbar-search" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search for chemicals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Go</button>
            </form>
        </header>
    );
}

export default Navbar;
