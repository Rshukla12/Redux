import { convertTime } from "./useTimer";

const { useEffect } = require("react");
const { useRef } = require("react");
const { useState } = require("react")

/**
 * 
 * @param {Number} time in ms 
 * @returns time in str format
 */

export const useStopWatch = ( initTime=0 ) => {
    const [time, setTime] = useState(initTime);
    const timerRef = useRef(null);

    const startTimer = () => {
        if ( timerRef.current ) return;
        timerRef.current = setInterval(()=> {
            setTime(time => time+10);
        }, 10);
    }
    
    const resetTimer = () => {
        stopTimer();
        setTime(0);
    }

    const stopTimer = () => {
        timerRef.current && clearInterval(timerRef.current);
        timerRef.current = null;
    }

    useEffect(()=>{
        return stopTimer();
    }, []);


    return { 
        time: convertTime(time, true),
        stopTimer, 
        startTimer, 
        resetTimer
    }
};

export default useStopWatch;