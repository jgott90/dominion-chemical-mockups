import React, { useState } from "react";
import { Link } from "react-router-dom";
import industrialChemicalsData from "../../data/industrialChemicals.json";
import "../../styles/IndustrialChemicals.css";

// Slugify function for category URLs
function slugify(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

export default function IndustrialChemicals() {
    const [search, setSearch] = useState("");

    // Filter categories by search term (matches any product in category)
    const filteredCategories = industrialChemicalsData
        .map((cat) => ({
            ...cat,
            products: cat.products.filter((p) =>
                p.toLowerCase().includes(search.toLowerCase())
            ),
        }))
        .filter((cat) => cat.products.length > 0 || search === "");

    return (
        <main className="chemicals-page-main">
            <h1 className="chemicals-title">Industrial Chemicals</h1>
            <input
                className="chemicals-search"
                type="text"
                placeholder="Search for a chemical..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <section className="chemicals-categories">
                {filteredCategories.map((cat) => (
                    <Link
                        to={`/products/industrial-chemicals/${slugify(cat.name)}`}
                        className="chemicals-category-card chemicals-category-link"
                        key={cat.name}
                    >
                        <div className="chemicals-category-title">
                            <span>{cat.name}</span>
                        </div>
                        <div className="chemicals-category-count">
                            {cat.products.length} chemicals
                        </div>
                    </Link>
                ))}
                {filteredCategories.length === 0 && (
                    <div style={{ padding: "2rem" }}>
                        <em>No categories found.</em>
                    </div>
                )}
            </section>
        </main>
    );
}