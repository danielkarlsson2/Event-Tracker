import { combineReducers } from "redux";
import eventReducer from './eventReducer'
import eventsReducer from './eventsReducer'
import authReducer from "./authReducer"


export default combineReducers({
    event: eventReducer,
    events: eventsReducer,
    auth: authReducer
})