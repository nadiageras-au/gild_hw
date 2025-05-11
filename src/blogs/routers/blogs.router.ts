import {Router} from "express";
import {blogsRepository} from "../repositories/blogs.repository";
import { getBlogByIdHandler} from "./handlers/get-blog.handler";
import {idValidation} from "../../core/middlewares/validation/params-id.validation-middleware";
import {inputValidationResultMiddleware} from "../../core/middlewares/validation/input-validation-result.middleware";
import {getBlogsListHandler} from "./handlers/get-blogs-list.handler";
import {updateBlogHandler} from "./handlers/update-blog.handler";
import {createBlogHandler} from "./handlers/create-blog.handler";
import {blogInputDtoValidation} from "../validation/blog.input-dto.validation-middleware";
import {deleteBlogHandler} from "./handlers/delete-blog.handler";
import {superAdminGuardMiddleware} from "../../auth/middlewares/super-admin.guard-middleware";

export const blogsRouter = Router({})

blogsRouter.use(superAdminGuardMiddleware)

blogsRouter.get('/', getBlogsListHandler)
    .get('/:id', idValidation, inputValidationResultMiddleware, getBlogByIdHandler)
    .post('/', blogInputDtoValidation, inputValidationResultMiddleware, createBlogHandler )
    .put('/:id', idValidation, inputValidationResultMiddleware, updateBlogHandler)
    .delete('/:id', idValidation, inputValidationResultMiddleware, deleteBlogHandler)