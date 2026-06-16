import * as apiService from './apiService.js';

const endpoints = {
    allCards: 'data/cyberpunk?sortBy=_createdOn%20desc',
    addCard: 'data/cyberpunk',
    oneCard: (cardId) => `data/cyberpunk/${cardId}`,
    edit: (cardId) => `data/cyberpunk/${cardId}`,
}

export const getAll = () => apiService.get(endpoints.allCards);
export const addCard = (data) => apiService.post(endpoints.addCard, data);
export const getOne = (cardId) => apiService.get(endpoints.oneCard(cardId));
export const editCard = (cardId, data) => apiService.put(endpoints.edit(cardId), data);
export const del = (cardId) => apiService.del(endpoints.oneCard(cardId));