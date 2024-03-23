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
exports.renewToken = exports.login = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = __importDefault(require("../helpers/jwt"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { login, password } = req.body;
    try {
        //verficiar login   
        const usuario = yield usuario_1.default.findOne({ login: login });
        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: "credeciales no validas"
            });
        }
        //verficar password
        const validarPassword = bcryptjs_1.default.compareSync(password, usuario.password);
        if (!validarPassword) {
            return res.status(401).json({
                ok: false,
                msg: "las credenciales no validas"
            });
        }
        //genrar token 
        const token = yield (0, jwt_1.default)(usuario._id, usuario.login);
        res.status(200).json({
            ok: true,
            usuario: usuario,
            token
        });
    }
    catch (error) {
        res.status(400).json({
            ok: false,
            error,
            msg: "hable con el administrador"
        });
    }
    ;
});
exports.login = login;
const renewToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req._id;
    if (typeof id === "undefined") {
        throw new Error("No existe un id");
    }
    try {
        const usuario = yield usuario_1.default.findById(id);
        // Generar el Token
        const token = yield (0, jwt_1.default)(id.toString());
        res.json({
            ok: true,
            token,
            usuario,
        });
    }
    catch (error) {
        console.error(error);
        res.status(401).json({
            ok: false,
            msg: "hable con el administrador",
        });
    }
});
exports.renewToken = renewToken;
//# sourceMappingURL=auth.controller.js.map