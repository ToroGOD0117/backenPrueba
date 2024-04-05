"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mascota_controler_1 = require("../controllers/mascota.controler");
const validate_fields_1 = require("../middleware/validate-fields");
const express_validator_1 = require("express-validator");
const router = (0, express_1.Router)();
router.post("/crearMascota", [
    (0, express_validator_1.check)("nombre", "El nombre de la mascota es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("especie", "La especie de la mascota es obligatoria").not().isEmpty(),
    (0, express_validator_1.check)("raza", "La raza de la mascota es obligatoria").not().isEmpty(),
    validate_fields_1.validateFields
], mascota_controler_1.agregarMascota);
exports.default = router;
//# sourceMappingURL=mascota.route.js.map