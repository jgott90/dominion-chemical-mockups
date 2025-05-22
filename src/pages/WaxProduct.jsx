// src/pages/WaxProduct.jsx
import React, { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

const WaxProduct = () => {
    const { registerContent } = useContext(SearchContext);

    useEffect(() => {
        // Register this product for search
        registerContent({
            name: "Paraffin Wax",
            description: "High-quality Paraffin Wax for industrial use.",
            link: "/products/waxes/paraffin-wax",
            category: "Product",
        });
    }, [registerContent]);

    return (
        <div>
            <h1>Paraffin Wax</h1>
            <p>Description of the wax product...</p>
        </div>
    );
};

export default WaxProduct;
