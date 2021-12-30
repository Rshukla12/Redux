const { useEffect } = require("react");
const { useRef } = require("react");
const { useState } = require("react")

/**
 * 
 * @param {Number} time in ms 
 * @returns time in str format
 */

const addZero = ( time, length=2 ) => {
    if ( length - String(time).length === 1 ) {
        time = "0" + time;
    } else if ( length - String(time).length === 2 ) {
        time = "00" + time;
    }
    return time;
}

export const convertTime = (time, isMsRequired) => {
    const timeInMilSec = time%1000;
    time = Math.floor(time/1000);
    const timeInSec = time%60;
    time = Math.floor(time/60);
    const timeInMin = time%60;
    time = Math.floor(time/60);
    const timeInHour = time%24;
   
    let timeStr = addZero(timeInHour);
    timeStr += timeInHour > 1 ? " hours " : " hour ";
    timeStr += addZero(timeInMin);
    timeStr += timeInMin > 1 ? " minutess ": " minute ";
    timeStr += addZero(timeInSec);
    timeStr += timeInSec > 1 ? " seconds" : " second";
    if ( isMsRequired ) {
        timeStr += " " + addZero(Math.floor(timeInMilSec/10));
        timeStr += timeInMilSec > 1 ? " milliseconds" : " millisecond";
    }
    return timeStr;
}

export const useTimer = ( initTime=0 ) => {
    const [time, setTime] = useState(initTime);
    const timerRef = useRef(null);

    const startTimer = () => {
        if ( timerRef.current ) return;
        timerRef.current = setInterval(()=> {
            setTime(time => {
                if ( time === 1000 ) stopTimer();
                return(time-1000);
            });
        }, 1000);
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

    const updateTime = ( time ) => {
        stopTimer();
        setTime(time);
    }

    return { 
        time: convertTime(time),
        updateTime, 
        stopTimer, 
        startTimer, 
        resetTimer
    }
};

export default useTimer;