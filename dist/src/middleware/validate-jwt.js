"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const validateJWT = (req, res, next) => {
    const token = req.header("x-token");
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: "no hay toquen en la peticion",
        });
    }
    try {
        const { _id } = jwt.verify(token, "toro");
        req._id = _id;
        next();
    }
    catch (error) {
        return res.status(404).json({
            ok: false,
            msg: "token invalido"
        });
    }
};
exports.default = validateJWT;
//# sourceMappingURL=validate-jwt.js.map