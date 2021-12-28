import { useEffect } from "react";
import { useState } from "react"

const useMergeState = ( initState ) => {
    const [state, setState] = useState(initState);

    const updateState = ( update ) => {
        setState({
            ...state,
            ...update
        })
    }

    useEffect( () => {
        
    }, [initState, state])

    return [state, updateState];
}

export default useMergeState;