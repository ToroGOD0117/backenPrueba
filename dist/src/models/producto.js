"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductoSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    stock: { type: Number },
    createdAt: { type: Date, default: Date.now(), },
    peso: { type: String, required: true, },
    ip: { type: String },
    estado: { type: Boolean, required: true, default: true },
    caracteristicas: { type: Object, required: true },
    distribuidor: { type: Object, required: true },
    programas: { types: Object },
    // usuario : {type: Schema.Types.ObjectId, ref:"usuario", required: true}
});
const ProductoModel = (0, mongoose_1.model)("producto", ProductoSchema);
exports.default = ProductoModel;
//# sourceMappingURL=producto.js.map