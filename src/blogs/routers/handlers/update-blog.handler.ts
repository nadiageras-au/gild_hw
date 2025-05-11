import {Request, Response} from "express";
import {blogsRepository} from "../../repositories/blogs.repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/utils/error.utils";
import {blogInputDtoValidation} from "../../validation/blog.input-dto.validation-middleware";

export function updateBlogHandler(req: Request, res: Response) {
      const id = req.params.id;
      const blog = blogsRepository.getBlogById(id)

    if(!blog) {
        res
            .status(HttpStatus.NotFound)
            .send(
                createErrorMessages([{field: 'id', message: 'Blog not found'}]),
            );
        return;
        }


    blogsRepository.updateBlog(id, req.body);
    res.sendStatus(HttpStatus.NoContent);

 }