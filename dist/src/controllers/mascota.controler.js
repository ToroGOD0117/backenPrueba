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
exports.getMascotasPorUsuario = exports.agregarMascota = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const mascota_1 = __importDefault(require("../models/mascota"));
const agregarMascota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const productoNuevo = new MascotaModel({ usuario: id, ...body });
    const id = req._id;
    try {
        const { numeroDocumentoUsuario, nombre, especie, raza } = req.body;
        // Buscar al usuario por su número de documento
        const existingUser = yield usuario_1.default.findOne({ numeroDocumento: numeroDocumentoUsuario });
        if (!existingUser) {
            return res.status(404).json({ message: 'No se encontró un usuario con ese número de documento' });
        }
        // Contar cuántas mascotas tiene el usuario
        const mascotaUsuario = yield mascota_1.default.countDocuments({ numeroDocumentoUsuario });
        // Generar el número de documento único para la nueva mascota
        const numeroDocumentoMascota = `${numeroDocumentoUsuario}-${mascotaUsuario + 1}`;
        // Crear la nueva mascota
        const nuevaMascota = new mascota_1.default({
            numeroDocumentoUsuario,
            nombre,
            especie,
            raza,
            numeroDocumentoMascota,
            usuario: id
        });
        // Guardar la mascota en la base de datos
        const mascotaCreada = yield nuevaMascota.save();
        res.status(200).json({
            ok: true,
            msg: "Mascota creada",
            mascotaCreada
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: `Error al crear mascota`,
        });
    }
});
exports.agregarMascota = agregarMascota;
const getMascotasPorUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { numeroDocumentoUsuario } = req.params;
        // Buscar las mascotas del usuario por su número de documento
        const mascotas = yield mascota_1.default.find({ numeroDocumentoUsuario });
        if (mascotas.length === 0) {
            return res.status(404).json({ message: 'El usuario no tiene mascotas registradas.' });
        }
        res.status(200).json({
            ok: true,
            mascotas
        });
    }
    catch (error) {
        console.error("Error al obtener las mascotas del usuario:", error);
        res.status(400).json({
            ok: false,
            error: "Error al obtener las mascotas del usuario",
        });
    }
});
exports.getMascotasPorUsuario = getMascotasPorUsuario;
//# sourceMappingURL=mascota.controler.js.map