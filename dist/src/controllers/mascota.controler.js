"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agregarObservacion = exports.agregarMascota = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const agregarMascota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numeroDocumento } = req.params;
    const { body } = req;
    try {
        // Buscar al usuario por su número de documento
        const usuario = yield usuario_1.default.findOne({ numeroDocumento });
        if (!usuario) {
            return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
        }
        // Generar un número de documento único para la nueva mascota
        const numeroDocumentoMascota = `${numeroDocumento}-${usuario.mascotas.length + 1}`;
        // Crear la nueva mascota
        const nuevaMascota = Object.assign(Object.assign({}, body), { numeroDocumentoMascota: numeroDocumentoMascota });
        usuario.mascotas.push(nuevaMascota);
        yield usuario.save();
        res.status(201).json({ ok: true, msg: 'Mascota creada correctamente', mascota: nuevaMascota });
    }
    catch (error) {
        console.error('Error al agregar la mascota:', error);
        res.status(500).json({ ok: false, msg: 'Error al agregar la mascota' });
    }
});
exports.agregarMascota = agregarMascota;
const agregarObservacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numeroDocumentoMascota } = req.params;
    const { body } = req;
    try {
        const mascota = yield usuario_1.default.findOne({ numeroDocumentoMascota });
    }
    catch (error) {
    }
});
exports.agregarObservacion = agregarObservacion;
//# sourceMappingURL=mascota.controler.js.map