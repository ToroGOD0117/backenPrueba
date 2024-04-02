import  { Router } from "express";
import { agregarMascota } from "../controllers/usuario.controler";
import validateJWT from "../middleware/validate-jwt";
import { agregarObservacion } from "../controllers/mascota.controler";


const router = Router();

router.post("/mascotas/:numeroDocumento",validateJWT,agregarMascota)
router.post("/usuarios/:numeroDocumento/mascotas/:numeroDocumentoMascota/observaciones", validateJWT, agregarObservacion)
export default router;