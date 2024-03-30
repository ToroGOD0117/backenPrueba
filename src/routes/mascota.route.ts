import  { Router } from "express";
import { agregarMascota } from "../controllers/usuario.controler";
import validateJWT from "../middleware/validate-jwt";


const router = Router();

router.post("/mascotas/:numeroDocumento",validateJWT,agregarMascota)

export default router;