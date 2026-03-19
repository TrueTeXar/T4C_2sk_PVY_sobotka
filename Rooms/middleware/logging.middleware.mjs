import {Logger} from "../logger.mjs";

export default async function LoggingMiddleware(req, res, next) {
    const logger = new Logger();

    try {
         await next();
    }
    catch (error) {
        logger.log(error.message);
    }
}