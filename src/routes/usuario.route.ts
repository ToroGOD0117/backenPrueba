// path/api/v1/clientes
import  { Router } from "express";
import { crearUsuario } from "../controllers/usuario.controler";
import { check } from "express-validator";
import { validateFields } from "../middleware/validate-fields";

const router = Router();

router.post("/",[

    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("email", "el email es obligatorio"). not().isEmpty().isEmail(),
    validateFields




] ,crearUsuario);
// router.get("/", getClientes);
// router.get("/:id",getUnCliente);
// router.put("/:id",updateCliente);
// router.delete("/:id",deleteCliente);
// router.put(":id",actualizarEstadoF)
export default router; 