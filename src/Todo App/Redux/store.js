import { createStore } from "redux";
import { todoReducer } from "./reducer.js";

const todoState = {
    task: []
}

export const todoStore = createStore(todoReducer, todoState);