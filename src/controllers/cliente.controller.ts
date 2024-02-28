import { Request, Response } from "express";
import ClienteModel from "../models/cliente";

export const crearClientes = async (req: Request, res: Response)=>{
const {body}=req;
try {
    console.log(req);
    console.log(body);
    const clienteNuevo= await ClienteModel.create();

    res.status(200).json({
        ok: true,
        msg: "Cliente Creado",
        cliente: clienteNuevo
    });
}catch (error){
    console.log(error);
    res.status(400).json({
        ok:false,
        msg:"error al crear el cliente"
    });
}

};