import * as solutionService from '../services/solutionService.js';

export const deleteHandler = (ctx) => {
    if (confirm('Are you sure?')) {
        solutionService.del(ctx.params.detailsId)
            .then(() => ctx.page.redirect('/dashboard'));
    }
}