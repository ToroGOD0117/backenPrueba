"use strict";
// import { Request, Response, response } from "express";
// import ClienteModel from "../models/cliente";
// export const crearClientes = async (req: Request, res: Response)=>{
// const {body}=req;
// try {
//     console.log(req);
//     console.log(body);
//     const clienteNuevo = new ClienteModel(body);
//     const clienteCreado= await clienteNuevo.save();
//     res.status(200).json({
//         ok: true,
//         msg: "Cliente Creado",
//         cliente: clienteCreado
//     });
// }catch (error){
//     console.log(error);
//     res.status(400).json({
//         ok:false,
//         msg:"error al crear el cliente"
//     });
// }
// };
// export const getUnCliente = async (req: Request, res: Response)=>{
//     try{
//         const id = req.params.id;
//         //el busca todos los clientes
//         const clientes = await ClienteModel.findById({_id: id});
//         console.log(id)
//         res.json({
//             ok: true,
//             clientes,
//         }); 
//     }catch(error){
//         res.status(400).json({
//             ok:false,
//             msg: `error al consultar el cliente ${error}`
//         });
//     }
//     };
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
//# sourceMappingURL=cliente.controller.js.map