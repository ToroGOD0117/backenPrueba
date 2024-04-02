import { Document, Model, Schema, Types, model}from "mongoose";

const citaSchema = new Schema({
    
fechaCreacion:{},
estado:{type:String,require: true, default: "disponible"},
fecha:{type:Date}

}); 