import { useContext } from "react";
import { actions } from "./actions";
import { AppContext } from "./AppContextProvider";

const Counter = () => {
	const [counter, dispatch] = useContext(AppContext);
	const handleChange = (type) => {
		dispatch({
			type: type
		});
	};

	return (
		<div>
			<h1>Counter: {counter.counter}</h1>
			<button onClick={() => handleChange(actions.INCREMENT_COUNTER)}>
				Add
			</button>
			<button onClick={() => handleChange(actions.DECREMENT_COUNTER)}>
				Reduce
			</button>
		</div>
	);
};

export default Counter;
