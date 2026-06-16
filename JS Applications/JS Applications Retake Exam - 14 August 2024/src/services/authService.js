import * as apiService from "./apiService.js";

const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout',
}

export const login = (loginData) => apiService.post(endpoints.login, loginData);
export const register = (registerData) => apiService.post(endpoints.register, registerData);
export const logout = () => apiService.get(endpoints.logout);