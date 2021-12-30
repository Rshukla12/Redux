import { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import useStopWatch from "../Hooks/useStopWatch";


const StopWatch = () => {
    const { 
        time,
        stopTimer, 
        startTimer, 
        resetTimer
    } = useStopWatch(0);
    
    const [isStart, setIsStart] = useState(false);

    const handleStart = () => {
        startTimer();
        setIsStart(true);
    }

    const handleStop = () => {
        stopTimer();
        setIsStart(false);
    }

    return (
        <Container>
            {time && <h1>{time}</h1>}
            
            <Container sx={{display: "flex", gap: "2rem", justifyContent: "center"}}>
                { 
                    isStart ? (
                        <Button onClick={handleStop} variant="contained">Pause</Button>
                    ) : (
                        <Button onClick={handleStart} variant="contained">Start</Button>
                    )
                }
                <Button onClick={resetTimer} variant="contained">Reset</Button>
            </Container>
        </Container>
    )
}
export default StopWatch;