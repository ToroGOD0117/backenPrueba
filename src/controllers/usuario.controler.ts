import { Request, Response } from "express";
import UsuarioModel from "../models/usuario";
import bcrypt from  "bcryptjs" 



// Crear mascota

//crear usuario
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
            msg: "usuario creado",
            usuarioCreado
        });
    
    } catch (error) {
        console.error("Error al crear el usuario:", error);
    res.status(400).json({
        ok: false,
        error: "Error al crear el usuario",
    });
    }
}

export const getUsuarios = async (req: Request, res: Response) => {
    try {
      const usuarios = await UsuarioModel.find();
      res.json({
        ok: true,
        usuarios,
      });
    } catch (error) {
      res.status(400).json({
        ok: false,
        msg: `Error consultar los usuarios`,
      });
    }
  };


export const getUnUsuario = async (req: Request, res: Response)=>{
    try{
        const numeroDocumento = req.params.numeroDocumento;
        //el busca todos los clientes
        const usuarios = await UsuarioModel.findOne({numeroDocumento: numeroDocumento});
        console.log(numeroDocumento)


        res.json({
            ok: true,
            clientes: usuarios,
        }); 
    }catch(error){
        res.status(400).json({
            ok:false,
            msg: `error al consultar el cliente ${error}`
        });
    }
    };

export const updateUsuario =async (req: Request, res: Response)=>{
try{
const numeroDocumento = req.params.numeroDocumento;

const {body} = req; 

const usuarioActualizado = await UsuarioModel.findByIdAndUpdate(numeroDocumento, body, {new: true});
res.json({
    ok:true,
    usuarios:usuarioActualizado,
})
}catch(error){
    res.status(400).json({
    ok:false,
    msg: "error al actualizar"
    });
}

};

export const  actEstadoF = async (req: Request, res: Response)=>{
    try{
       
        const numeroDocumento = req.params.numeroDocumento;
        const {body}= req;
        const estadoF = await UsuarioModel.findOneAndUpdate({numeroDocumento:numeroDocumento}, {estado:false}, {new: true});
        res.json({
            ok: true,
            estado: estadoF,
        })
        
    }catch(error){
        res.status(400).json({
            ok:false,
            msg: "error al actualizar el estado" 
            });

    }

};
// export const  actualizarEstadoF = async (req: Request, res: Response)=>{
//     try{
       
//         const id = req.params.id;
//         const {body}= req;
//         const estadoActualizado = await ClienteModel.findByIdAndUpdate(id, {estado:false}, {new: true});
//         res.json({
//             ok: true,
//             clientes: estadoActualizado
//         })

//     }catch(error){
//         res.status(400).json({
//             ok:false,
//             msg: "error al actualizar el estado" 
//             });

//     }

// }


// export const getClientes = async (req: Request, res: Response)=>{
// try{
//     //el busca todos los clientes
//     const clientes = await ClienteModel.find();
//     res.json({
//         ok: true,
//         clientes,
//     }); 
// }catch(error){
//     res.status(400).json({
//         ok:false,
//         msg: `error al consultar clientes cliente ${error}`
//     });
// }
// };


// export const updateCliente =async (req: Request, res: Response)=>{
// try{
// const id = req.params.id;

// const {body} = req; 

// const clienteActualizado = await ClienteModel.findByIdAndUpdate(id, body, {new: true});
// res.json({
//     ok:true,
//     clientes:clienteActualizado,
// })
// }catch(error){
//     res.status(400).json({
//     ok:false,
//     msg: "error al actualizar"
//     });
// }

// };

// export const deleteCliente = async (req: Request, res: Response)=>{
//     try{
//         const id = req.params.id;

//         const clienteEliminado = await ClienteModel.findByIdAndDelete(id);
//         res.json({
//             ok: true,
//             clientes:clienteEliminado
//         })

//     }catch(error){
//         res.status(400).json({
//         ok:false,
//         msg: "error al eliminar el cliente" 
//         });
//     }



// }

// export const  actualizarEstadoF = async (req: Request, res: Response)=>{
//     try{
       
//         const id = req.params.id;
//         const {body}= req;
//         const estadoActualizado = await ClienteModel.findByIdAndUpdate(id, {estado:false}, {new: true});
//         res.json({
//             ok: true,
//             clientes: estadoActualizado
//         })

//     }catch(error){
//         res.status(400).json({
//             ok:false,
//             msg: "error al actualizar el estado" 
//             });

//     }

// }