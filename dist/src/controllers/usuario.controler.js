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
exports.crearUsuario = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
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
            msg: "usuario creado"
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            error: "error al crear el usuario"
        });
    }
});
exports.crearUsuario = crearUsuario;
//# sourceMappingURL=usuario.controler.js.map