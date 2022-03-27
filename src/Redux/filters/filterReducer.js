import { SET_FILTER } from "./filtersTypes";


export const filterReducer = (state = 'all', action) => {
    
    switch (action.type) {
        case SET_FILTER:
            return action.filter
    
        default:
            return state;
    }
}