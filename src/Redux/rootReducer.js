import { combineReducers } from "redux";
import { TodoReducer } from "./Todos/TodoReducer";


export const rootReducer = combineReducers({
    todos: TodoReducer,
})