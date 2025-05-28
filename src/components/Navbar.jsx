import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

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

function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navLinksRef = useRef(null);
    const location = useLocation();

    // Keyboard navigation for dropdowns (Esc closes, arrows navigate)
    const handleDropdownKeyDown = (e, key) => {
        if (e.key === "Escape") {
            setOpenDropdown(null);
        }
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpenDropdown(openDropdown === key ? null : key);
        }
    };

    // Close dropdown on outside click/mobile nav close
    React.useEffect(() => {
        const handleClick = (e) => {
            if (
                navLinksRef.current &&
                !navLinksRef.current.contains(e.target)
            ) {
                setOpenDropdown(null);
            }
        };
        window.addEventListener("mousedown", handleClick);
        return () => window.removeEventListener("mousedown", handleClick);
    }, []);

    // Close mobile nav on route change
    React.useEffect(() => {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
    }, [location.pathname]);

    return (
        <header className="navbar" role="banner">
            <div className="navbar-left">
                <Link className="logo" to="/" tabIndex={0} aria-label="Home">
                    <img src="/images/logo-small.png" alt="Dominion Chemical Logo" width={54} height={46} />
                    <span>Dominion Chemical</span>
                </Link>
                <button
                    className="hamburger"
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="main-nav"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                >
                    <span aria-hidden="true">{mobileMenuOpen ? "✕" : "☰"}</span>
                </button>
            </div>
            <nav
                className={`navbar-links${mobileMenuOpen ? " open" : ""}`}
                id="main-nav"
                role="navigation"
                aria-label="Main navigation"
                ref={navLinksRef}
            >
                <ul className="nav-menu">
                    <li>
                        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
                    </li>
                    <li>
                        <Link to="/our-story" className={location.pathname.startsWith("/our-story") ? "active" : ""}>Our Story</Link>
                    </li>
                    {dropdownMenus.map(({ label, key, items }) => (
                        <li
                            className={`dropdown-parent${openDropdown === key ? " open" : ""}`}
                            key={key}
                        >
                            <span
                                tabIndex={0}
                                aria-haspopup="true"
                                aria-expanded={openDropdown === key}
                                aria-controls={`${key}-dropdown`}
                                onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
                                onKeyDown={e => handleDropdownKeyDown(e, key)}
                            >
                                {label} <span aria-hidden="true">▼</span>
                            </span>
                            <ul className="dropdown" id={`${key}-dropdown`} role="menu">
                                {items.map(({ to, label }) => (
                                    <li key={to}>
                                        <Link to={to}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    <li>
                        <Link to="/contact" className={location.pathname.startsWith("/contact") ? "active" : ""}>Contact</Link>
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