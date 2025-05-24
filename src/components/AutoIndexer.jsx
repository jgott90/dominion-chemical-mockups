import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

// Automatically indexes visible .main-content on every route change
function AutoIndexer() {
    const { registerContent } = useContext(SearchContext);
    const location = useLocation();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const mainContent = document.querySelector(".main-content");
            if (mainContent) {
                const text = mainContent.innerText || mainContent.textContent || "";
                // Only register if there's actually content
                if (text.trim().length > 0) {
                    const contentObj = {
                        name: `Page: ${location.pathname}`,
                        description: text,
                        path: location.pathname,
                    };
                    console.log("AutoIndexer registering page content:", contentObj); // Debug log
                    registerContent(contentObj);
                }
            }
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [location, registerContent]);

    return null;
}

export default AutoIndexer;