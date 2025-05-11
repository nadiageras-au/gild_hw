
import {Request, Response} from "express";
import {blogsRepository} from "../../repositories/blogs.repository";
import { BlogInputModel } from "../../types/blog";

export function getBlogByIdHandler(req:Request, res:Response) {
    const id = req.params.id;
    const blog = blogsRepository.getBlogById(id)
    if (!blog) {
        res.sendStatus(404);
        return
    }

    res.status(200).send(blog);
}