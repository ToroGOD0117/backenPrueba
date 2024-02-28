import  { Router } from "express";
import { crearClientes } from "../controllers/cliente.controller";

const router = Router();

router.post("/", crearClientes);

export default router; 