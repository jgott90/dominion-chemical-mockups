// src/context/SearchContext.jsx
import React, { createContext, useState, useEffect } from "react";
import Fuse from "fuse.js";

// Create Context
export const SearchContext = createContext();

// Provider Component
export const SearchProvider = ({ children }) => {
    const [searchData, setSearchData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Fuse.js setup for fuzzy search
    const fuse = new Fuse(searchData, {
        keys: ["name", "description", "category"],
        threshold: 0.3, // Adjust for sensitivity
    });

    useEffect(() => {
        if (searchQuery.trim() !== "") {
            const results = fuse.search(searchQuery).map((result) => result.item);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, searchData]);

    // Function to dynamically add any searchable content
    const registerContent = (content) => {
        setSearchData((prevData) => [...prevData, content]);
    };

    return (
        <SearchContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                searchResults,
                registerContent,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};
