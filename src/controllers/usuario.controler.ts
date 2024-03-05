import { Request, Response } from "express";
import UsuarioModel from "../models/usuario";
import bcrypt from  "bcryptjs" 

export const crearUsuario = async (req: Request, res: Response)=>{
        const {body} = req;
        //el login puede cambiarse como username, email o numero de documento 
        const {login,password} = body;
    
    try {
        const exiteLogin = await UsuarioModel.findOne({
            login:login,

        });
        if (exiteLogin){
            return res.status(409).json({
                ok : false,
                msg: `Ya existe el login ${login} creado`
            })
        }

        const nuevoUsuario =  new UsuarioModel({
            ...body,
        });
        const salt = bcrypt.genSaltSync(10); 
        nuevoUsuario.password = bcrypt.hashSync(password,salt);

        const usuarioCreado = await nuevoUsuario.save();
            
        res.status(200).json({
            ok : true,
            msg: "usuario creado"
        });
    
    } catch (error) {
        res.status(400).json({
        ok: false,
        error: "error al crear el usuo"
            
    });
    }
}