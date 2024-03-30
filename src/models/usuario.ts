import { Document, Types, Model, Schema, model } from "mongoose";

interface IObservaciones{
    fecha : Date;
    descripcion: string;
    medicamentos: string;

}

export interface IMascota {
    nombre: string;
    especie: String;
    raza: string;
    numeroDocumentoMascota: string;
    observaciones: IObservaciones[];

}

interface IUsuario {
    nombre : string;
    tipoDocumento: string;
    numeroDocumento: string;
    login: string;
    password: string;
    rol: String;
    email: string;
    telefono: string;
    estado: boolean;
    createdAt: Date;
    mascotas: IMascota[];
}
const observacionesSchema = new Schema<IObservaciones>({
    fecha: {type: Date, default: Date.now()},
    descripcion:{},
    medicamentos:{}

})


const mascotaSchema = new Schema<IMascota>({
    nombre:{type:String, required: true},
    especie:{type: String, required: true},
    raza:{type:String, required: true},
    numeroDocumentoMascota:{type:String},
    observaciones: [observacionesSchema]



});
const UsuarioSchema = new Schema<IUsuario>({
    nombre:{
        type:String,
        require: true
    },

    tipoDocumento:{
        type: String,
        require: true,
    },
    numeroDocumento: {
        type: String,
        require: true,
        unique: true
    },
    login:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
        // unique:true
    },
    rol:{
        type: String,
        require: true,
        default: "admin"
    },
    email:{
        type: String,
        require:true,
        unique:true
    },
    telefono:{
        type: String,
        require: true,
        unique: true
    },
    estado:{
        type: Boolean,
        require:true,
        default: true
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    mascotas: [mascotaSchema]
    

});

const UsuarioModel: Model<IUsuario> = model<IUsuario>("usuario", UsuarioSchema);
export default UsuarioModel;