// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    };


    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/logo.jpg" alt="Dominion Chemical" className="logo-image" />
                    </Link>
                </div>

                <ul className="nav-links">
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    <li className="dropdown-parent">
                        <span className="nav-link">Products</span>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-link" to="/products/waxes">Waxes</Link></li>
                            <li><Link className="dropdown-link" to="/products/wax-emulsions">Wax Emulsions</Link></li>
                            <li><Link className="dropdown-link" to="/products/industrial-chemicals">Industrial Chemicals</Link></li>
                        </ul>
                    </li>
                    <li className="dropdown-parent">
                        <span className="nav-link">Services</span>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-link" to="/services/blending">Blending</Link></li>
                            <li><Link className="dropdown-link" to="/services/packaging">Packaging</Link></li>
                            <li><Link className="dropdown-link" to="/services/def">Diesel Exhaust Fluid</Link></li>
                        </ul>
                    </li>
                    <li><Link className="nav-link" to="/about">About</Link></li>
                    <li><Link className="nav-link" to="/contact">Contact</Link></li>
                </ul>

                <form className="search-container" onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" className="search-button">Go</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;