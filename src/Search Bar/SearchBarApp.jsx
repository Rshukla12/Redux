import React, { useEffect, useState } from "react";
import SearchBar from "./Component/Searchbar/SearchBar";
import { countries } from "./utils/countries.js";

const SearchBarApp = () => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(()=>{
        if ( query.length === 0 ) setSuggestions([]);
        else {
            let out = countries.filter(item => {
                return item.country.toLowerCase().indexOf(query) !== -1;
            }).map(item=>item.country);
            setSuggestions( out );
        }
    }, [query])

    return (
        <div>
            <h1>Search Countries</h1>
            <SearchBar
                loading={loading}
                setLoading={setLoading}
                suggestions={suggestions}
                value={query}
                onChange={(val) => setQuery(val)} 
            />
        </div>
    )
}

export default SearchBarApp;