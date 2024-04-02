"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actEstadoF = exports.updateUsuario = exports.getUnUsuario = exports.getUsuarios = exports.crearUsuario = exports.agregarMascota = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
// Crear mascota
const agregarMascota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { numeroDocumento } = req.params;
    const { body } = req;
    try {
        // Buscar al usuario por su número de documento
        const usuario = yield usuario_1.default.findOne({ numeroDocumento });
        if (!usuario) {
            return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
        }
        // Generar un número de documento único para la nueva mascota
        const numeroDocumentoMascota = `${numeroDocumento}-${usuario.mascotas.length + 1}`;
        // Crear la nueva mascota
        const nuevaMascota = Object.assign(Object.assign({}, body), { numeroDocumentoMascota: numeroDocumentoMascota });
        usuario.mascotas.push(nuevaMascota);
        yield usuario.save();
        res.status(201).json({ ok: true, msg: 'Mascota creada correctamente', mascota: nuevaMascota });
    }
    catch (error) {
        console.error('Error al agregar la mascota:', error);
        res.status(500).json({ ok: false, msg: 'Error al agregar la mascota' });
    }
});
exports.agregarMascota = agregarMascota;
//crear usuario
const crearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    //el login puede cambiarse como username, email o numero de documento 
    const { login, password } = body;
    try {
        const exiteLogin = yield usuario_1.default.findOne({
            login: login,
        });
        if (exiteLogin) {
            return res.status(409).json({
                ok: false,
                msg: `Ya existe el login ${login} creado`
            });
        }
        const nuevoUsuario = new usuario_1.default(Object.assign({}, body));
        const salt = bcryptjs_1.default.genSaltSync(10);
        nuevoUsuario.password = bcryptjs_1.default.hashSync(password, salt);
        const usuarioCreado = yield nuevoUsuario.save();
        res.status(200).json({
            ok: true,
            msg: "usuario creado",
            usuarioCreado
        });
    }
    catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(400).json({
            ok: false,
            error: "Error al crear el usuario",
        });
    }
});
exports.crearUsuario = crearUsuario;
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuario_1.default.find();
        res.json({
            ok: true,
            usuarios,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: `Error consultar los usuarios`,
        });
    }
});
exports.getUsuarios = getUsuarios;
const getUnUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const numeroDocumento = req.params.numeroDocumento;
        //el busca todos los clientes
        const usuarios = yield usuario_1.default.findOne({ numeroDocumento: numeroDocumento });
        console.log(numeroDocumento);
        res.json({
            ok: true,
            clientes: usuarios,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: `error al consultar el cliente ${error}`
        });
    }
});
exports.getUnUsuario = getUnUsuario;
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const numeroDocumento = req.params.numeroDocumento;
        const { body } = req;
        const usuarioActualizado = yield usuario_1.default.findByIdAndUpdate(numeroDocumento, body, { new: true });
        res.json({
            ok: true,
            usuarios: usuarioActualizado,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "error al actualizar"
        });
    }
});
exports.updateUsuario = updateUsuario;
const actEstadoF = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const numeroDocumento = req.params.numeroDocumento;
        const { body } = req;
        const estadoF = yield usuario_1.default.findOneAndUpdate({ numeroDocumento: numeroDocumento }, { estado: false }, { new: true });
        res.json({
            ok: true,
            estado: estadoF,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "error al actualizar el estado"
        });
    }
});
exports.actEstadoF = actEstadoF;
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
//# sourceMappingURL=usuario.controler.js.map