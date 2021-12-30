import { actions } from "./actions";

export const reducer = (state, action) => {
	console.log(state);
	switch (action.type) {
		case actions.INCREMENT_COUNTER: {
			return {
				...state,
				counter: state.counter + 1
			};
		}
		case actions.DECREMENT_COUNTER: {
			return {
				...state,
				counter: state.counter - 1
			};
		}
		default: {
			return state;
		}
	}
};