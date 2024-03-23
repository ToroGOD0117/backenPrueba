"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// path/api/v1/auth
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middleware/validate-fields");
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("login", "El login es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "el email es obligatorio").not().isEmpty().isEmail(),
    validate_fields_1.validateFields
], auth_controller_1.login);
// router.get("/", getClientes);
// router.get("/:id",getUnCliente);
// router.put("/:id",updateCliente);
// router.delete("/:id",deleteCliente);
// router.put(":id",actualizarEstadoF)
exports.default = router;
//# sourceMappingURL=auth.router.js.map