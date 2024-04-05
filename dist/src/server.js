"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conection_1 = require("./db/conection");
const usuario_route_1 = __importDefault(require("./routes/usuario.route"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const mascota_route_1 = __importDefault(require("./routes/mascota.route"));
class Server {
    constructor() {
        this.apiPaths = {
            usuario: "/api/v1/usuarios",
            auth: "/api/v1/auth",
            mascota: "/api/v1/mascotas"
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3000";
        //base de datos
        (0, conection_1.dbConnection)();
        //metodos iniciales        
        this.middelwares();
        //rutas
        this.routes();
    }
    middelwares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.usuario, usuario_route_1.default);
        this.app.use(this.apiPaths.auth, auth_route_1.default);
        this.app.use(this.apiPaths.mascota, mascota_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("el servidor  esta corriendo en:", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map