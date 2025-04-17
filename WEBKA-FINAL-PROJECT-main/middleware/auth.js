const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Check if the token exists in the session
    if (req.session && req.session.token) {
        try {
            const secret = process.env.JWT_SECRET || 'default_secret_key';
            const decoded = jwt.verify(req.session.token, secret); // Use the same JWT secret
            console.log("JWT Token Verified from session:", decoded);
            req.user = decoded;
            return next();
        } catch (err) {
            console.log("Invalid JWT Token in session", err);
        }
    }
    
    // Fallback to checking the Authorization header
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Нет токена, доступ запрещен' });
    }
    try {
        const secret = process.env.JWT_SECRET || 'default_secret_key';
        const decoded = jwt.verify(token.replace('Bearer ', ''), secret);
        console.log("JWT Token Verified from header:", decoded);
        req.user = decoded;
        next();
    } catch (error) {
        console.log("Invalid JWT Token in header", error);
        res.status(401).json({ message: 'Неверный токен' });
    }
};
