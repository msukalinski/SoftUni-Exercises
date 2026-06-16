import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as tattooService from '../services/tattooService.js';
import * as likeService from '../services/likeService.js';

const editAndDeleteTemplate = (tattooId) => html`
    <a href="/tattoos/${tattooId}/edit" id="edit-btn">Edit</a>
    <a href="/tattoos/${tattooId}/delete" id="delete-btn">Delete</a>
`;

const likeTemplate = (onLike) => html`
    <a href="#" id="like-btn" @click="${onLike}">Like</a>
`;

const detailsTemplate = (tattooData, isOwner, totalLikes, isLiked, isUser, onLike) => html`
    <section id="details">
        <div id="details-wrapper">
            <img
              id="details-img"
              src="${tattooData.imageUrl}"
              alt="example1"
            />
          <div>
                <div id="info-wrapper">
                    <p id="details-type">${tattooData.type}</p>
                    <div id="details-description">
                        <p id="user-type">${tattooData.userType}</p>
                        <p id="description">${tattooData.description}</p>
                    </div>
                    <h3>Like tattoo:<span id="like">${totalLikes}</span></h3>
                    <div id="action-buttons">
                        ${isOwner ? editAndDeleteTemplate(tattooData._id) : nothing}
                        ${!isOwner && !isLiked && isUser ? likeTemplate(onLike) : nothing}
                    </div>
                </div>
          </div>
        </div>
    </section>
`;

export const renderDetails = async (ctx) => {
    const tattooId = ctx.params.tattooId;

    const { totalLikes, isLiked } = await likeService.getLikes(tattooId, ctx.user?._id);

    const onLike = (e) => {
        e.preventDefault();
        likeService.postLike(tattooId)
        .then(() => {
            ctx.page.redirect(`/tattoos/${tattooId}/details`)
        })
    }
    tattooService.getOne(tattooId)
        .then(tattooData => {
            const isOwner = ctx.user?._id === tattooData._ownerId;

            ctx.render(detailsTemplate(tattooData, isOwner, totalLikes, isLiked, ctx.user, onLike));
        })
}