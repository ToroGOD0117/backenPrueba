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
exports.actualizarEstadoF = exports.deleteCliente = exports.updateCliente = exports.getClientes = exports.getUnCliente = exports.crearClientes = void 0;
const cliente_1 = __importDefault(require("../models/cliente"));
const crearClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        console.log(req);
        console.log(body);
        const clienteNuevo = new cliente_1.default(body);
        const clienteCreado = yield clienteNuevo.save();
        res.status(200).json({
            ok: true,
            msg: "Cliente Creado",
            cliente: clienteCreado
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: "error al crear el cliente"
        });
    }
});
exports.crearClientes = crearClientes;
const getUnCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        //el busca todos los clientes
        const clientes = yield cliente_1.default.findById({ _id: id });
        console.log(id);
        res.json({
            ok: true,
            clientes,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: `error al consultar el cliente ${error}`
        });
    }
});
exports.getUnCliente = getUnCliente;
const getClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //el busca todos los clientes
        const clientes = yield cliente_1.default.find();
        res.json({
            ok: true,
            clientes,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: `error al consultar clientes cliente ${error}`
        });
    }
});
exports.getClientes = getClientes;
const updateCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { body } = req;
        const clienteActualizado = yield cliente_1.default.findByIdAndUpdate(id, body, { new: true });
        res.json({
            ok: true,
            clientes: clienteActualizado,
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "error al actualizar"
        });
    }
});
exports.updateCliente = updateCliente;
const deleteCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const clienteEliminado = yield cliente_1.default.findByIdAndDelete(id);
        res.json({
            ok: true,
            clientes: clienteEliminado
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "error al eliminar el cliente"
        });
    }
});
exports.deleteCliente = deleteCliente;
const actualizarEstadoF = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { body } = req;
        const estadoActualizado = yield cliente_1.default.findByIdAndUpdate(id, { estado: false }, { new: true });
        res.json({
            ok: true,
            clientes: estadoActualizado
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            msg: "error al actualizar el estado"
        });
    }
});
exports.actualizarEstadoF = actualizarEstadoF;
//# sourceMappingURL=cliente.controller.js.map