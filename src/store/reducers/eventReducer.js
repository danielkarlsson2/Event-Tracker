import actiontypes from "../actiontypes";

const initState = {
    data: [],
    loading: false,
    error: null,
    user: null

}

const eventReducer = (state = initState, action) => {

    switch(action.type) {

        case actiontypes().event.loading: 
            return {
                ...state,
                loading: action.payload
            }   
        

        case actiontypes().event.setEvent: 
            return {
              data: action.payload,
              loading: false,
              error: null,
              user: true
            }
        

        case actiontypes().event.eventFailure:
            return {
                data: [],
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export default eventReducer
