
export const loadState = () => {
    try {
        const savedState = localStorage.getItem('state');

        if (savedState === null) {
            // Если не undefined, то стейт по умолчанию в редюсере не отработает
            return undefined;
        }
        // В локалСтораже, данные в виде строки ток
        return JSON.parse(savedState);

    } catch (error) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const stateToBeSaved = JSON.stringify(state);

        localStorage.setItem('state', stateToBeSaved)
    } catch (error) {
        console.log(error);
        
    }
}