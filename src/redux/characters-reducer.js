const SET_PEOPLE = 'SET_PEOPLE'



let initialState = {
    people: [],
};

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PEOPLE: {
            return  { 
                ...state, 
                people: action.people 
            }
        }
        default:
            return state;
    }

}
export const setPeopleAC = (people) => ({
    type: SET_PEOPLE,
    people
})



export default peopleReducer;