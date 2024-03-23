"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// path/api/v1/usuario
const express_1 = require("express");
const usuario_controler_1 = require("../controllers/usuario.controler");
const express_validator_1 = require("express-validator");
const validate_fields_1 = require("../middleware/validate-fields");
const validate_jwt_1 = __importDefault(require("../middleware/validate-jwt"));
const router = (0, express_1.Router)();
router.post("/", validate_jwt_1.default, [
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "el email es obligatorio").not().isEmpty().isEmail(),
    validate_fields_1.validateFields
], usuario_controler_1.crearUsuario);
router.get("/:numeroDocumento", usuario_controler_1.getUnUsuario);
// router.get("/", validateJWT, getClientes);
// router.get("/:id",validateJWT,getUnCliente);
router.put("/:numeroDocumentos", validate_jwt_1.default, usuario_controler_1.updateUsuario);
// router.delete("/:id",validateJWT,deleteCliente);
router.put("/estadoF/:numeroDocumento", usuario_controler_1.actEstadoF);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map