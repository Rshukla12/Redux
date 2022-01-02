import {useState} from "react";
import PinInput from "./Components/PinInput";

const PinApp = () => {
    const [value, setValue] = useState("");
    return (
        <div style={{padding: "2rem", margin: "2rem"}}>
            <h1>OTP - Enter 12345</h1>
            <PinInput onChange={setValue} target={value === "12345"} noOfBoxes={5}/>
        </div>
    )
};

export default PinApp;