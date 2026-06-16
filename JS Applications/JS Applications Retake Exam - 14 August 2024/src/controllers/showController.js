import * as showService from '../services/showService.js';
import { detailsTemplate } from '../views/details.js';
import { dashboardTemplate } from '../views/dashboard.js';
import { createTemplate } from '../views/create.js';
import { editTemplate } from '../views/edit.js';
import { searchTemplate } from '../views/search.js';

export const renderDetails = (ctx) => {

    showService.getOne(ctx.params.showId)
        .then(show => {
            const isOwner = ctx.user?._id === show._ownerId;

            ctx.render(detailsTemplate(show, isOwner));
        });
}

export const renderDashboard = (ctx) => {
    showService.getAll()
        .then(shows => {
            ctx.render(dashboardTemplate(shows));
        });
}

export const renderCreate = (ctx) => {
    const onCreate = (data, form) => {
        const { title, ['image-url']: imageUrl, genre, country, details } = data;

        showService.create({ title, imageUrl, genre, country, details })
            .then(() => {
                ctx.page.redirect('/dashboard');
            });
    }

    ctx.render(createTemplate(onCreate))
}

export const renderEdit = (ctx) => {
    showService.getOne(ctx.params.showId)
        .then(showData => {
            ctx.render(editTemplate(onEdit, showData));
        });

    const onEdit = (data, form) => {
        const { title, imageUrl, genre, country, details } = data;

        showService.edit({ title, imageUrl, genre, country, details }, ctx.params.showId)
            .then(() => {
                ctx.page.redirect(`/shows/${ctx.params.showId}/details`);
            });
    }
}

export const deleteHandler = (ctx) => {
    showService.del(ctx.params.showId)
        .then(() => {
            ctx.page.redirect('/dashboard');
        });
}

export const search = (ctx) => {
    const onSearch = (data, form) => {
        const { search } = data;

        if (!search) {
            return alert('Search field is empty!');
        }
        
        const searchQuery = encodeURIComponent(`title LIKE "${search}"`);

        showService.searchShow(searchQuery)
            .then(shearchRes => {

                console.log(shearchRes);

                ctx.render(searchTemplate(onSearch, shearchRes));
            });
    }

    ctx.render(searchTemplate(onSearch));
}