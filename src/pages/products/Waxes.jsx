// src/pages/products/Waxes.jsx
import React from "react";
import "../../styles/Waxes.css";
import waxes from "../../data/waxes.json";
import { Link } from "react-router-dom";

export default function Waxes() {
    return (
        <div className="waxes-page">
            <section className="wax-hero">
                <h1>Explore Our Wide Range of Waxes</h1>
                <p>Premium wax solutions for every industry.</p>
            </section>
            <section className="wax-grid">
                {waxes.map((wax) => (
                    <Link key={wax.id} to={`/products/waxes/${wax.id}`} className="wax-card">
                        <h3>{wax.name}</h3>
                        <p>Melting Point: {wax.meltingPoint}</p>
                        <p>Oil Content: {wax.oilContent}</p>
                    </Link>
                ))}
            </section>
        </div>
    );
}