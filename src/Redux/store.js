import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { loadState, saveState } from "./localStorage";
// в saveState у нас преобразования в json, что нагружает, тротл из библиотеки лодаш смягчает нагрузку
import { throttle } from "lodash/throttle";

export const configureStore = () => {
    const persistedState = loadState();

    const store = createStore(
        rootReducer, 
        persistedState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    // при каждом изменении обновляем LocalStorage
    // слушатель срабатывает при каждом диспатче и потенциальном изменении стора
    store.subscribe(throttle(() => {
        /* //весь стор сохраняет
        saveState(store.getState()) */

        saveState({
            todos: store.getState().todos,
        })
        // синхронизируем только todos с LS, чтобы filter всегда оставался all и не переключался на другие при перезагрузке
    }, 1000))
// из тротла это таймаут на перезапись локал стоража после изменения стейта
    return store;
}
