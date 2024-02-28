import { Model, Schema, model } from "mongoose";

const ClienteSchema = new Schema({
    nombre:{
        type:String,
        require: true
    },
    direccion:{
        type: String,
        require: false
    },
    telefono:{
        type: Number,
        require:false
    },
    email:{

    },
    estado:{
        type: Boolean,
        require:true,
        default: true
    },
    createDate:{
        type:Date.now(),
    },
    updatedAt:{
        type: Date,
        default: Date.now(),
    }

});

const ClienteModel: Model<any> = model("Cliente", ClienteSchema);

export default ClienteModel;