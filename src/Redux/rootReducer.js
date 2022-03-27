import { combineReducers } from "redux";
import { TodoReducer } from "./Todos/TodoReducer";
import { filterReducer } from "./filters/filterReducer"


export const rootReducer = combineReducers({
    todos: TodoReducer,
    filter: filterReducer
})