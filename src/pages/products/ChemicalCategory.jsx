import React, { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import industrialChemicalsData from "../../data/industrialChemicals.json";
import "../../styles/CustomWaxFormulation.css"; // For shared layout/styles
import "../../styles/ChemicalCategory.css";

// Converts category name to URL slug (e.g., "Water Treatment Chemicals" -> "water-treatment-chemicals")
function slugify(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

export default function ChemicalCategory() {
    const { category } = useParams();
    const [search, setSearch] = useState("");
    const mainHeadingRef = useRef(null);

    // Focus h1 on mount for screen reader users
    useEffect(() => {
        if (mainHeadingRef.current) {
            mainHeadingRef.current.focus();
        }
    }, [category]);

    // Find the category in the JSON data using the slugified name
    const categoryData = industrialChemicalsData.find(
        (cat) => slugify(cat.name) === category
    );
    const chemicals = categoryData ? categoryData.products : [];

    // Filter the chemicals by the search input
    const filteredChemicals = chemicals.filter((chem) =>
        chem.toLowerCase().includes(search.toLowerCase())
    );

    // Skip to content link handler
    function handleSkipToContent(e) {
        e.preventDefault();
        if (mainHeadingRef.current) {
            mainHeadingRef.current.focus();
        }
    }

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
            <main className="chemical-category-main" id="main-content">
                <nav
                    className="chemical-category-breadcrumbs"
                    aria-label="Breadcrumb"
                >
                    <ol>
                        <li>
                            <Link to="/">Home</Link>
                            <span aria-hidden="true"> &gt; </span>
                        </li>
                        <li>
                            <Link to="">Products</Link>
                            <span aria-hidden="true"> &gt; </span>
                        </li>
                        <li>
                            <Link to="/industrial-chemicals">
                                Industrial Chemicals
                            </Link>
                            <span aria-hidden="true"> &gt; </span>
                        </li>
                        <li aria-current="page">
                            {categoryData ? categoryData.name : "Category Not Found"}
                        </li>
                    </ol>
                </nav>
                <h1
                    className="chemical-category-title"
                    tabIndex="-1"
                    ref={mainHeadingRef}
                >
                    {categoryData ? categoryData.name : "Category Not Found"}
                </h1>
                {categoryData && categoryData.description && (
                    <p className="chemical-category-desc">{categoryData.description}</p>
                )}
                {categoryData && (
                    <>
                        <label
                            htmlFor="chemical-category-search"
                            className="chemical-category-search-label"
                        >
                            Search chemicals in this category
                        </label>
                        <input
                            id="chemical-category-search"
                            className="chemical-category-search"
                            type="search"
                            placeholder="Search chemicals in this category..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            aria-label="Search chemicals in this category"
                            autoComplete="off"
                        />
                        <section
                            className="chemical-category-grid"
                            aria-label="Chemicals in this category"
                            aria-live="polite"
                        >
                            {filteredChemicals.length > 0 ? (
                                filteredChemicals.map((chem) => (
                                    <div
                                        className="chemical-category-card"
                                        key={chem}
                                        tabIndex="0"
                                        aria-label={chem}
                                        aria-pressed="false"
                                    >
                                        <span className="chemical-category-chem-name">
                                            {chem}
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className="chemical-category-none" role="status">
                                    No chemicals found.
                                </div>
                            )}
                        </section>
                    </>
                )}
                {!categoryData && (
                    <div className="chemical-category-none" role="status">
                        Sorry, this category does not exist.
                    </div>
                )}
            </main>
        </>
    );
}