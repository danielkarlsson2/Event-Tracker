import actiontypes from "../actiontypes";

export const addEvent = post => {
    return {
        type: actiontypes().events.add,
        payload: post
    }
}

export const removeOne = id => {
    return {
        type: actiontypes().events.removeOne,
        payload: id
    }
}