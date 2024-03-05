import { Model, Schema, model } from "mongoose";

const UsuarioSchema = new Schema({
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
        unique:true
    },
    rol:{
        type: Boolean,
        require: true,
    },
    email:{
        type: String,
        require:true,
        unique:true
    },
    estado:{
        type: Boolean,
        require:true,
        default: true
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }

});

const UsuarioModel: Model <any> = model ("usuario", UsuarioSchema);

export default UsuarioModel;