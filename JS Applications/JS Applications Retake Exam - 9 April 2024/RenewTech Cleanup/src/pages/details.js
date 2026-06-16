import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as solutionService from "../services/solutionService.js";

const detailsTemplate = (solution, isOwner, userData, likeHandler, solutionLikes, isLiked) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${solution.imageUrl}" alt="example1" />
        <div>
            <p id="details-type">${solution.type}</p>
            <div id="info-wrapper">
                <div id="details-description">
                    <p id="description">${solution.description}</p>
                    <p id="more-info">${solution.learnMore}</p>
                </div>
            </div>
            <h3>Like Solution:<span id="like">${solutionLikes}</span></h3>

            <div id="action-buttons">
                ${isOwner
        ? html`
                    <a href="/edit/${solution._id}" id="edit-btn">Edit</a>
                    <a href="/delete/${solution._id}" id="delete-btn">Delete</a>
                    `
        : nothing
    }
                ${userData && !isOwner && !isLiked ? html`<a href="#" id="like-btn" @click="${likeHandler}">Like</a>` : nothing}
            </div>
            
        </div>
    </div>
</section>
`;


export const detailsView = (ctx) => {
    const userData = ctx.user;
    const solutionId = ctx.params.detailsId;

    const likeHandler = (e) => {
        e.preventDefault();

        solutionService.postLike(solutionId)
            .then(() => {
                ctx.page.redirect(`/details/${solutionId}`);
            })
    }

    let solutionLikes = 0;
    let isLiked = Boolean;

    solutionService.getLikes(solutionId)
        .then(likes => {
            solutionLikes = likes;
        })

    solutionService.getUserLike(solutionId, userData?._id)
        .then(userLike => {
            isLiked = Boolean(userLike);
        })

    solutionService.getOne(solutionId)
        .then(solution => {
            const isOwner = userData?._id === solution._ownerId;

            ctx.render(detailsTemplate(solution, isOwner, userData, likeHandler, solutionLikes, isLiked));
        })
}