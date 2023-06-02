module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500; // default to 500
    err.status = err.status || 'error'; // default to error

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
}