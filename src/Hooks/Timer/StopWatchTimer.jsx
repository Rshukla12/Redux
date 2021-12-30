import { Button, Container, Paper } from "@mui/material";
import { useState } from "react";
import StopWatch from "./Components/StopWatch";
import Timer from "./Components/Timer";

const StopWatchTimer = () => {
    const [isTimer, setIsTimer] = useState(false);

    return (
        <Container >
            <Paper sx={{padding: "1rem", margin:"auto", width: "70%", maxWidth: "50rem"}}>
                <Container sx={{marginBottom: "1rem", display: "flex", width:"100%", justifyContent: "center"}}>
                    <Button fullWidth onClick={()=>setIsTimer(false)} variant="contained">Timer</Button>
                    <Button fullWidth onClick={()=>setIsTimer(true)} variant="contained">StopWatch</Button>
                </Container>
                {
                    !isTimer ? (
                        <Timer />
                        ) : (
                        <StopWatch />
                    )
                }
            </Paper>
        </Container>   
    )
};

export default StopWatchTimer;