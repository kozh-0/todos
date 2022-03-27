import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { loadState, saveState } from "./localStorage";


export const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(
        rootReducer, 
        persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    store.subscribe(() => {
        saveState(store.getState())
    })

    return store;
}
