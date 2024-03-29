import { Document, Model, Schema, Types, model } from "mongoose";


interface ICaracteristicas {
    procesador: string;
    memoriaRam: string;
    almaceamiento: string;
    pantalla: string;

}

interface IProgramasInstalados{
    so: string;
    office: string;
    antivirus: string;
    multimedia: string;
}

interface Idistribuidor{
    nit: string;
    razonSocial: string;
    telefono: string;
    direccion : string;

}

interface IProducto extends Document{
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;  
    stock: number;
    createdAt: Date;
    peso: string;
    ip: string; 
    estado: boolean;
    caracteristicas: ICaracteristicas;
    distribuidor: Idistribuidor;
    programas: IProgramasInstalados;
    usuario: Types.ObjectId; 
    //reseñas: Ireseñas[]
    }

const ProductoSchema = new Schema<IProducto>({
    nombre: {type: String, required: true},
    descripcion: {type: String},
    precio: {type: Number, required: true},
    categoria: {type: String, required: true},
    stock: {type: Number},
    createdAt: {type: Date, default: Date.now(),},
    peso: {type: String, required: true, },
    ip: {type: String},
    estado: {type: Boolean, required:true, default:true},
    caracteristicas: { type: Object, required: true },
    distribuidor:{ type: Object, required: true},
    programas: {types: Object},
    // usuario : {type: Schema.Types.ObjectId, ref:"usuario", required: true}
    

});

const ProductoModel: Model<IProducto> = model<IProducto>("producto", ProductoSchema);

export default ProductoModel;