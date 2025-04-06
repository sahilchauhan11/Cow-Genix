const jwt = require("jsonwebtoken");

const userMiddleware = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }
console.log(token);
console.log("JWT Secret:", process.env.JWT_SECRET);

        const data = await jwt.verify(token, process.env.JWT_SECRET || "jwtsecret");
        console.log("data->",data)
        req.user = { id: data.id }; // Attach user ID to request
        
        next(); // Proceed to the next middleware
    } catch (error) {
        return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
    }
};

module.exports = { userMiddleware };
