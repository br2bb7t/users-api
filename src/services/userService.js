const pool = require('../config/db'); // Importar la conexión a la base de datos

/**
 * Función para registrar un nuevo usuario en la base de datos.
 * @param {string} nombre - El nombre del usuario.
 * @param {string} email - El correo electrónico del usuario.
 * @param {number} edad - La edad del usuario.
 * @returns {Object} El usuario registrado.
 */
const registrarUsuario = async (nombre, email, edad) => {
  try {
    // Insertar el nuevo usuario en la base de datos
    const result = await pool.query(
      'INSERT INTO usuarios (nombre, email, edad) VALUES ($1, $2, $3) RETURNING *',
      [nombre, email, edad]
    );
    
    // Retornar el primer (y único) usuario insertado
    return result.rows[0];
  } catch (err) {
    console.error('Error al registrar usuario:', err);
    throw new Error('Error al registrar usuario');
  }
};

/**
 * Función para obtener todos los usuarios desde la base de datos.
 * @returns {Array} Lista de usuarios.
 */
const obtenerUsuarios = async () => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    return result.rows;
  } catch (err) {
    console.error('Error al obtener usuarios:', err);
    throw new Error('Error al obtener usuarios');
  }
};

/**
 * Función para obtener un usuario por su ID desde la base de datos.
 * @param {number} id - El ID del usuario.
 * @returns {Object} El usuario encontrado.
 */
const obtenerUsuarioPorId = async (id) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    return result.rows[0]; // Retorna el usuario encontrado
  } catch (err) {
    console.error('Error al obtener usuario por ID:', err);
    throw new Error('Error al obtener usuario');
  }
};

module.exports = {
  registrarUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId
};
