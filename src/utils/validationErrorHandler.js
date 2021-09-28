import { validationResult } from 'express-validator';

export async function validationErrorHandler(req, res, next) {
    const errors = validationResult(req);
	if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: errors.array()[0].msg
        });
	} else {
        next()
    }
}