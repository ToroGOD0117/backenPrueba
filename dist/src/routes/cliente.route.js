"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// path/api/v1/clientes
const express_1 = require("express");
const cliente_controller_1 = require("../controllers/cliente.controller");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middleware/validate-fields");
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "el email es obligatorio").not().isEmpty().isEmail(),
    validate_fields_1.validateFields
], cliente_controller_1.crearClientes);
router.get("/", cliente_controller_1.getClientes);
router.get("/:id", cliente_controller_1.getUnCliente);
router.put("/:id", cliente_controller_1.updateCliente);
router.delete("/:id", cliente_controller_1.deleteCliente);
router.put(":id", cliente_controller_1.actualizarEstadoF);
exports.default = router;
//# sourceMappingURL=cliente.route.js.map