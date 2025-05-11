import {BlogInputModel} from "../../../src/blogs/types/blog";

export function getBlogDto(): BlogInputModel {
    return {
        name: 'JavaScript.Ninja',
        description: 'JavaScript ninja practice',
        websiteUrl: 'patreon.com/javascriptninja',
    };
}