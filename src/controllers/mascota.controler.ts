import { Request, Response } from "express";
import UsuarioModel from "../models/usuario";
import MascotaModel from "../models/mascota";

export const agregarMascota = async (req: Request, res: Response) => {
    try {
        const { numeroDocumentoUsuario, nombre, especie, raza } = req.body;
        
        // Buscar al usuario por su número de documento
        const existingUser = await UsuarioModel.findOne({ numeroDocumento: numeroDocumentoUsuario });
        if (!existingUser) {
            return res.status(404).json({ message: 'No se encontró un usuario con ese número de documento' });
        }

        // Contar cuántas mascotas tiene el usuario
        const mascotaUsuario = await MascotaModel.countDocuments({ numeroDocumentoUsuario } );

        // Generar el número de documento único para la nueva mascota
        const numeroDocumentoMascota = `${numeroDocumentoUsuario}-${mascotaUsuario + 1}`;

        // Crear la nueva mascota
        const nuevaMascota = new MascotaModel({
            numeroDocumentoUsuario,
            nombre,
            especie,
            raza,
            numeroDocumentoMascota
        });
        
        // Guardar la mascota en la base de datos
        const mascotaCreada = await nuevaMascota.save();

        res.status(200).json({
            ok: true,
            msg: "Mascota creada",
            mascotaCreada
        });
    } catch (error) {
        console.error("Error al crear la mascota:", error);
        res.status(400).json({
            ok: false,
            error: "Error al crear la mascota",
        });
    }
};


export const getMascotasPorUsuario = async (req: Request, res: Response) => {
    try {
        const { numeroDocumentoUsuario } = req.params;

        // Buscar las mascotas del usuario por su número de documento
        const mascotas = await MascotaModel.find({ numeroDocumentoUsuario });

        if (mascotas.length === 0) {
            return res.status(404).json({ message: 'El usuario no tiene mascotas registradas.' });
        }

        res.status(200).json({
            ok: true,
            mascotas
        });
    } catch (error) {
        console.error("Error al obtener las mascotas del usuario:", error);
        res.status(400).json({
            ok: false,
            error: "Error al obtener las mascotas del usuario",
        });
    }
};
