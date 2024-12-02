const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const authenticate = (req, res, next) => {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (err) {
        res.status(403).json({ error: "Invalid or expired token" });
    }
};

module.exports = authenticate;