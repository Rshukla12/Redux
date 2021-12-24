import { createStore } from "redux";
import { reducer } from "./reducer.js";

const initState = {
  count: 1
}

export const store = createStore(reducer, initState);