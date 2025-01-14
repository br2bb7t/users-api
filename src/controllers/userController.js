const usuarioService = require('../services/userService');
const { validationResult } = require('express-validator');

/**
 * Controlador para registrar un nuevo usuario.
 */
const registrarUsuario = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { nombre, email, edad } = req.body;

  try {
    // Llamar al servicio para registrar el usuario
    const usuario = await usuarioService.registrarUsuario(nombre, email, edad);
    
    // Devolver la respuesta al cliente
    res.status(201).json({
      mensaje: 'Usuario registrado exitosamente',
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email,
        edad: usuario.edad,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al guardar los datos' });
  }
};

/**
 * Controlador para obtener todos los usuarios.
 */
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioService.obtenerUsuarios();
    res.status(200).json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al obtener los usuarios' });
  }
};

/**
 * Controlador para obtener un usuario por su ID.
 */
const obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await usuarioService.obtenerUsuarioPorId(id);
    
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario);
  } catch (err) {
    console.error(err);
    res.status(500).json({ mensaje: 'Error al obtener el usuario' });
  }
};

module.exports = {
  registrarUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId
};
