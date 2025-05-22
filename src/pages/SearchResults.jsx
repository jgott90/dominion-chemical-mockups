// src/pages/SearchResults.jsx
import React from "react";
import { useLocation } from "react-router-dom";

function SearchResults() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Search Results for: {query}</h2>
            <p className="mt-2">Display your search results here.</p>
        </div>
    );
}

export default SearchResults;
