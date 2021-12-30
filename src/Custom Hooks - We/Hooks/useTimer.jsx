const { useState, useRef, useEffect } = require("react");

export const useTimer = ({ intialValue = 0 }) => {
	const [value, setValue] = useState(intialValue);

	const timerRef = useRef(null);

	const startTimer = () => {
		if (!timerRef.current) {
			timerRef.current = setInterval(() => {
				setValue((prev) => {
					if (prev - 1 === 0) pauseTimer();
					return prev - 1;
				});
			}, 1000);
		}
	};

	const pauseTimer = () => {
		clearInterval(timerRef.current);
		timerRef.current = null;
	};

	const resetTimer = () => {
		pauseTimer();
		setValue(intialValue);
	};

	useEffect(() => {
		return pauseTimer;
	}, []);

	return { value, startTimer, pauseTimer, resetTimer };
};
