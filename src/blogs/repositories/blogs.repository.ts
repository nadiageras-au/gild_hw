import {BlogInputModel, BlogViewModel} from "../types/blog";
import {localDb} from "../../db/local-db";
import {param} from "express-validator";

export const blogsRepository = {
    getAllBlogs(): BlogViewModel[] {
        return localDb.blogs
    },

    getBlogById(id: string): BlogViewModel | null {
        return  localDb.blogs.find(b => String(b.id) === id ) ?? null

    },

    createBlog(newBlog: BlogViewModel): BlogViewModel {
        localDb.blogs.push(newBlog)
        return newBlog
    },

    updateBlog(id: string, updatedBlog: BlogInputModel): void {
        const blog = localDb.blogs.find(b => String(b.id) === id)
        if (!blog) {
            throw new Error('Blog is not exist');
        }

        blog.name = updatedBlog.name;
        blog.description = updatedBlog.description;
        blog.websiteUrl = updatedBlog.websiteUrl;

        return;
    },

    deleteBlog(id: string): void {
        const index = localDb.blogs.findIndex(b => String(b.id) === id)
        if (index === -1) {
            throw new Error('Blog is not exist');
        }
        localDb.blogs.splice(index, 1);
        return;
    },

}