"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = require("../controllers/producto.controller");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middleware/validate-fields");
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "el email es obligatorio").not().isEmpty().isEmail(),
    validate_fields_1.validateFields
], producto_controller_1.crearProducto);
exports.default = router;
//# sourceMappingURL=producto.route.js.map