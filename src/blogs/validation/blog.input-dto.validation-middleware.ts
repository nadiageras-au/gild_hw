import {body} from "express-validator";


const nameValidation = body('name')
.isString()
.withMessage('Name should be a string')
.trim()
.withMessage('It is mandatory field')
.isLength({min: 1, max: 15})
.withMessage('Name should be from 1 to 15 symbols')


const descriptionValidation = body('description')
.isString()
.withMessage('Description should be a string')
.trim()
.isLength({min: 1, max: 500})
.withMessage('Description should be from 1 to 500 symbols')


const websiteUrlValidation = body('websiteUrl')
.isString()
.withMessage('WebsiteUrl should be a string')
.trim()
.isLength({min: 1, max: 100})
.withMessage('WebsiteUrl should be from 1 to 100 symbols')

export const blogInputDtoValidation = [
    nameValidation,
    descriptionValidation,
    websiteUrlValidation
]