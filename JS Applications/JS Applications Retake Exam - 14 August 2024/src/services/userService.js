export const getUserData = () => {
    return JSON.parse(localStorage.getItem('userData'));
}

export const setUserData = (userData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
}