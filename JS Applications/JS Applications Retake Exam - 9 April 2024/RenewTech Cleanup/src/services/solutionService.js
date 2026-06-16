import * as apiService from "./apiService.js";

const endpoints = {
    allSolutions: 'data/solutions?sortBy=_createdOn%20desc',
    details: (id) => `data/solutions/${id}`,
    collection: 'data/solutions',
    likes: 'data/likes',
    solutionLikes: (solutionId) => `data/likes?where=solutionId%3D%22${solutionId}%22&distinct=_ownerId&count`,
    userLikes: (solutionId, userId) => `data/likes?where=solutionId%3D%22${solutionId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export const getAll = () => apiService.get(endpoints.allSolutions);
export const getOne = (solutionId) => apiService.get(endpoints.details(solutionId));
export const edit = (solutionId, data) => apiService.put(endpoints.details(solutionId), data);
export const post = (data) => apiService.post(endpoints.collection, data);
export const del = (id) => apiService.del(endpoints.details(id));

export const postLike = (solutionId) => apiService.post(endpoints.likes, { solutionId });
export const getLikes = (solutionId) => apiService.get(endpoints.solutionLikes(solutionId));
export const getUserLike = (solutionId, userId) => apiService.get(endpoints.userLikes(solutionId, userId));