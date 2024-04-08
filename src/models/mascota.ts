import { Model, Schema, Types, model } from "mongoose";


const mascotaSchema = new Schema({
  numeroDocumentoUsuario: {
    type: String, 
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
 raza: {
    type: String,
    required: true
  },
  especie: {
    type: String,
    required:true 
    },
usuario: {type: Schema.Types.ObjectId, ref: "usuario",required: true}
});


const MascotaModel: Model <any> = model ("mascota", mascotaSchema);
export default MascotaModel; 
