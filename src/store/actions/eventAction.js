import actiontypes from "../actiontypes";
import axios from 'axios'

export const getEvent = (id) => {
    return async dispatch => {
        dispatch(loading(true))
        try {
            const res = await axios.get('http://localhost:8080/posts/' + id)
            dispatch(setEvent(res.data))            
        }
        catch (err) {
            dispatch(eventFailure(err.message))
        }
    }
}
const setEvent = ( event ) => {
    return {
        type: actiontypes().event.setEvent,
        payload: event
    }
}

const loading = (payload) => {
    return {
        type: actiontypes().event.loading,
        payload
    }
}

const eventFailure = (payload) => {
    return {
        type: actiontypes().event.eventFailure,
        payload
    }
}
