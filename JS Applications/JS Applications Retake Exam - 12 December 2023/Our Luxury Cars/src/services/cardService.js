import * as apiService from './apiService.js';

const endpoints = {
    carsData: 'data/cars?sortBy=_createdOn%20desc',
    carData: (carId) => `data/cars/${carId}`,
    carCollection: 'data/cars',
    carSearch: (query) => `data/cars?where=${query}`
}

export const getAll = () => apiService.get(endpoints.carsData);
export const create = (carData) => apiService.post(endpoints.carCollection, carData);
export const getOne = (carId) => apiService.get(endpoints.carData(carId));
export const edit = (carId, carData) => apiService.put(endpoints.carData(carId), carData);
export const del = (carId) => apiService.del(endpoints.carData(carId));
export const search = (query) => apiService.get(endpoints.carSearch(query));