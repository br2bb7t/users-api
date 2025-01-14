const { body } = require('express-validator');

const validarRegistro = [
  body('nombre').isString().notEmpty().withMessage('El nombre es obligatorio'),
  body('email').isEmail().withMessage('El email debe ser válido'),
  body('edad').isInt({ min: 1 }).withMessage('La edad debe ser un número positivo'),
];

module.exports = { validarRegistro };
