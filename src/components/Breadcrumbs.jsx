import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import "../styles/Breadcrumbs.css";

// Map route segments to display labels
const BREADCRUMB_LABELS = {
    "ourstory": "Our Story",
    "industrial-chemicals": "Industrial Chemicals",
    "customized-wax-formulations": "Customized Wax Formulations",
    "contact": "Contact",
};

// Define routes and their "breadcrumb chain" (for correct parent-child relationships)
const ROUTE_CONFIG = [
    {
        // /ourstory
        pattern: "/ourstory",
        crumbs: [
            { to: "/", label: "Home" },
            { label: "Our Story" }
        ]
    },
    {
        // /industrial-chemicals
        pattern: "/industrial-chemicals",
        crumbs: [
            { to: "/", label: "Home" },
            { label: "Industrial Chemicals" }
        ]
    },
    {
        // /industrial-chemicals/:category
        pattern: "/industrial-chemicals/:category",
        crumbs: [
            { to: "/", label: "Home" },
            { to: "/industrial-chemicals", label: "Industrial Chemicals" },
            // Category is handled dynamically
        ]
    },
    {
        // /customized-wax-formulations
        pattern: "/customized-wax-formulations",
        crumbs: [
            { to: "/", label: "Home" },
            { label: "Customized Wax Formulations" }
        ]
    },
    {
        // /contact
        pattern: "/contact",
        crumbs: [
            { to: "/", label: "Home" },
            { label: "Contact" }
        ]
    }
];

// Utility: Capitalize and replace dashes with spaces for dynamic segments
function titleCase(str) {
    return str
        .replace(/-/g, " ")
        .replace(/\b\w/g, l => l.toUpperCase());
}

function Breadcrumbs() {
    const location = useLocation();
    const pathname = location.pathname;

    // Find the best matching route pattern
    let matchedConfig = ROUTE_CONFIG.find(cfg => matchPath({ path: cfg.pattern, end: true }, pathname));
    let crumbs = [];

    if (matchedConfig) {
        crumbs = [...matchedConfig.crumbs];

        // Handle dynamic category in /industrial-chemicals/:category
        if (matchedConfig.pattern === "/industrial-chemicals/:category") {
            const segs = pathname.split("/").filter(Boolean);
            const category = segs[1];
            crumbs.push({
                label: titleCase(category)
            });
        }
    } else if (pathname === "/") {
        // No breadcrumb on home page
        return null;
    } else {
        // Fallback: build crumbs from pathnames
        const pathnames = pathname.split("/").filter(Boolean);
        crumbs = [{ to: "/", label: "Home" }];
        pathnames.forEach((seg, idx) => {
            const to = "/" + pathnames.slice(0, idx + 1).join("/");
            const label = BREADCRUMB_LABELS[seg] || titleCase(seg);
            crumbs.push({
                to: idx < pathnames.length - 1 ? to : undefined,
                label
            });
        });
    }

    // Don't render breadcrumbs if only "Home" (i.e., homepage)
    if (crumbs.length < 2) return null;

    return (
        <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
                {crumbs.map((crumb, idx) => {
                    const isLast = idx === crumbs.length - 1;
                    return (
                        <li key={idx} aria-current={isLast ? "page" : undefined}>
                            {crumb.to && !isLast ? (
                                <Link to={crumb.to}>{crumb.label}</Link>
                            ) : (
                                <span>{crumb.label}</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumbs;