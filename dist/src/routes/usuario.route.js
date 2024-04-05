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
//Crear Usuarios
router.post("/", validate_jwt_1.default, [
    (0, express_validator_1.check)("nombre", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("email", "el email es obligatorio").not().isEmpty().isEmail(),
    (0, express_validator_1.check)("tipoDocumento", "el documento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("telefono", "el telefono es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("login", "el login es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("numeroDocumento", "el numero de documento es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "el numero de documento es obligatorio").not().isEmpty(),
    validate_fields_1.validateFields
], usuario_controler_1.crearUsuario);
//Buscar Usuarios
router.get("/Usuarios", usuario_controler_1.getUsuarios);
//Buscar un solo usuario
router.get("/:numeroDocumento", validate_jwt_1.default, usuario_controler_1.getUnUsuario);
//Actualizar Usuarios
router.put("/:numeroDocumento", validate_jwt_1.default, usuario_controler_1.updateUsuario);
//Actualizar el estado a false o inactivo de un usuario
router.put("/estadoF/:numeroDocumento", validate_jwt_1.default, usuario_controler_1.actEstadoF);
exports.default = router;
//# sourceMappingURL=usuario.route.js.map