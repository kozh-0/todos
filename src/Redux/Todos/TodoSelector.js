
export const selectVisibleTodos = (state, filter) => {
    switch (filter) {
        case 'all':
            return state;
        case 'active': {
            return state.filter(todo => !todo.checked)
        }
        case 'completed': {
            return state.filter(todo => todo.checked)
        }
    
        default:
            return state;
    }
}