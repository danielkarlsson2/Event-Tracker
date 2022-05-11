import actiontypes from "../actiontypes";

const initState = {
    loading: false,
    error: null,
    data: []
}

const eventTasksReducer = (state = initState, action) => {
    switch(action.type) {

        case actiontypes().posts.getEvents:
            return {
                ...state,
                loading: true
            }

            case actiontypes().posts.getEventsSuccess:
                return {
                    ...state,
                    loading: false,
                    error: null,
                    data: action.payload
                }

            case actiontypes().posts.getEventsFailure:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                    
                }

            default:

            return state


    }
}

export default eventTasksReducer