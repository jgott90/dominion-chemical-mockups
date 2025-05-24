import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [openDropdown, setOpenDropdown] = useState(null);

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    // Toggle dropdowns by name
    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClick = (e) => {
            if (!e.target.closest('.dropdown-parent')) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

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

                    <li
                        className={`dropdown-parent${openDropdown === 'products' ? ' open' : ''}`}
                        onClick={() => toggleDropdown('products')}
                        tabIndex={0}
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') toggleDropdown('products'); }}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === 'products'}
                    >
                        <span>Products</span>
                        <ul className="dropdown">
                            <li><Link to="/products/Industrial-Chemicals">Industrial Chemicals</Link></li>
                            <li><Link to="/products/waxes">Waxes</Link></li>
                            <li><Link to="/products/emulsions">Wax Emulsions</Link></li>
                        </ul>
                    </li>

                    <li
                        className={`dropdown-parent${openDropdown === 'services' ? ' open' : ''}`}
                        onClick={() => toggleDropdown('services')}
                        tabIndex={0}
                        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') toggleDropdown('services'); }}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === 'services'}
                    >
                        <span>Services</span>
                        <ul className="dropdown">
                            <li><Link to="/services/blending">Blending</Link></li>
                            <li><Link to="/services/packaging">Packaging</Link></li>
                            <li><Link to="/services/def">Diesel Exhaust Fluid</Link></li>
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