const AppError = require('./../utils/appError');

// 🦠 🦠
// TODO: Check that the Error is an operational error and send the appropriate response, 
// CURRENT BEHAVIOR: All errors are being sent to the client as operational errors.
// 🦠 🦠

const handleCastErrorDB = err => {
   const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
}

const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    })
}

const sendErrorProd = (err, res) => {
    // Operational, trusted error: send message to client
    // Operational errors are errors that we can predict, such as a user not found error

    if(err) {
        const errorMessage = err.errors ? Object.values(err.errors)[0].message : 'An error occurred'
        res.status(err.statusCode).json({
        status: err.status,
        message: `Error: ${errorMessage}`
        });
    } else {
        // Programming or other unknown error: don't leak error details
        // 1) Log error
        console.error('ERROR', err);

        // 2) Send generic message
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong'
        })
    }
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500; // default to 500
    err.status = err.status || 'error'; // default to error

    if(process.env.NODE_ENV === 'development') {
        sendErrorDev(err, res);
    } else if (process.env.NODE_ENV === 'production') {
        let error = {...err}; // this will create a hard copy of the err object
        if(error.name === 'CastError') error = handleCastErrorDB(error);

        sendErrorProd(error, res);
    }

}
