import { check } from 'express-validator';

export const validatePasswordReset = [ 
    check('password').exists().withMessage('Please enter your password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches('[0-9]').withMessage('Password must contain a number')
    .matches('[A-Z]').withMessage('Password must contain an uppercase letter')
    .custom((value,{req, loc, path}) => {
        if (value !== req.body.confirmPassword) {
            throw new Error("Passwords don't match");
        } else {
            return value;
        }
    })
    .trim().escape(),
    check('confirmPassword').exists().withMessage('Please enter your password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long')
    .matches('[0-9]').withMessage('Password must contain a number')
    .matches('[A-Z]').withMessage('Password must contain an uppercase letter')
    .trim().escape()
];
    
