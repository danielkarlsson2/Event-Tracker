import actiontypes from "../actiontypes";

import axios from "axios";

export const getTasks = () => {
    return async dispatch => {
        dispatch({
            type: actiontypes().eventTasks.getEvents
        })
        try {
            const res = await axios.get('http://localhost:8080/posts')
            if(res.status === 200) {
                dispatch(getEventsSuccess(res.data))
            }
            else {
                throw new Error('could not get the events')
            }
        }
        catch (err) {
            dispatch(getEventsFailure(err.message))
        }
    }
}

const getEventsSuccess = (posts) => {
    return {
        type: actiontypes().eventTasks.getEventsSuccess,
        payload: posts
    }
}
const getEventsFailure = (err) => {
    return {
        type: actiontypes().eventTasks.getEventsFailure,
        payload: err
    }
}