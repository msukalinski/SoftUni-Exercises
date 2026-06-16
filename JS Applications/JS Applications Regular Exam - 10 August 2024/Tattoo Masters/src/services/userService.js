export const getUserData = () => JSON.parse(localStorage.getItem('userData'));
export const setUserData = (data) => localStorage.setItem('userData', JSON.stringify(data));
export const clearLocalStorage = () => localStorage.clear();