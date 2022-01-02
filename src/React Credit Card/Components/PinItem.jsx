import React from "react";

const PinItem = React.forwardRef(
	({ length, handleChange, handleBackSpace, target, isActive }, ref) => {
		const handleKeyUp = (e) => {
			switch (e.code) {
				case "Backspace": {
					handleBackSpace(e.target.value);
					break;
				}
				case "ShiftLeft":
				case "ShiftRight":
				case "Tab":
				case "ArrowLeft":
				case "ArrowRight":
				case "ArrowUp":
				case "ArrowDown":
					break;
				default: {
					handleChange(e.target.value);
				}
			}
		};

        const defaultStyle = {
            width: `${length+1}rem`,
            height: "2rem",
            borderRadius: "0.25rem",
            padding: "0.75rem 0.4rem 0.75rem 1.1rem",
            fontSize: "2rem",
            boxShadow: target ? "0px 0px 3px 3px rgba(20, 180, 40, 0.3)" : isActive ? "0px 0px 3px 3px rgba(20, 40, 180, 0.3)" : "",
            color: target ? "green" : "blue",
			background: target ? "rgba(40, 150, 40, 0.1)" : ""
        };


		return (
			<div>
				<input
					ref={ref}
					type="text"
					maxLength={length}
					style={defaultStyle}
					onKeyUp={handleKeyUp}
					disabled={target}
				/>
			</div>
		);
	}
);

export default PinItem;