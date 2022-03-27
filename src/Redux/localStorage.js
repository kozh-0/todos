
export const loadState = () => {
    // try catch так как у некоторых пользователей может быть закрыт доступ к локал сторажу, так приложение не сломается
    try {
        const savedState = localStorage.getItem('state');

        if (savedState === null) {
            // Если в LS данных нет, то undefined позволит отработать стейтам по умолчанию в редюсерах
            // return это выход из всей функции!
            return undefined;
        }
        // В локалСтораже, данные в виде строки ток, поэтому парсим
        return JSON.parse(savedState);

    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        // приводим к JSON, это тяжелая операция и при каждом вызове в subscribe нагружает сайт
        const stateToBeSaved = JSON.stringify(state);
        localStorage.setItem('state', stateToBeSaved);

    } catch (err) {
        console.error(err);
    }
}