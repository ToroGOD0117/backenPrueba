"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const generarJWT = (_id, login = "", expiresIn = "6h", jwtSecret = "toro") => {
    return new Promise((resolve, reject) => {
        const payload = { _id, login };
        jwt.sign(payload, jwtSecret, { expiresIn: expiresIn }, (error, token) => {
            if (error) {
                console.log(error);
                reject("No se pudo generar el token");
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.default = generarJWT;
//# sourceMappingURL=jwt.js.map