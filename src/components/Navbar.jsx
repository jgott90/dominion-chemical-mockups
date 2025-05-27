import React, { useState, useContext, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import "../styles/Navbar.css";

function Navbar() {
    const [searchQueryLocal, setSearchQueryLocal] = useState("");
    const { setSearchQuery } = useContext(SearchContext);
    const [openDropdown, setOpenDropdown] = useState(null);
    const navigate = useNavigate();
    const navRef = useRef();

    // Accessible dropdown toggle and close on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    // Keyboard navigation: close dropdown with Escape
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setOpenDropdown(null);
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQueryLocal.trim()) {
            setSearchQuery(searchQueryLocal.trim());
            navigate(`/search?query=${encodeURIComponent(searchQueryLocal.trim())}`);
        }
    };

    // DRY dropdown rendering
    const dropdownMenus = [
        {
            label: "Products",
            key: "products",
            items: [
                { to: "/products/industrial-chemicals", label: "Industrial Chemicals" },
                { to: "/products/waxes", label: "Waxes" },
                { to: "/products/wax-emulsions", label: "Wax Emulsions" }
            ]
        },
        {
            label: "Services",
            key: "services",
            items: [
                { to: "/services/custom-wax-formulation", label: "Customized Wax Formulation" },
                { to: "/services/blending-packaging", label: "Blending & Packaging" },
                { to: "/services/diesel-exhaust-fluid", label: "Diesel Exhaust Fluid" }
            ]
        }
    ];

    return (
        <header className="navbar" role="banner">
            <div className="navbar-left">
                <Link to="/" className="logo">
                    <img src="/projects/dominion-chemical/images/logo.jpg" alt="Dominion Chemical Logo" width={40} height={40} />
                    <span>Dominion Chemical</span>
                </Link>
            </div>

            <nav className="navbar-links" role="navigation" aria-label="Main navigation" ref={navRef}>
                <ul className="nav-menu">
                    <li>
                        <Link to="/" tabIndex={0}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" tabIndex={0}>About</Link>
                    </li>
                    {dropdownMenus.map(({ label, key, items }) => (
                        <li
                            className={`dropdown-parent${openDropdown === key ? ' open' : ''}`}
                            key={key}
                            onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
                            tabIndex={0}
                            onKeyDown={e => {
                                if (e.key === 'Enter' || e.key === ' ') setOpenDropdown(openDropdown === key ? null : key);
                            }}
                            aria-haspopup="true"
                            aria-expanded={openDropdown === key}
                            aria-label={`${label} menu`}
                        >
                            <span aria-hidden="true">{label}</span>
                            <ul className="dropdown" role="menu" aria-label={`${label} submenu`}>
                                {items.map(({ to, label }) => (
                                    <li key={to} role="none">
                                        <Link to={to} role="menuitem" tabIndex={openDropdown === key ? 0 : -1}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    <li>
                        <Link to="/contact" tabIndex={0}>Contact</Link>
                    </li>
                </ul>
            </nav>

            <form className="navbar-search" onSubmit={handleSearch} role="search" aria-label="Site search">
                <label htmlFor="navbar-search-input" className="visually-hidden">
                    Search for chemicals
                </label>
                <input
                    id="navbar-search-input"
                    type="text"
                    placeholder="Search for chemicals..."
                    value={searchQueryLocal}
                    onChange={(e) => setSearchQueryLocal(e.target.value)}
                    autoComplete="off"
                    aria-label="Search for chemicals"
                />
                <button type="submit" aria-label="Submit search">Go</button>
            </form>
        </header>
    );
}

export default Navbar;