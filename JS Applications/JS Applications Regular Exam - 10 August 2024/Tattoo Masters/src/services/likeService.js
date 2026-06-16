import * as apiService from './apiService.js';

const endpoints = {
    likesCollection: 'data/likes',
    tattooLikes: (tattooId) => `data/likes?where=tattooId%3D%22${tattooId}%22&distinct=_ownerId&count`,
    userLikes: (tattooId, userId) => `data/likes?where=tattooId%3D%22${tattooId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export const postLike = (tattooId) => apiService.post(endpoints.likesCollection, { tattooId });
export const getLikes = async (tattooId, userId) => {
    const likesResult = await Promise.all([
        apiService.get(endpoints.tattooLikes(tattooId)),
        apiService.get(endpoints.userLikes(tattooId, userId))
    ]);

    const [totalLikes, isLiked] = likesResult;

    return { totalLikes, isLiked: Boolean(isLiked) };
}