class AppError extends Error {
    constructor(message, statusCode) {
        super(message) // super() is the same as Error.call(this, message), it will call the parent constructor function

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'; // 400s are fails, 500s are errors
        this.isOperational = true; // this is used to determine if the error is operational or not

        Error.captureStackTrace(this, this.constructor); // this will not appear in the stack trace 
    }

}

module.exports = AppError;
