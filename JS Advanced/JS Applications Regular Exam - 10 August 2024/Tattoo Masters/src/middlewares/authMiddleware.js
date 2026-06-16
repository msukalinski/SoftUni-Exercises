import { getUserData } from "../services/userService.js"

export const authMiddleware = (ctx, next) => {
    ctx.user = getUserData();

    next();
}