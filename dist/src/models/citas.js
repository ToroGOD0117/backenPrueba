"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const citaSchema = new mongoose_1.Schema({
    fechaCreacion: {},
    estado: { type: String, require: true, default: "disponible" },
    fecha: { type: Date }
});
//# sourceMappingURL=citas.js.map