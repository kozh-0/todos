import {ADD_TODO, INPUT_HANDLER, CHECKBOX_HANDLER, DELETE_TODO} from './TodoTypes'

const initialValue = {
    input: '',
    data: [
        // {text: 'Learn JS', id: 1, checked: false},
        // {text: 'Learn React', id: 2, checked: false},
        // {text: 'Learn Redux', id: 3, checked: false},
        // {text: 'Купить сахар', id: 4, checked: false},
    ]
}

export const TodoReducer = (state = initialValue, action) => {
    // console.log(state);

    switch (action.type) {
        case ADD_TODO:  
            return {
                input: '',
                data: action.input ? [
                    ...state.data,
                    {
                        text: action.input,
                        id: Date.now(),
                        checked: false
                    }
                ] : [...state.data]
            }
        case INPUT_HANDLER:
            return {
                input: action.input,
                data: [...state.data]
            }
        case CHECKBOX_HANDLER:
            return {
                input: action.input,
                data: state.data.map(item => 
                    item.id === action.id 
                        ? {...item, checked: !item.checked} : item
                )
            }
        case DELETE_TODO:
            return {
                input: action.input,
                data: state.data.filter(item => item.id !== action.id)
            }
        default:
            return state;
    }
}


