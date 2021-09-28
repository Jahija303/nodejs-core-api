import { check } from 'express-validator';

export const validateUserUpdate = [
    check('firstName').optional().isAlpha().withMessage('First name must contain only uppercase and lowercase letters')
    .isLength({ min: 3 }).withMessage('First name must be at least 3 characters long')
    .trim().escape(),
    check('lastName').optional().isAlpha().withMessage('Last name must contain only uppercase and lowercase letters')
    .isLength({ min: 3 }).withMessage('First name must be at least 3 characters long')
    .trim().escape(),
    check('email').optional().isEmail().withMessage('Your email address must be of a valid format')
    .trim().escape().normalizeEmail(),
    check('password').optional().isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches('[0-9]').withMessage('Password must contain a number')
    .matches('[A-Z]').withMessage('Password must contain an uppercase letter')
    .trim().escape()
];