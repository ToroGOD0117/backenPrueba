import  { Router } from "express";
import { agregarMascota } from "../controllers/usuario.controler";
import validateJWT from "../middleware/validate-jwt";
import { validateFields } from "../middleware/validate-fields";
import { check } from "express-validator";
import { agregarObservacion, obtenerObservaciones} from "../controllers/mascota.controler";


const router = Router();

router.post("/mascotas/:numeroDocumento",validateJWT,[
    check("nombre", "El nombre de la mascota es obligatorio").not().isEmpty(),
    check("especie", "La especie de la mascota es obligatoria").not().isEmpty(),
    check("raza", "La raza de la mascota es obligatoria").not().isEmpty(),
    validateFields

],agregarMascota);

//Crear observaciones
router.post("/usuarios/:numeroDocumento/mascotas/:numeroDocumentoMascota/observaciones", validateJWT, agregarObservacion);

//Obtener observaciones de la mascotas
router.get('/usuario/:numeroDocumento/mascotas/:numeroDocumentoMascota/observaciones', obtenerObservaciones);

export default router;