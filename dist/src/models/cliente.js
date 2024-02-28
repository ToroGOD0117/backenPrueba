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
        require: false
    },
    telefono: {
        type: Number,
        require: false
    },
    email: {},
    estado: {
        type: Boolean,
        require: true,
        default: true
    },
    createDate: {
        type: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    }
});
const ClienteModel = (0, mongoose_1.model)("Cliente", ClienteSchema);
exports.default = ClienteModel;
//# sourceMappingURL=cliente.js.map