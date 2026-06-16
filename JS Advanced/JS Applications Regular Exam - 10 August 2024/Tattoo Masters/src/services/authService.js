import * as apiService from './apiService.js';

const endpoints = {
    login: 'users/login',
    register: 'users/register',
    logout: 'users/logout',
}

export const login = (userData) => apiService.post(endpoints.login, userData);
export const register = (userData) => apiService.post(endpoints.register, userData);
export const logout = () => apiService.get(endpoints.logout);