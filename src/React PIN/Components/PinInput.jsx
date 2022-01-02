import { useRef, useState } from "react";
import PinItem from "./PinItem";

const PinInput = ({ noOfBoxes = 4, length = 1, onChange, target }) => {
	const [values, setValues] = useState(() => new Array(noOfBoxes).fill(""));
	const arr = new Array(noOfBoxes).fill(0);
	const ref = useRef([]);
    const [isActive, setIsActive] = useState(0);

	const handleChange = (val, ind) => {
		values[ind] = val;
		
		if (val.length === length && ind < noOfBoxes - 1) {
			ref.current[ind + 1].focus();
            setIsActive(ind+1);
		}
		setValues([...values]);
		onChange(values.join(""));
	};

	const handleBackSpace = (val, ind) => {
		let temp = values[ind];
		values[ind] = val;
		if (ind > 0 && temp.length === 0) {
			ref.current[ind - 1].focus();
            setIsActive(ind-1);
		}
		setValues([...values]);
		onChange(values.join(""));
	};

	const handlePaste = (e) => {
		e.preventDefault();
		const val = e.clipboardData
			.getData("text")
			.split("")
			.filter((a, i) => i < length * noOfBoxes);

		val.forEach((char, index) => {
			values[index] = char;
			ref.current[index].value = char;
			if (index < noOfBoxes - 1) {
				ref.current[index + 1].focus();
                setIsActive(index+1);
			}
			setValues([...values]);
			onChange(values.join(""));
		});
	};

	return (
		<div
			style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
			onPaste={handlePaste}>
			{arr.map((_, ind) => (
				<PinItem
					ref={(el) => (ref.current[ind] = el)}
					length={length}
					handleChange={(val) => handleChange(val, ind)}
					key={ind}
					handleBackSpace={(val) => handleBackSpace(val, ind)}
                    target={target}
                    isActive = {isActive >= ind}
				/>
			))}
		</div>
	);
};

export default PinInput;
