import { combineReducers, createStore } from "redux";
import peopleReducer from "./characters-reducer";


let reducers = combineReducers({
    peoplePage: peopleReducer
});


let store = createStore(reducers);

export default store;