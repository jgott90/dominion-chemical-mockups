// src/pages/Services.jsx
import React, { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

const Services = () => {
    const { registerContent } = useContext(SearchContext);

    useEffect(() => {
        // Register services for search
        registerContent({
            name: "Blending and Packaging",
            description: "Custom blending and packaging solutions for chemicals.",
            link: "/services/blending-packaging",
            category: "Service",
        });

        registerContent({
            name: "Diesel Exhaust Fluid (DEF)",
            description: "Certified DEF for emission control.",
            link: "/services/def",
            category: "Service",
        });
    }, [registerContent]);

    return (
        <div>
            <h1>Our Services</h1>
            <p>Description of services...</p>
        </div>
    );
};

export default Services;
