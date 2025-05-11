import {Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/utils/error.utils";
import {localDb} from "../../../db/local-db";

export function deleteBlogHandler(
    req: Request,
    res: Response,
) {
    const id = parseInt(req.params.id);

    const index = localDb.blogs.findIndex((v) => v.id === id);

    if (index === -1) {
        res
            .status(HttpStatus.NotFound)
            .send(
                createErrorMessages([{field: 'id', message: 'Blog not found'}]),
            );
        return;
    }

    localDb.blogs.splice(index, 1);
    res.sendStatus(HttpStatus.NoContent);
}