import { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

import chemicals from "../data/industrialChemicals.json";
import waxes from "../data/waxes.json";

function AppContentLoader() {
    const { registerContent } = useContext(SearchContext);

    useEffect(() => {
        // Helper to flatten and register
        function registerProductsFromCategory(category) {
            if (Array.isArray(category.products)) {
                category.products.forEach(productName => {
                    registerContent({
                        name: productName,
                        category: category.name,
                        path: `/products/${productName.toLowerCase().replace(/\s+/g, "-")}`,
                    });
                });
            } else {
                // Optional: Debug log for malformed categories
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