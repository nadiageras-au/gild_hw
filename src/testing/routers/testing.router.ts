import { Router, Request, Response } from 'express';

import { HttpStatus } from '../../core/types/http-statuses';
import {localDb} from "../../db/local-db";

export const testingRouter = Router({});

testingRouter.delete('/all-data', (req: Request, res: Response) => {
   localDb.blogs = [];
    res.sendStatus(HttpStatus.NoContent);
});