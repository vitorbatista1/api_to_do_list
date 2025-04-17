const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error('Token não fornecido!');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new Error('Token inválido!');
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ error: error.message || 'Requisição não autorizada' });
  }
};
