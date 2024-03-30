// path/api/v1/auth
import  { Router } from "express";
import { login, renewToken } from "../controllers/auth.controller";
import { check } from "express-validator";
import { validateFields } from "../middleware/validate-fields";
import validateJWT from "../middleware/validate-jwt";

const router = Router();

router.post("/",[




] ,login);
router.get("/", validateJWT, renewToken);
// router.get("/", getClientes);
// router.get("/:id",getUnCliente);
// router.put("/:id",updateCliente);
// router.delete("/:id",deleteCliente);
// router.put(":id",actualizarEstadoF)
export default router; 