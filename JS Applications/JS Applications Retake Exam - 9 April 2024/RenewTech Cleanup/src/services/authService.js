import * as apiService from "./apiService.js";

const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout'
}

export const login = (data) => apiService.post(endpoints.login, data).then(userData => userData);
export const register = (data) => apiService.post(endpoints.register, data).then(userData => userData);
export const logout = () => apiService.get(endpoints.logout).then(res => res);