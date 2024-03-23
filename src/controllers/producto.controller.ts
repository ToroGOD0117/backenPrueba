// import { Request, Response, response } from "express";
// import ProductoModel from "../models/producto";
// import { CustomRequest } from "../middleware/validate-jwt";


// export const crearProducto = async (req: CustomRequest, res: Response)=>{
//     const {body}=req;
//     const id = req._id;


//     try {
//         ///se saca el usuario y su id 
//         //se desestructura el body
//         const productoNuevo = new ProductoModel({ usuario: id, ...body });
//         const productoCreado= await productoNuevo.save();

//         res.status(200).json({
//              ok: true,
//             msg: "Producto Creado",
//             cliente: productoCreado
//      });
// }catch (error){
//     console.log(error);
//     res.status(400).json({
//         ok:false,
//         msg:"error al crear el producto"
//     });
// }

// };


// export const getProductos = async (req: Request, res: Response)=>{
// try{
//     //Retona todo el listado de productos con la informacion del usuario que lo creo.
//     const productos = await ProductoModel.find().populate({
//      path: "usuario",
//      select: "nombre, numeroDocumento, email",
//   });
//     res.json({
//         ok: true,
//         productos,
//     }); 
// }catch(error){
//     res.status(400).json({
//         ok:false,
//         msg: "error al consultar clientes cliente" 
//     });
// }
// };


// export const getUnCliente = async (req: Request, res: Response)=>{
//     try{
//         const id = req.params.id;
//         //el busca todos los clientes
//         const clientes = await ProductoModel.findById({_id: id});
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



// export const updateCliente =async (req: Request, res: Response)=>{
// try{
// const id = req.params.id;

// const {body} = req; 

// const clienteActualizado = await ProductoModel.findByIdAndUpdate(id, body, {new: true});
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

//         const clienteEliminado = await ProductoModel.findByIdAndDelete(id);
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
//         const estadoActualizado = await ProductoModel.findByIdAndUpdate(id, {estado:false}, {new: true});
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

