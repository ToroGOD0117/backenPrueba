import express, { Application } from "express";
import { dbConnection } from "./db/conection";
import clienteRoute from "./routes/cliente.route";
import usuarioRoutes from "./routes/usuario.route";


class Server{
private app: Application;
private port: string;
private apiPaths={
    cliente: "/api/v1/clientes",
    usuario: "/api/v1/usuarios"
}

    constructor(){
        this.app=express();
        this.port= process.env.PORT||"3000";
//base de datos
        dbConnection();
//metodos iniciales        
        this.middelwares();
//rutas
        this.routes();
    }

middelwares(){
    this.app.use(express.json());
}

routes():void{
    this.app.use(this.apiPaths.cliente, clienteRoute),
    this.app.use(this.apiPaths.usuario, usuarioRoutes);
}
    listen():void{
        this.app.listen(this.port, ()=>{
            console.log("el servidor se esta corriendo en:", this.port);
        });
    }
}
export default Server; 


