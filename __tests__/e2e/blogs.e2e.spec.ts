import request from 'supertest';
import express from 'express';
import {setupApp} from "../../src/setup-app";
import {clearDb} from "../utils/clear-db";
import {generateBasicAuthToken} from "../utils/generate-admin-auth-token";
import {BlogInputModel} from "../../src/blogs/types/blog";
import {getBlogDto} from "../utils/blogs/get-blog-dto";
import {TESTING_PATH} from "../../src/core/paths/paths";



describe('Blogs E2E Tests', () => {

    const app = express();
    setupApp(app);

    const adminToken = generateBasicAuthToken();

    beforeAll(async () => {
        await clearDb(app);
    })


    it('✅ should create blog record; POST /api/blogs', async () => {
        const newBlog: BlogInputModel = {
            ...getBlogDto(),
            name: 'JavaScript.Ninja',
            description: 'JavaScript ninja practice',
            websiteUrl: 'patreon.com/javascriptninja',
        };

        // const response = await request(app)
        //     .post('/api/blogs')
        //     .set('Authorization', `Basic ${adminToken}`)
        //     .send(newBlog)
        //     .expect(201);
    });


});