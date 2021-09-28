import { check } from 'express-validator';

export const validateRequestPasswordReset = [
  check('email').notEmpty().withMessage('Please enter your email')
  .isEmail().withMessage('Your email address must be of a valid format')
  .trim().escape().normalizeEmail()
];
    