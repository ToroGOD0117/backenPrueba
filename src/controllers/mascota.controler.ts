import { Request, Response } from "express";
import { IMascota } from "../models/usuario";
import UsuarioModel from "../models/usuario";

export const agregarMascota = async (req: Request, res: Response) => {
    const { numeroDocumento } = req.params;
    const { body } = req;

    try {
        // Buscar al usuario por su número de documento
        const usuario = await UsuarioModel.findOne({ numeroDocumento });
        
        if (!usuario) {
            return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
        }

        // Generar un número de documento único para la nueva mascota
        const numeroDocumentoMascota = `${numeroDocumento}-${usuario.mascotas.length + 1}`;

        // Crear la nueva mascota
        const nuevaMascota : IMascota = {
           ...body,
           numeroDocumentoMascota: numeroDocumentoMascota,
           
        };

        usuario.mascotas.push(nuevaMascota);
        await usuario.save();

        res.status(201).json({ ok: true, msg: 'Mascota creada correctamente', mascota: nuevaMascota });
    } catch (error) {
        console.error('Error al agregar la mascota:', error);
        res.status(500).json({ ok: false, msg: 'Error al agregar la mascota' });
    }
};

export const agregarObservacion = async (req: Request, res: Response)=>{
    const {numeroDocumentoMascota} = req.params;
    const { body } = req;
try {
    const mascota = await UsuarioModel.findOne({ numeroDocumentoMascota });

} catch (error) {
    
}
}