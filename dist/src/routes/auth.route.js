"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// path/api/v1/auth
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const router = (0, express_1.Router)();
router.post("/", [], auth_controller_1.login);
// router.get("/", getClientes);
// router.get("/:id",getUnCliente);
// router.put("/:id",updateCliente);
// router.delete("/:id",deleteCliente);
// router.put(":id",actualizarEstadoF)
exports.default = router;
//# sourceMappingURL=auth.route.js.map