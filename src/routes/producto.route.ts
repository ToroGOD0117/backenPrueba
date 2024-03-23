import  { Router } from "express";
import {  crearProducto  } from "../controllers/producto.controller";
import { check } from "express-validator";
import { validateFields } from "../middleware/validate-fields";

const router = Router();

router.post("/",[

    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "el email es obligatorio"). not().isEmpty().isEmail(),
    validateFields




] ,crearProducto);

export default router;