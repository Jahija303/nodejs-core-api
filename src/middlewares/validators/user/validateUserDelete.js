import { check } from 'express-validator';

export const validateUserDelete = [
    check('id', 'Please provide a valid user ID').trim().isNumeric().escape()
];