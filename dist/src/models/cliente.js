"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ClienteSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true,
    },
    telefono: {
        type: Number,
        require: true,
    },
    tipoDocumento: {
        type: String,
        require: true,
    },
    numeroDocumento: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    estado: {
        type: Boolean,
        require: true,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});
const ClienteModel = (0, mongoose_1.model)("Cliente", ClienteSchema);
exports.default = ClienteModel;
//# sourceMappingURL=cliente.js.map