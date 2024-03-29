import express, { Application } from "express";
import { dbConnection } from "./db/conection";
import usuarioRoutes from "./routes/usuario.route";
import authRoutes from "./routes/auth.route";


class Server{
private app: Application;
private port: string;
private apiPaths={

    usuario: "/api/v1/usuarios",
    auth: "/api/v1/auth",
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
    this.app.use(this.apiPaths.usuario, usuarioRoutes);
    this.app.use(this.apiPaths.auth, authRoutes);
}
    listen():void{
        this.app.listen(this.port, ()=>{
            console.log("el servidor se esta corriendo en:", this.port);
        });
    }
}
export default Server; 


