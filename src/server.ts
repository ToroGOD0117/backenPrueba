import express, { Application } from "express";
import { dbConnection } from "./db/conection";
import clienteRoute from "./routes/cliente.route";
import { Request } from "express";
import { Response } from "express";

class Server{
private app: Application;
private port: string;
private apiPaths={
    cliente: "/api/v1/clientes",
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
    this.app.use(this.apiPaths.cliente, clienteRoute)
}
    listen():void{
        this.app.listen(this.port, ()=>{
            console.log("el servidor se esta corriendo en:", this.port);
        });
    }
}
export default Server;