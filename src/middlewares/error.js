export function errorHandler (err, req, res, next) {
    const statusCode = err.statusCode || 500;
    res.status(statusCode);
    res.json({
        success: false,
        message: err.message 
    });
}