import {Request, Response} from "express";
import {localDb} from "../../../db/local-db";
import {generateNextId} from "../../../core/utils/generateId.utils";


export function createBlogHandler(
    req: Request<{},{}>,
    res: Response,
) {
    const newBlog = {
        id: generateNextId(localDb.blogs, blog => blog.id),
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
    };
    res.status(201).send(newBlog);
}