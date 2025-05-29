import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import industrialChemicalsData from "../../data/industrialChemicals.json";
import "../../styles/CustomWaxFormulation.css"; // For shared layout/styles
import "../../styles/IndustrialChemicals.css";
import Breadcrumbs from "../../components/Breadcrumbs";

// Converts category name to URL slug (e.g., "Water Treatment Chemicals" -> "water-treatment-chemicals")
function slugify(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

export default function IndustrialChemicals() {
    const [search, setSearch] = useState("");
    const mainHeadingRef = useRef(null);

    useEffect(() => {
        if (mainHeadingRef.current) {
            mainHeadingRef.current.focus();
        }
    }, []);

    // Skip to content link handler
    function handleSkipToContent(e) {
        e.preventDefault();
        if (mainHeadingRef.current) {
            mainHeadingRef.current.focus();
        }
    }

    // Enhanced filtering: show categories that match the search or have chemicals matching the search
    const filteredCategories = industrialChemicalsData
        .map(category => {
            const catMatch = category.name.toLowerCase().includes(search.toLowerCase());
            // Products are strings, so check them directly
            const matchingChemicals = Array.isArray(category.products)
                ? category.products.filter(chem =>
                    typeof chem === "string" &&
                    chem.toLowerCase().includes(search.toLowerCase())
                )
                : [];
            if (!search || catMatch || matchingChemicals.length > 0) {
                return {
                    ...category,
                    matchingChemicals: search ? matchingChemicals : category.products
                };
            }
            return null;
        })
        .filter(Boolean);

    return (
        <>
            <a
                href="#main-content"
                className="skip-link"
                onClick={handleSkipToContent}
                tabIndex="0"
            >
                Skip to main content
            </a>
            <main className="chemicals-page-main" id="main-content">
                <Breadcrumbs />
                <h1 className="chemicals-title" tabIndex="-1" ref={mainHeadingRef}>
                    Industrial Chemicals Categories
                </h1>
                <p className="chemicals-desc">
                    Explore our range of industrial chemical categories. Select a category to view available products and details.
                </p>
                <label className="sr-only" htmlFor="chemicals-search">
                    Search chemical categories or chemicals
                </label>
                <input
                    id="chemicals-search"
                    className="chemicals-search"
                    type="search"
                    placeholder="Search chemical categories or chemicals..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    aria-label="Search chemical categories or chemicals"
                    autoComplete="off"
                />
                <nav
                    className="chemicals-categories"
                    aria-label="Chemical Categories"
                >
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category) => (
                            <div className="chemicals-category-block" key={category.name}>
                                <Link
                                    to={`/industrial-chemicals/${slugify(category.name)}`}
                                    className="chemicals-category-link"
                                    aria-label={`View ${category.name} category`}
                                    tabIndex="0"
                                >
                                    <span className="chemicals-category-title">
                                        {category.name}
                                    </span>
                                    <span className="chemicals-category-count">
                                        {category.products?.length || 0} chemicals
                                    </span>
                                    {category.description && (
                                        <span className="chemicals-category-shortdesc">
                                            {category.description}
                                        </span>
                                    )}
                                </Link>
                                {/* If searching, show matching chemicals under each category */}
                                {search && category.matchingChemicals && category.matchingChemicals.length > 0 && (
                                    <ul className="chemicals-matching-list" aria-label={`Matching chemicals in ${category.name}`}>
                                        {category.matchingChemicals.map((chem) => (
                                            <li key={chem}>
                                                <span className="chemicals-matching-chem">{chem}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="chemicals-none" role="status">
                            No categories or chemicals found.
                        </div>
                    )}
                </nav>
            </main>
        </>
    );
}