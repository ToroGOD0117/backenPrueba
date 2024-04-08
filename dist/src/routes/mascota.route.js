"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mascota_controler_1 = require("../controllers/mascota.controler");
const validate_jwt_1 = __importDefault(require("../middleware/validate-jwt"));
const validate_fields_1 = require("../middleware/validate-fields");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.post("/crearMascota", validate_jwt_1.default, [
    (0, express_validator_1.check)("nombre", "El nombre de la mascota es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("especie", "La especie de la mascota es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("raza", "La raza de la mascota es obligatoria").not().isEmpty(),
    validate_fields_1.validateFields
], mascota_controler_1.agregarMascota);
router.get("/getMascota", mascota_controler_1.getMascotasPorUsuario);
exports.default = router;
//# sourceMappingURL=mascota.route.js.map