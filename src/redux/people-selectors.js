//import { createSelector } from "reselect";

export const getPeople = (state) => {
    return state.peoplePage.people;
}
export const getIsFetching = (state) => {
    return state.peoplePage.isFetching;
}

