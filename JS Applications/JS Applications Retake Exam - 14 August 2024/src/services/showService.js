import * as apiService from "./apiService.js";

const endpoints = {
    getShows: 'data/shows?sortBy=_createdOn%20desc',
    getShow: (showId) => `data/shows/${showId}`,
    createShow: 'data/shows',
    searchShow: (query) => `data/shows?where=${query}`
}

export const getAll = () => apiService.get(endpoints.getShows);
export const getOne = (showId) => apiService.get(endpoints.getShow(showId));
export const create = (showData) => apiService.post(endpoints.createShow, showData);
export const edit = (showData, showId) => apiService.put(endpoints.getShow(showId), showData);
export const del = (showId) => apiService.del(endpoints.getShow(showId));
export const searchShow = (query) => apiService.get(endpoints.searchShow(query));