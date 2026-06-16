import * as tattooService from '../services/tattooService.js';

export const deleteHandler = (ctx) => {
    if (confirm('Are you sure?')) {
        tattooService.del(ctx.params.tattooId)
        .then(() => {
            ctx.page.redirect('/dashboard');
        })
    }
}