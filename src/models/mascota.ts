import { Model, Schema, model } from "mongoose";

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
numeroDocumentMascota:{
    type: String,
    
}
});


const MascotaModel: Model <any> = model ("mascota", mascotaSchema);
export default MascotaModel; 
