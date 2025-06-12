const jwt = require("jsonwebtoken");

const vetMiddleware = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET || "jwtsecret");

        console.log(decoded); // Log for debugging (consider removing in production)

        req.vet = decoded; // Attach decoded data to request object

        next(); // Proceed to the next middleware
    } catch (error) {
        return res.status(401).json({ success: false, message: "Unauthorized: Invalid or expired token" });
    }
};

module.exports = { vetMiddleware };
