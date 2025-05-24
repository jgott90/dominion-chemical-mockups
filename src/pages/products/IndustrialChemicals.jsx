import React, { useState } from "react";
import industrialChemicalsData from "../../data/industrialChemicals.json";
import "../../styles/IndustrialChemicals.css";

export default function IndustrialChemicals() {
    const [search, setSearch] = useState("");
    const [openCategory, setOpenCategory] = useState(null);

    const filteredCategories = industrialChemicalsData
        .map((cat) => ({
            ...cat,
            products: cat.products.filter((p) =>
                p.toLowerCase().includes(search.toLowerCase())
            ),
        }))
        .filter((cat) => cat.products.length > 0);

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
                {filteredCategories.map((cat, idx) => (
                    <div className="chemicals-category-card" key={cat.name}>
                        <button
                            className="chemicals-category-title"
                            onClick={() =>
                                setOpenCategory(openCategory === idx ? null : idx)
                            }
                            aria-expanded={openCategory === idx}
                            aria-controls={`cat-panel-${idx}`}
                        >
                            {cat.name}
                            <span className="chemicals-category-arrow">
                                {openCategory === idx ? "▲" : "▼"}
                            </span>
                        </button>
                        <div
                            className={`chemicals-category-products${openCategory === idx ? " open" : ""}`}
                            id={`cat-panel-${idx}`}
                            style={{ display: openCategory === idx ? "block" : "none" }}
                        >
                            <ul>
                                {cat.products.map((p) => (
                                    <li key={p}>{p}</li>
                                ))}
                            </ul>
                            <button className="chemicals-learn-more-btn">Learn More</button>
                        </div>
                    </div>
                ))}
                {filteredCategories.length === 0 && (
                    <div style={{ padding: "2rem" }}>
                        <em>No products found.</em>
                    </div>
                )}
            </section>
        </main>
    );
}