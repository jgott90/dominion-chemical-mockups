import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);

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
        <header className="navbar">
            <div className="navbar-left">
                <span className="logo">
                    <img src="/images/logo-small.png" alt="Dominion Chemical Logo" width={40} height={40} />
                    <span>Dominion Chemical</span>
                </span>
            </div>
            <nav className="navbar-links">
                <ul className="nav-menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/our-story">Our Story</Link>
                    </li>
                    {dropdownMenus.map(({ label, key, items }) => (
                        <li
                            className={`dropdown-parent${openDropdown === key ? ' open' : ''}`}
                            key={key}
                            onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
                        >
                            <span>{label}</span>
                            <ul className="dropdown">
                                {items.map(({ to, label }) => (
                                    <li key={to}>
                                        <Link to={to}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <form className="navbar-search" role="search" aria-label="Site search" onSubmit={e => e.preventDefault()}>
                <label htmlFor="navbar-search-input" className="visually-hidden">
                    Search for chemicals
                </label>
                <input
                    id="navbar-search-input"
                    type="text"
                    placeholder="Optional search bar..."
                    autoComplete="off"
                />
                <button type="submit" aria-label="Submit search">Go</button>
            </form>
        </header>
    );
}

export default Navbar;