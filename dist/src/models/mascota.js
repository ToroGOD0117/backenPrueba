"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mascotaSchema = new mongoose_1.Schema({
    numeroDocumentoUsuario: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    raza: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    numeroDocumentMascota: {
        type: String,
    }
});
const MascotaModel = (0, mongoose_1.model)("mascota", mascotaSchema);
exports.default = MascotaModel;
//# sourceMappingURL=mascota.js.map