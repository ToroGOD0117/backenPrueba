"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// path/api/v1/auth
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const validate_jwt_1 = __importDefault(require("../middleware/validate-jwt"));
const router = (0, express_1.Router)();
router.post("/", [], auth_controller_1.login);
router.get("/", validate_jwt_1.default, auth_controller_1.renewToken);
// router.get("/", getClientes);
// router.get("/:id",getUnCliente);
// router.put("/:id",updateCliente);
// router.delete("/:id",deleteCliente);
// router.put(":id",actualizarEstadoF)
exports.default = router;
//# sourceMappingURL=auth.route.js.map