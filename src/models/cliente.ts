// import { Model, Schema, model } from "mongoose";

// const ClienteSchema = new Schema({
//     nombre:{
//         type:String,
//         require: true
//     },
//     direccion:{
//         type: String,
//         require: true,
//     },
//     telefono:{
//         type: Number,
//         require:true,
//     },
//     tipoDocumento:{
//         type: String,
//         require: true,
//     },
//     numeroDocumento: {
//         type: String,
//         require: true,
//     },
//     email:{
//         type: String,
//         require:true,
//     },
//     estado:{
//         type: Boolean,
//         require:true,
//         default: true
//     },
//     createdAt:{
//         type:Date,
//         default: Date.now()
//     },
//     updatedAt:{
//         type: Date,
//         default: Date.now()
//     }

// });

// const ClienteModel: Model<any> = model("Cliente", ClienteSchema);

// export default ClienteModel;