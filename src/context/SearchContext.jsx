import React, { createContext, useState, useEffect, useRef, useCallback } from "react";
import Fuse from "fuse.js";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchData, setSearchData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const fuseRef = useRef(null);

    // Memoized, deduplicating registerContent!
    const registerContent = useCallback((content) => {
        setSearchData((prevData) => {
            if (prevData.some(item => item.path === content.path)) {
                return prevData;
            }
            const newData = [...prevData, content];
            console.log("registerContent called. newData:", newData); // Debug what is being registered
            return newData;
        });
    }, []);

    // Log whenever searchData changes
    useEffect(() => {
        console.log("Current searchData:", searchData);
    }, [searchData]);

    // Rebuild the Fuse index whenever searchData changes
    useEffect(() => {
        if (searchData.length > 0) {
            fuseRef.current = new Fuse(searchData, {
                keys: ["name", "description", "category", "path"],
                threshold: 0.3,
            });
        } else {
            fuseRef.current = null;
        }
    }, [searchData]);

    // Log search query and search results
    useEffect(() => {
        console.log("Current searchQuery:", searchQuery);
        if (searchQuery.trim() !== "" && fuseRef.current) {
            const results = fuseRef.current.search(searchQuery).map((result) => result.item);
            console.log("Search results from Fuse:", results);
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, searchData]);

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