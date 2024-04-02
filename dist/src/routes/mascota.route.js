"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_controler_1 = require("../controllers/usuario.controler");
const validate_jwt_1 = __importDefault(require("../middleware/validate-jwt"));
const mascota_controler_1 = require("../controllers/mascota.controler");
const router = (0, express_1.Router)();
router.post("/mascotas/:numeroDocumento", validate_jwt_1.default, usuario_controler_1.agregarMascota);
router.post("/usuarios/:numeroDocumento/mascotas/:numeroDocumentoMascota/observaciones", validate_jwt_1.default, mascota_controler_1.agregarObservacion);
exports.default = router;
//# sourceMappingURL=mascota.route.js.map