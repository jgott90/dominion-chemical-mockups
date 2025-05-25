import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

import chemicals from "../data/industrialChemicals.json";
import waxes from "../data/waxes.json";

// Map category names to their route paths (with leading slash!)
const CATEGORY_PATHS = {
    "Acids": "/products/industrial-chemicals/acids",
    "Ammonia Compounds": "/products/industrial-chemicals/ammonia-compounds",
    "Antifreeze": "/products/industrial-chemicals/antifreeze",
    "Caustics": "/products/industrial-chemicals/caustics",
    "Phosphates": "/products/industrial-chemicals/phosphates",
    "Sodium Compounds": "/products/industrial-chemicals/sodium-compounds",
    "Solvents": "/products/industrial-chemicals/solvents",
    "Water Treatment Chemicals": "/products/industrial-chemicals/water-treatment-chemicals",
    "Miscellaneous": "/products/industrial-chemicals/miscellaneous"
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
        // Register chemicals (by category)
        function registerProductsFromCategory(category) {
            if (Array.isArray(category.products)) {
                const categoryPath = CATEGORY_PATHS[category.name] || "/";
                category.products.forEach(productName => {
                    registerContent({
                        name: productName,
                        category: category.name,
                        path: `${categoryPath}#${slugify(productName)}`,
                        anchor: slugify(productName),
                    });
                });
            } else {
                console.warn("Category has no products array:", category);
            }
        }

        if (Array.isArray(chemicals)) {
            chemicals.forEach(registerProductsFromCategory);
        }

        // Register waxes (individual types and applications)
        if (waxes && Array.isArray(waxes.types)) {
            waxes.types.forEach(type => {
                registerContent({
                    name: type.name,
                    category: "Waxes",
                    path: `/products/waxes#${slugify(type.name)}`,
                    anchor: slugify(type.name),
                });
            });
        }

        // Register waxes applications (optional: only if you want to make them searchable)
        if (waxes && Array.isArray(waxes.applications)) {
            waxes.applications.forEach(app => {
                registerContent({
                    name: app,
                    category: "Waxes Applications",
                    path: `/products/waxes#applications`,
                    anchor: "applications",
                });
            });
        }

        // Add more datasets as needed
    }, [registerContent]);

    return null;
}

export default AppContentLoader;