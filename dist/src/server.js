"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conection_1 = require("./db/conection");
const cliente_route_1 = __importDefault(require("./routes/cliente.route"));
class Server {
    constructor() {
        this.apiPaths = {
            cliente: "/api/v1/clientes",
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
        this.app.use(this.apiPaths.cliente, cliente_route_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("el servidor se esta corriendo en:", this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map