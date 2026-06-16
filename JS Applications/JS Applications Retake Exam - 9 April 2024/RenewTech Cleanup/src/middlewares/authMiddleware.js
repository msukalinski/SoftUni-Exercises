import { getUserData } from "../util/utility.js"

export const authMiddleware = (ctx, next) => {
    ctx.user = getUserData();

    next();
}