import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import industrialChemicalsData from "../../data/industrialChemicals.json";
import "../../styles/ChemicalCategory.css";

// Converts category name to URL slug (e.g., "Water Treatment Chemicals" -> "water-treatment-chemicals")
function slugify(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
}

export default function ChemicalCategory() {
    const { category } = useParams();
    const [search, setSearch] = useState("");

    // Find the category in the JSON data using the slugified name
    const categoryData = industrialChemicalsData.find(
        cat => slugify(cat.name) === category
    );
    const chemicals = categoryData ? categoryData.products : [];

    // Filter the chemicals by the search input
    const filteredChemicals = chemicals.filter(chem =>
        chem.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="chemical-category-main">
            <nav className="chemical-category-breadcrumbs">
                <Link to="/">Home</Link>
                <span> &gt; </span>
                <Link to="/products">Products</Link>
                <span> &gt; </span>
                <Link to="/products/industrial-chemicals">Industrial Chemicals</Link>
                <span> &gt; </span>
                {categoryData ? categoryData.name : "Category Not Found"}
            </nav>
            <h1 className="chemical-category-title">
                {categoryData ? categoryData.name : "Category Not Found"}
            </h1>
            {categoryData && categoryData.description && (
                <p className="chemical-category-desc">{categoryData.description}</p>
            )}
            {categoryData && (
                <>
                    <input
                        className="chemical-category-search"
                        type="text"
                        placeholder={`Search chemicals in this category...`}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <section className="chemical-category-grid">
                        {filteredChemicals.length > 0 ? (
                            filteredChemicals.map(chem => (
                                <div className="chemical-category-card" key={chem}>
                                    <span className="chemical-category-chem-name">{chem}</span>
                                </div>
                            ))
                        ) : (
                            <div className="chemical-category-none">No chemicals found.</div>
                        )}
                    </section>
                    <div className="chemical-category-actions">
                        <button className="chemical-category-btn">Request a Quote</button>
                        <button className="chemical-category-btn secondary">Contact Us</button>
                    </div>
                </>
            )}
            {!categoryData && (
                <div className="chemical-category-none">Sorry, this category does not exist.</div>
            )}
        </main>
    );
}