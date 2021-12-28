import { useEffect, useState } from "react"

export const useTimeout = ( time ) => {
    const [ready, setReady] = useState(false);
    const id = setTimeout(()=> {
        setReady(true);
    }, time);

    useEffect( () => {
        clearTimeout(id)
    } );

    return { ready }
}