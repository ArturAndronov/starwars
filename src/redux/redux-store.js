import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import peopleReducer from "./characters-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    peoplePage: peopleReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)));

export default store;