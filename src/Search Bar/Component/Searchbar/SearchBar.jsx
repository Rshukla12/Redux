import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";

const SearchBarWrappper = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    position: relative;
    max-width: 40rem;
    margin: auto;
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
    font-size: 0.9rem;
`;

const Spinner = styled.div`
    border: 2px solid #f3f3f3;
    border-top: 2px solid #3498db;
    border-radius: 50%;
    margin-left: 10px;
    width: 16px;
    height: 16px;
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

const SuggestionsBox = styled.div`
    border: 1px solid gray;
    display: ${props=>props.len !== 0 ? 'flex' : 'none'};
    flex-direction: column;
    overflow-Y: scroll;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    max-height: 160px;
    max-width: 40rem;
    margin: auto;
    & > div {
        padding: 5px 10px;
        text-align: left;
        height: 20px;
    }
    & :nth-child(${props=>props.active}){
        background-color: #d3d3d3;
        font-weight: bold;
    }
    // & :nth-child( n + ${props=>props.limit + 1}){
    //     display: none;
    // }
    &&::-webkit-scrollbar {
        display: none;
    }
`;

const style = {
    width: "16rem",
    height: "6rem",
    padding: "5rem 5rem 8rem",
    margin: "15% auto"
}

const SearchBar = ({
    loading,
    setLoading,
    values,
    onChange,
    suggestions
}) => {
    const [q, setQ] = useState("");
    const [active, setActive] = useState(0);
    const suggestionsScrollRef = useRef(null);
    const [open, setOpen] = useState(false);

    const handleInputChange = (e) => {
        setQ( e.target.value );
        onChange( e.target.value );
        setLoading( true );
        setTimeout(() => {
            setLoading( false )
        }, 1000);
    };

    const handleClear = () => {
        setQ("");
        onChange("");
        setLoading(false);
    };

    useEffect(()=> {
        setActive(0);
        suggestionsScrollRef.current.scrollTop = 0;
    }, [suggestions]);

    const handleChangeActive = (e) => {
        switch ( e.code ){
            case "ArrowUp": {
                if ( active === 0 ){
                    suggestionsScrollRef.current.scrollTop = 30*suggestions.length;
                    setActive( suggestions.length );
                } else {
                    if ( active >= 5 )suggestionsScrollRef.current.scrollTop -= 30.5;
                    setActive( prev => prev-1 );
                }
                break;
            }
            case "ArrowDown": {
                if ( active === suggestions.length ){
                    suggestionsScrollRef.current.scrollTop = 0;
                    setActive( 0 );
                } else {
                    if ( active >= 5 ) suggestionsScrollRef.current.scrollTop += 30.5;
                    setActive( prev => prev + 1 );
                }
                break;
            }
            case "Enter" : {
                setOpen(true);
                break;
            }
            default: {
                return;
            }
        }
    }

    return (
        <div onKeyUp={ handleChangeActive }>
            <SearchBarWrappper>
                <IconImage src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="searchIcon" />
                <Input value={q} onChange={handleInputChange} />
                <RightOpt>
                    { q && <div onClick={handleClear}>X</div>  }
                    { loading && <Spinner /> }
                </RightOpt>
            </SearchBarWrappper>
            
            <SuggestionsBox 
                ref={suggestionsScrollRef}
                active={active}
                limit={5}
                len={suggestions.length}
            >
                {   suggestions?.map((el, ind)=> (
                        <div 
                            onMouseOver={()=> setActive(ind+1)} 
                            onClick={()=>setOpen(true)}
                            key={ind}
                        >
                            {el}
                        </div>
                    ))
                }
            </SuggestionsBox>

            <Modal open={open} onClose={()=>setOpen(false)}>
                <Paper sx={style}>
                    <h2>Country Info</h2>
                    <div>Country - {values[active-1]?.country}</div>
                    <div>Capital - {values[active-1]?.city}</div>
                </Paper>
            </Modal>
        </div>
    )
};

export default SearchBar;