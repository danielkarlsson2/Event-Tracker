import { combineReducers } from "redux";
import eventReducer from './eventReducer'
import eventTasksReducer from "./eventTasksReducer";

export default combineReducers({
    eventTasks: eventTasksReducer,
    eventReducer
})