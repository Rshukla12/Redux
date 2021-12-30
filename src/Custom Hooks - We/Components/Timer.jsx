import { useTimer } from "../Hooks/useTimer";

const Timer = () => {
	const { value, startTimer, pauseTimer, resetTimer } = useTimer({
		intialValue: 20
	});

	return (
		<>
			<h1>{value}</h1>
			<button onClick={startTimer}>Start</button>
			<button onClick={pauseTimer}>Pause</button>
			<button onClick={resetTimer}>Reset</button>
		</>
	);
};

export default Timer;
