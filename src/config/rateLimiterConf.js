import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    delayMs: 0, // disable delaying - user has full speed until the max limit is reached
    message: {
      success: false,
      message: 'Too many requests, please try again later'
    }
});

export const passwordResetLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 100 requests per windowMs
    delayMs: 0, // disable delaying - user has full speed until the max limit is reached
    message: {
      success: false,
      message: 'Too many requests, please try again later'
    }
});
