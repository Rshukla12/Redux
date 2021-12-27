import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { appReducer } from "./App/reducer";
import { authReducer } from "./Authentication/reducer";

const rootReducer = combineReducers({ auth: authReducer, app: appReducer } )

// function loogerMiddleware(){
//     return function(next){
//         return function(action){
//             console.log.apply(action)
//         };
//     };
// };
const loggerMiddleware = (store) => next => action => {
    console.log(action);
    return next(action);
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



// export const store = createStore( rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// applyMiddelware(loggerMiddleware)
// );




export const store = createStore( rootReducer, composeEnhancers(
    applyMiddleware(
        loggerMiddleware
    )
) );