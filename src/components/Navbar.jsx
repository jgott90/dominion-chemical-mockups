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
            <div className="navbar-container">
                <div className="logo-container">
                    <img src="/images/logo.jpg" alt="Logo" className="logo-image" />
                </div>
                <div className="navbar-inner">
                    <ul className="nav-links">
                        <li><a href="/" className="nav-link">Home</a></li>
                        <li><a href="/products" className="nav-link">Products</a></li>
                        <li><a href="/services" className="nav-link">Services</a></li>
                        <li><a href="/about" className="nav-link">About</a></li>
                        <li><a href="/contact" className="nav-link">Contact</a></li>
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
            </div>
        </nav>
    );
}

export default Navbar;