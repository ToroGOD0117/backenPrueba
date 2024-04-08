import  { Router } from "express";
import { agregarMascota, getMascotasPorUsuario } from "../controllers/mascota.controler";
import validateJWT from "../middleware/validate-jwt";
import { validateFields } from "../middleware/validate-fields";
import { check } from "express-validator";


const router = Router();

router.post("/crearMascota",validateJWT,[
    check("nombre", "El nombre de la mascota es obligatorio").not().isEmpty(),
    check("especie", "La especie de la mascota es obligatoria").not().isEmpty(),
    check("raza", "La raza de la mascota es obligatoria").not().isEmpty(),
    validateFields

],agregarMascota);

router.get("/getMascota",getMascotasPorUsuario);

export default router;