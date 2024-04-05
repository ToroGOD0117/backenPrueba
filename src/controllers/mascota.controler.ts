import { Request, Response } from "express";
import { IMascota } from "../models/usuario";
import {IObservaciones} from "../models/usuario";
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
    const {numeroDocumento, numeroDocumentoMascota} = req.params;

    const { body } = req;
try {
    const usuario = await UsuarioModel.findOne({ numeroDocumento });
    if (!usuario) {
        return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
    }

    const mascota = usuario.mascotas.find((m: IMascota) => m.numeroDocumentoMascota === numeroDocumentoMascota);
    if (!mascota) {
        return res.status(404).json({ ok: false, msg: 'Mascota no encontrada' });
    }

    // Crear la nueva observación
    const nuevaObservacion: IObservaciones = {
      ...body,
    };

    mascota.observaciones.push(nuevaObservacion);

    // Guardar el usuario actualizado en la base de datos
    await usuario.save();

    res.status(201).json({ ok: true, msg: 'Observación agregada correctamente', observacion: nuevaObservacion });
} catch (error) {
    console.error('Error al agregar la observación:', error);
  res.status(500).json({ ok: false, msg: 'Error al agregar la observación' });
}
}


// Obtener observaciones de una mascota
export const obtenerObservaciones = async (req: Request, res: Response) => {
    const { numeroDocumento, numeroDocumentoMascota } = req.params;

    try {
        // Buscar al usuario por su número de documento
        const usuario = await UsuarioModel.findOne({ numeroDocumento });
        
        if (!usuario) {
            return res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
        }

        // Encontrar la mascota por su número de documento
        const mascota = usuario.mascotas.find((m: IMascota) => m.numeroDocumentoMascota === numeroDocumentoMascota);

        if (!mascota) {
            return res.status(404).json({ ok: false, msg: 'Mascota no encontrada' });
        }

        // Devolver las observaciones de la mascota
        res.status(200).json({ ok: true, msg: 'Observaciones encontradas', observaciones: mascota.observaciones });
    } catch (error) {
        console.error('Error al obtener las observaciones:', error);
        res.status(500).json({ ok: false, msg: 'Error al obtener las observaciones' });
    }
};
