import { useRef } from "react";

const useThrotller = ( callbackFn, duration ) => {
    const timeRef = useRef(Date.now());
    const timerRef = useRef(null);
    
    return (value) => {
        timerRef.current && clearTimeout(timerRef.current);
        if ( Date.now() - timeRef.current > duration ){
            callbackFn(value);
            timeRef.current = Date.now();
        } else {
            timerRef.current = setTimeout(()=> {
                callbackFn(value);
                timerRef.current = null;
            }, duration - (Date.now() - timeRef.current))
        }

    };
};

export default useThrotller;