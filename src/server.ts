import express, { Application } from "express";
import { dbConnection } from "./db/conection";
import usuarioRoutes from "./routes/usuario.route";
import authRoutes from "./routes/auth.route";
import mascotaRoutes from "./routes/mascota.route"


class Server{
private app: Application;
private port: string;
private apiPaths={

    usuario: "/api/v1/usuarios",
    auth: "/api/v1/auth",
    mascota: "/api/v1/mascotas"
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
    this.app.use(this.apiPaths.mascota, mascotaRoutes);
}
    listen():void{
        this.app.listen(this.port, ()=>{
            console.log("el servidor  esta corriendo en:", this.port);
        });
    }
}
export default Server; 


