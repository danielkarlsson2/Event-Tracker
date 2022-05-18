import actiontypes from "../actiontypes";
import axios from 'axios'


export const getEvents = () => {
    return async dispatch => {
        dispatch(loading(true))
        try {
            const res = await axios.get('http://localhost:8080/posts')
            dispatch(setEvents(res.data))
        }
        catch (err) {
            dispatch(eventsFailure(err.message))
        }
    }
}
export const addEvent = (event) => {
    return async dispatch => {
        dispatch(loading(true))
        try {
            const res = await axios.post('http://localhost:8080/posts', event)
            dispatch(addToList(res.data))
        }
        catch(err) {
            dispatch(eventsFailure(err.message))
        }
    }
}
const addToList = (event) => {
    return {
        type: actiontypes().posts.addEvent,
        payload: event
    }
}



const setEvents = ( events ) => {
    return {
        type: actiontypes().events.setEvents,
        payload: events
    }
}

const loading = (payload) => {
    return {
        type: actiontypes().events.loading,
        payload
    }
}

const eventsFailure = (payload) => {
    return {
        type: actiontypes().events.eventsFailure,
        payload
    }
}



// export const removeOne = id => {
//     return {
//         type: actiontypes().events.removeOne,
//         payload: id
//     }
// }
