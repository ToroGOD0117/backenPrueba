"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observacionesSchema = void 0;
const mongoose_1 = require("mongoose");
exports.observacionesSchema = new mongoose_1.Schema({
    fecha: { type: Date, default: Date.now() },
    descripcion: {},
    medicamentos: {}
});
const mascotaSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    especie: { type: String, required: true },
    raza: { type: String, required: true },
    numeroDocumentoMascota: { type: String },
    observaciones: [exports.observacionesSchema]
});
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
        // unique:true
    },
    rol: {
        type: String,
        require: true,
        default: "admin"
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    telefono: {
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
    },
    mascotas: [mascotaSchema]
});
const UsuarioModel = (0, mongoose_1.model)("usuario", UsuarioSchema);
exports.default = UsuarioModel;
//# sourceMappingURL=usuario.js.map