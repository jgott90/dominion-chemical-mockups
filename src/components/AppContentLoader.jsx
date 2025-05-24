import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

import chemicals from "../data/industrialChemicals.json";
import waxes from "../data/waxes.json";

// Map category names to their route paths
const CATEGORY_PATHS = {
    "Acids": "/industrial-chemicals",
    "Ammonia Compounds": "/industrial-chemicals",
    "Antifreeze": "/industrial-chemicals",
    "Caustics": "/industrial-chemicals",
    "Phosphates": "/industrial-chemicals",
    "Sodium Compounds": "/industrial-chemicals",
    "Solvents": "/industrial-chemicals",
    "Water Treatment Chemicals": "/industrial-chemicals",
    "Miscellaneous": "/industrial-chemicals"
    // add other chemical categories as needed
    // "Waxes": "/waxes",
    // add other waxes categories as needed
};

function slugify(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

function AppContentLoader() {
    const { registerContent } = useContext(SearchContext);

    useEffect(() => {
        function registerProductsFromCategory(category) {
            if (Array.isArray(category.products)) {
                const categoryPath = CATEGORY_PATHS[category.name] || "/";
                category.products.forEach(productName => {
                    registerContent({
                        name: productName,
                        category: category.name,
                        path: `${categoryPath}#${slugify(productName)}`,
                        anchor: slugify(productName), // optional, for clarity
                    });
                });
            } else {
                console.warn("Category has no products array:", category);
            }
        }

        chemicals?.forEach(registerProductsFromCategory);
        waxes?.forEach(registerProductsFromCategory);
        // Add more datasets as needed
    }, [registerContent]);

    return null;
}

export default AppContentLoader;