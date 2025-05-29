import React from "react";
import { useParams } from "react-router-dom";
import waxes from "../../data/waxes.json";
import "../../styles/CustomWaxFormulation.css"; // For shared layout/styles
import "../../styles/WaxProduct.css";

export default function WaxProduct() {
    const { id } = useParams();
    const wax = waxes.find((item) => item.id === id);

    if (!wax) return <p>Wax not found</p>;

    return (
        <div className="wax-product-page">
            <section className="product-hero">
                <h1>{wax.name}</h1>
                <p>{wax.description}</p>
            </section>
            <section className="product-details">
                <div className="specs">
                    <h3>Specifications</h3>
                    <p>Melting Point: {wax.meltingPoint}</p>
                    <p>Oil Content: {wax.oilContent}</p>
                </div>
            </section>
        </div>
    );
}