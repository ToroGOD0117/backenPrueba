import { Request, Response } from "express";
import UsuarioModel from "../models/usuario";
import bcrypt from  "bcryptjs" 
import generarJWT from "../helpers/jwt";
import { CustomRequest } from "../middleware/validate-fields";

export const login = async (req: Request, res: Response)=> {

    const {login, password}=req.body;

    try {
        //verficiar login   
        const usuario = await UsuarioModel.findOne({login:login});

        if(!usuario){
            return res.status(404).json({
                ok:false,
                msg: "credeciales no validas"
            })
        }
      
//verficar password
const  validarPassword = bcrypt.compareSync(password, usuario.password)
if (!validarPassword){
    return res.status(401).json({
        ok: false,
        msg: "las credenciales no validas"
    })
}
//genrar token 
const token = await generarJWT(usuario._id, usuario.login);

res.status(200).json({
    ok:true,
    usuario: usuario,
    token
})
    } catch (error) {
        res.status(400).json({
            ok: false,
            error,
            msg: "hable con el administrador"
        })
    };

}
export const renewToken = async (req: CustomRequest, res: Response) => {
    const id = req._id;
    
    if (typeof id === "undefined") {
      throw new Error("No existe un id");
    }
  
    try {
      const usuario = await UsuarioModel.findById(id);
  
      // Generar el Token
      const token = await generarJWT(id.toString());
  
      res.json({
        ok: true,
        token,
        usuario,
      });
    } catch (error) {
      console.error(error);
      res.status(401).json({
        ok: false,
        msg: "hable con el administrador",
      });
    }
  };