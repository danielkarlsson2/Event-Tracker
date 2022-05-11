import actiontypes from "../actiontypes";

const initState = {
    events: [],
    totalQuantity: 0

}

const eventReducer = (state = initState, action) => {

    switch(action.type) {

        case actiontypes().events.add: {
            const eventRef = state.events.find(item => item._id === action.payload._id)

            let eventsItem = {
                ...action.payload, 
                quantity: 1
            }

            eventRef
            ? eventRef.quantity += 1
            : state.events = [...state.events, eventsItem]

            return {
                ...state,
                totalQuantity: getTotalQuantity(state.events)
            }
        }

        case actiontypes().events.removeOne: {
            state.events = state.events.filter(item => item._id !== action.payload)

            return {
                ...state,
                totalQuantity: getTotalQuantity(state.events)
            }
        }

        default:
            return state
    }
}

export default eventReducer

const getTotalQuantity = events => {
    let quantity = 0

    events.forEach(item => {
        quantity += item.quantity
    })

    return quantity
}