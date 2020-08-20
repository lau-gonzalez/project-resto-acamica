const jwt = require("jsonwebtoken");
const password = process.env.SECRET_TOKEN;

function generateToken(info) {
    const token = jwt.sign(info, password);
    return token;
}

function validateTokenJWT(token) {
    try {
        const decoded = jwt.verify(token, password);
        return decoded;
    } catch (error) {
        return false;
    }
}

module.exports = { generateToken, validateTokenJWT }