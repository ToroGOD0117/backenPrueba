// path/api/v1/usuario
import  { Router } from "express";
import { crearUsuario, getUnUsuario, updateUsuario, actEstadoF,agregarMascota, getUsuarios } from "../controllers/usuario.controler";
import { check } from "express-validator";
import { validateFields } from "../middleware/validate-fields";
import validateJWT from "../middleware/validate-jwt";

const router = Router();
//Crear Usuarios
router.post("/",validateJWT,[
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "el email es obligatorio"). not().isEmpty().isEmail(),
    check("tipoDocumento", "el documento es obligatorio").not(). isEmpty(),
    check("telefono", "el telefono es obligatorio"). not().isEmpty(),
    check("login", "el login es obligatorio"). not().isEmpty(),
    check("numeroDocumento", "el numero de documento es obligatorio").not().isEmpty(),
    check("password", "el numero de documento es obligatorio").not().isEmpty(),
    validateFields
] ,crearUsuario);

//Buscar Usuarios
router.get("/Usuarios",getUsuarios);

//Buscar un solo usuario
router.get("/:numeroDocumento",validateJWT,getUnUsuario);

//Actualizar Usuarios
router.put("/:numeroDocumento",validateJWT,updateUsuario);

//Actualizar el estado a false o inactivo de un usuario
 router.put("/estadoF/:numeroDocumento",validateJWT,actEstadoF);
 
export default router; 