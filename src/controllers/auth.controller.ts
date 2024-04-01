import { Request, Response } from "express";
import UsuarioModel from "../models/usuario";
import bcrypt from  "bcryptjs" 
import generarJWT from "../helpers/jwt";
import { CustomRequest } from "../middleware/validate-jwt";

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
const token = await generarJWT(usuario.id, usuario.login);

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
//renovar token
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
        msg: "hable con el ",
      });
    }
  };

  //olvido contraseña
  export const olvidoContrasena = async (req: CustomRequest, res: Response) => {
    const { login, numeroDocumento } = req.body;
  
    try {
      const existeUsuario = await UsuarioModel.findOne({
        login,
        numeroDocumento,
      });
  
      if (!existeUsuario) {
        res.status(400).json({
          ok: false,
          msg: "No coinciden sus credenciales",
        });
      }
  
      const id = existeUsuario?._id.toString();
  
      if (id) {
        // Generar Token
        const token = await generarJWT(
          id,
          login,
          "1H",
          process.env.JWT_SECRET_PASS
        );
  
        res.status(200).json({
          ok: true,
          msg: "Proceso éxito",
          usuario: existeUsuario,
          token,
        });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({
        ok: false,
        msg: "No se logró validar su acceso con éxito, por favor comuniquese con el administrador",
      });
    }
  };
  
  export const cambioContrasena = async (req: CustomRequest, res: Response) => {
    const id = req._id;
    const { password } = req.body;
  
    try {
      if (!password) {
        res.status(400).json({
          ok: false,
          msg: "Por favor dígite una contraseña válida",
        });
      }
  
      const newPassword = bcrypt.hashSync(password, 10);
  
      const actualizarPassword = await UsuarioModel.findByIdAndUpdate({
        _id: id,
        password: newPassword,
      });
  
      if (!actualizarPassword) {
        res.status(400).json({
          ok: false,
          msg: "Error al actualizar la contraseña",
        });
      }
  
      res.status(200).json({
        ok: true,
        msg: "Contraseña actualizada",
        usuario: actualizarPassword,
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({
        ok: false,
        msg: "Error al actualizar la contraseña, hable con el administrador",
      });
    }
  };