function errorHandler(err, req, res, next) {
    console.error(err.stack);
  
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        error: 'Validation Error',
        details: err.details || err.message
      });
    }
  
    if (err.name === 'MongoError') {
      if (err.code === 11000) {
        return res.status(409).json({
          error: 'Duplicate Key Error',
          message: 'This record already exists'
        });
      }
      return res.status(500).json({
        error: 'Database Error',
        message: 'An unexpected database error occurred'
      });
    }
  
    if (err.name === 'UnauthorizedError') {
      return res.status(401).json({
        error: 'Authentication Failed',
        message: err.message || 'Invalid or expired token'
      });
    }
  
    if (err.statusCode) {
      return res.status(err.statusCode).json({
        error: err.name || 'Error',
        message: err.message
      });
    }
  
    res.status(500).json({
      error: 'Internal Server Error',
      message: 'Something went wrong'
    });
  }
  
  module.exports = errorHandler;