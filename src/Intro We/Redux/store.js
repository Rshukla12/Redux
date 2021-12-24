import { createStore } from "redux";
import { reducer, todoReducer } from "./reducer.js";

const initState = {
  count: 1
}

const todoState = {
    task: []
}

export const store = createStore(reducer, initState);
export const todoStore = createStore(todoReducer, todoState);