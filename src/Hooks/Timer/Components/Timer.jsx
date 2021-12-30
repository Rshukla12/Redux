import { useState } from "react";
import useTimer from "../Hooks/useTimer";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";


const Timer = () => {
    const { 
        time,
        updateTime, 
        stopTimer, 
        startTimer, 
        resetTimer
    } = useTimer(0);
    
    const [state, setState] = useState("");
    const [isStart, setIsStart] = useState(false);

    const handleChange = (e) => {
        setState(e.target.value);
        updateTime(e.target.value*1000);
    } 

    const handleStart = () => {
        startTimer();
        setIsStart(true);
        setState("")
    }

    const handleStop = () => {
        stopTimer();
        setIsStart(false);
    }

    useEffect(()=> {
        if ( time === "00 hour 00 minute 00 second" ) setIsStart(false);
    }, [time])

    return (
        <Container sx={{display:"flex", flexDirection:"column", gap:"1rem"}}>
            <TextField type="text" label="Time in Sec" value={state} variant="outlined" onChange={handleChange}/>
            {time && <h1>{time}</h1>}
            <Container sx={{display: "flex", gap: "2rem", justifyContent: "center"}}>
                { 
                    isStart ? (
                        <Button onClick={handleStop} variant="contained">Stop</Button>
                        ) : (
                            <Button disabled={time === "00 hour 00 minute 00 second"} onClick={handleStart} variant="contained">Start</Button>
                            )
                        }
                <Button onClick={resetTimer} variant="contained">Reset</Button>
            </Container>
        </Container>
    )
}
export default Timer;