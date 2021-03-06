import React, { useEffect, useState } from "react";
import SearchBar from "./Component/Searchbar/SearchBar";
import useThrotller from "./Hooks/useThrotller";
import { countries } from "./utils/countries.js";

const SearchBarApp = () => {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [suggestions, setSuggestions] = useState([]);
    
    const newSuggestion = (query) => {
        if ( query.length === 0 ) setSuggestions([]);
        else {
            let out = countries.filter(item => {
                return item.country.toLowerCase().indexOf(query) !== -1;
            });
            setSuggestions( out );
        }
    }
    
    const updateFn = useThrotller( newSuggestion, 600 );

    useEffect(()=>{
        updateFn(query);

    }, [query]);

    return (
        <div>
            <h1>Search Countries</h1>
            <SearchBar
                loading={loading}
                setLoading={setLoading}
                suggestions={suggestions.map(item=>item.country)} 
                values={suggestions}
                onChange={(val) => updateFn(val)} 
            />
        </div>
    )
}

export default SearchBarApp;