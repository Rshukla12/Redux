import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { appReducer } from "./App/reducer";
import { authReducer } from "./Authentication/reducer";

const rootReducer = combineReducers({ auth: authReducer, app: appReducer } )

const thunkMiddleware = (store) => (next) => (action) => {
    return typeof action === "function"
      ? action(store.dispatch, store.getState)
      : next(action);
};

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore( rootReducer, composeEnhancers(
    applyMiddleware(
        thunkMiddleware
    )
) );