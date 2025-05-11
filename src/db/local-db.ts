import {BlogViewModel} from "../blogs/types/blog";
import {PostViewModel} from "../posts/types/post";


export const localDb = {
    blogs: <BlogViewModel[]> [
        {
            id: 1,
            name: 'We are doomed',
            description: 'The best useless podcast about IT',
            websiteUrl: 'https://www.youtube.com/watch?v=2X6v1g0x4nM'
        },
        {
            id: 2,
            name: 'It-beard',
            description: 'Geeky content about IT, technology and science',
            websiteUrl: 'https://www.youtube.com/watch?v=2X6v1g0x4nM'
        },
        {
            id: 3,
            name: 'It-Kamasutra',
            description: 'Channel about JavaScript programming',
            websiteUrl: 't.me/itkamasutra'
        },
        {
            id: 4,
            name: 'It-incubator',
            description: 'Frontend and backend programming courses',
            websiteUrl: 'https://www.youtube.com/watch?v=2X6v1g0x4nM'
        }
    ],
    posts: <PostViewModel[]> [
        {
            id: 1,
            title: 'We are doomed',
            shortDescription: 'The best useless podcast about IT',
            content: 'The best useless podcast about IT',
            blogId: 1,
            blogName: 'We are doomed'
        },
        {
            id: 2,
            title: 'It-beard',
            shortDescription: 'Geeky content about IT, technology and science',
            content: 'Geeky content about IT, technology and science',
            blogId: 2,
            blogName: 'It-beard'
        },
        {
            id: 3,
            title: 'It-Kamasutra',
            shortDescription: 'Channel about JavaScript programming',
            content: 'Channel about JavaScript programming',
            blogId: 3,
            blogName: 'It-Kamasutra'
        },
        {
            id: 4,
            title: 'It-incubator',
            shortDescription: 'Frontend and backend programming courses',
            content: 'Frontend and backend programming courses',
            blogId: 4,
            blogName: 'It-incubator'
        },
        {
            id: 5,
            title: 'It-beard',
            shortDescription: 'Geeky content about IT, technology and science',
            content: 'Geeky content about IT, technology and science',
            blogId: 2,
            blogName: 'It-beard'
        },
        {
            id: 6,
            title: 'It-Kamasutra',
            shortDescription: 'Channel about JavaScript programming',
            content: 'Channel about JavaScript programming',
            blogId: 3,
            blogName: 'It-Kamasutra'
        },
    ]
}