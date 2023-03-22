import { PeopleAPI } from "../api/api";

const SET_PEOPLE = 'SET_PEOPLE'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';



let initialState = {
    people: [],
    isFetching: true
};

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE: {
            const peopleWithId = action.payload.map((people, index) => ({
                ...people,
                id: index + 1
            }));
            return {
                ...state,
                people: peopleWithId
            }
        }
        case TOOGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }

}
export const setPeople = (people) => ({
    type: SET_PEOPLE,
    payload: people
})

export const toggleIsFetching = (isFetching) => ({
    type: TOOGLE_IS_FETCHING,
    isFetching
})

export const requestPeople = () => {
    return async (dispatch) => {

        dispatch(toggleIsFetching(true));

        let data = await PeopleAPI.getPeople();
        dispatch(toggleIsFetching(false));
        dispatch(setPeople(data.results));
    }

}

export const getPeopleDetails = (id) => async (dispatch) => {
    let response = await PeopleAPI.getPeople(id);
    dispatch(setPeople(response.data));
}

export default peopleReducer;