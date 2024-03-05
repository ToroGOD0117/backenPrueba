"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UsuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: true
    },
    tipoDocumento: {
        type: String,
        require: true,
    },
    numeroDocumento: {
        type: String,
        require: true,
        unique: true
    },
    login: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    rol: {
        type: Boolean,
        require: true,
        default: "admin"
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    estado: {
        type: Boolean,
        require: true,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
const UsuarioModel = (0, mongoose_1.model)("usuario", UsuarioSchema);
exports.default = UsuarioModel;
//# sourceMappingURL=usuario.js.map