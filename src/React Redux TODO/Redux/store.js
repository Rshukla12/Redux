import { createStore } from "redux";
import reducer from "./reducer";

const initStore = {
    isLoading: true,
    isError: false,
    todos: [],
    task: null
}

export const store = createStore( reducer, initStore );