import * as apiService from './apiService.js';

const endpoints = {
    allTattoos: 'data/tattoos?sortBy=_createdOn%20desc',
    tattooCollection: 'data/tattoos',
    specificTattoo: (tattooId) => `data/tattoos/${tattooId}`
}

export const getAll = () => apiService.get(endpoints.allTattoos);
export const create = (tattooData) => apiService.post(endpoints.tattooCollection, tattooData);
export const getOne = (tattooId) => apiService.get(endpoints.specificTattoo(tattooId));
export const edit = (tattooId, tattooData) => apiService.put(endpoints.specificTattoo(tattooId), tattooData);
export const del = (tattooId) => apiService.del(endpoints.specificTattoo(tattooId));

