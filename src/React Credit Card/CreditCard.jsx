import {useState} from "react";
import PinInput from "./Components/PinInput";

const CreditCard = () => {
    const [value, setValue] = useState("");
    return (
        <div style={{padding: "2rem", margin: "2rem"}}>
            <h1>Enter Credit Card Number</h1>
            <PinInput onChange={setValue} noOfBoxes={4} length={4}/>
        </div>
    )
};

export default CreditCard;