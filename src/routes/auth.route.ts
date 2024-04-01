// path/api/v1/auth
import  { Router } from "express";
import { cambioContrasena, login, olvidoContrasena, renewToken } from "../controllers/auth.controller";
import { check } from "express-validator";
import { validateFields } from "../middleware/validate-fields";
import validateJWT, { validateJWTPass } from "../middleware/validate-jwt";

const router = Router();

router.post("/",[




] ,login);

router.put(
    "/cambiocontrasena",
    validateJWTPass,
    [
      check("password", "El password es obligatorio").not().isEmpty(),
      validateFields,
    ],
    cambioContrasena
  );
router.post(
    "/olvidocontrasena",
    [
      check("login", "El login es obligatorio").not().isEmpty(),
      check("numeroDocumento", "El password es obligatorio").not().isEmpty(),
      validateFields,
    ],
    olvidoContrasena
  );

  router.get("/", validateJWT, renewToken);
  
export default router; 