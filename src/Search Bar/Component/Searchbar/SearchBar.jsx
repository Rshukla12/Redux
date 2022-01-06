import styled from "@emotion/styled";
import { useState } from "react";

const SearchBarWrappper = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    position: relative
`;

const IconImage = styled.img`
    height: 20px;
    padding-right: 20px;
`;

const Input = styled.input`
    border: none;
    outline: none;
    flex: 1;
`;

const RightOpt = styled.div`
    display: flex;
    flex: 0 0 auto;
    padding-right: 10px;
    cursor: pointer;
`;

const Spinner = styled.div`
    border: 2px solid #f3f3f3;
    border-top: 2px solid #3498db;
    border-radius: 50%;
    margin-left: 10px;
    width: 20px;
    height: 20px;
    animation: spin 2s linear infinite;
    cursor: none;
    @keyframes spin {
        from {
            transform: rotate( 0deg );
        } to {
            transform: rotate( 360deg );
        }
    }
`;

const SearchBar = ({
    loading,
    setLoading,
    value,
    onChange,
    suggestions
}) => {
    const [q, setQ] = useState("");
    const handleInputChange = (e) => {
        setQ( e.target.value );
        onChange( e.target.value );
        setLoading( true );
        setTimeout(() => {
            setLoading( false )
        }, 1000);
    }

    const handleClear = () => {
        setQ("");
        onChange("");
        setLoading(false);
    }

    return (
        <SearchBarWrappper>
            <IconImage src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="searchIcon" />
            <Input value={q} onChange={handleInputChange} />
            <RightOpt>
                { q && <div onClick={handleClear}>X</div>  }
                { loading && <Spinner /> }
            </RightOpt>
        </SearchBarWrappper>
    )
};

export default SearchBar;