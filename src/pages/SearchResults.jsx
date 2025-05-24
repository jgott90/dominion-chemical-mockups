import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { Link } from "react-router-dom";

function SearchResults() {
    const { searchQuery, searchResults } = useContext(SearchContext);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">
                Search Results for: {searchQuery}
            </h2>
            {searchResults.length === 0 ? (
                <p>No results found.</p>
            ) : (
                <ul>
                    {searchResults.map((item) => (
                        <li key={item.path || item.name} style={{ marginBottom: 16 }}>
                            {item.path ? (
                                <Link to={item.path} className="text-blue-600 hover:underline">
                                    {item.name}
                                </Link>
                            ) : (
                                <span>{item.name}</span>
                            )}
                            {item.category && (
                                <span style={{ marginLeft: 8, color: "#888", fontSize: "0.95em" }}>
                                    [{item.category}]
                                </span>
                            )}
                            {item.description && (
                                <div style={{ fontSize: "0.95em", color: "#555" }}>
                                    {item.description.length > 100
                                        ? item.description.slice(0, 100) + "..."
                                        : item.description}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchResults;