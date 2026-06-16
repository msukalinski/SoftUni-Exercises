export const submitHandler = (callback) => {
    return (e) => {
        e.preventDefault();

        const data = Object.fromEntries(new FormData(e.currentTarget));

        callback(data, e.currentTarget);
    }
}

export const getUserData = () => JSON.parse(localStorage.getItem('userData'));

export const setUserData = (data) => localStorage.setItem('userData', JSON.stringify(data));

export const clearLocalStorage = () => localStorage.clear();