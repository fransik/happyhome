// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  res.status(err.statusCode || 500).json({
    name: err.name || 'Error',
    message: err.message || 'Internal Server Error',
    details: err.details || []
  });
}

class ValidationError extends Error {
  constructor(details) {
    super('One or more errors occurred while validating your request');
    this.name = 'ValidationError';
    this.statusCode = 400;
    this.details = details;
  }
}

class AlreadyExistsError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AlreadyExistsError';
    this.statusCode = 409;
  }
}

module.exports = { errorHandler, ValidationError, AlreadyExistsError };
