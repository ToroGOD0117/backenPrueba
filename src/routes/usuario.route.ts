// path/api/v1/usuario
import  { Router } from "express";
import { crearUsuario, getUnUsuario, updateUsuario, actEstadoF } from "../controllers/usuario.controler";
import { check } from "express-validator";
import { validateFields } from "../middleware/validate-fields";
import validateJWT from "../middleware/validate-jwt";

const router = Router();

router.post("/",validateJWT,[

    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "el email es obligatorio"). not().isEmpty().isEmail(),
    validateFields




] ,crearUsuario);
router.get("/:numeroDocumento",getUnUsuario)
// router.get("/", validateJWT, getClientes);
// router.get("/:id",validateJWT,getUnCliente);
router.put("/:numeroDocumentos",validateJWT,updateUsuario);
// router.delete("/:id",validateJWT,deleteCliente);
 router.put("/estadoF/:numeroDocumento",actEstadoF)
export default router; 