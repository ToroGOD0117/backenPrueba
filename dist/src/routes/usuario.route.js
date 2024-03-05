"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// path/api/v1/clientes
const express_1 = require("express");
const usuario_controler_1 = require("../controllers/usuario.controler");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middleware/validate-fields");
const router = (0, express_1.Router)();
router.post("/", [
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "el email es obligatorio").not().isEmpty().isEmail(),
    validate_fields_1.validateFields
], usuario_controler_1.crearUsuario);
// router.get("/", getClientes);
// router.get("/:id",getUnCliente);
// router.put("/:id",updateCliente);
// router.delete("/:id",deleteCliente);
// router.put(":id",actualizarEstadoF)
exports.default = router;
//# sourceMappingURL=usuario.route.js.map