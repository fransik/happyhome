// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    delete err.stack;
  }

  res.status(err.statusCode || 500).json({
    message: err.message || 'Internal Server Error',
    error: err
  });
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
  }
}

module.exports = { errorHandler, ValidationError };
