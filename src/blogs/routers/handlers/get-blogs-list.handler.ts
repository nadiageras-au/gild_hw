
import {Request, Response} from "express";
import {localDb} from "../../../db/local-db";
import {blogsRepository} from "../../repositories/blogs.repository";

export function getBlogsListHandler(
    req: Request,
    res: Response,
) {
    res.send(blogsRepository.getAllBlogs());

}