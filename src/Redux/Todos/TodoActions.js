import {ADD_TODO, INPUT_HANDLER, CHECKBOX_HANDLER, DELETE_TODO} from './TodoTypes'

export const addTodo = (input) => ({
    type: ADD_TODO,
    input
})

export const inputHandler = (input) => ({
    type: INPUT_HANDLER,
    input
})

export const checkboxHandler = (input, id) => ({
    type: CHECKBOX_HANDLER,
    id,
    input
})

export const deleteTodo = (input, id) => ({
    type: DELETE_TODO,
    id,
    input
})