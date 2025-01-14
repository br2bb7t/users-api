const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validarRegistro } = require('../middlewares/validationMiddleware');

/**
 * @swagger
 * /registro:
 *   post:
 *     summary: Registra un nuevo usuario.
 *     description: Este endpoint permite registrar un usuario con nombre, email y edad.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - email
 *               - edad
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Freddy Morales"
 *               email:
 *                 type: string
 *                 example: "freddy_alexander@example.com"
 *               edad:
 *                 type: integer
 *                 example: 30
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensaje:
 *                   type: string
 *                   example: "Usuario registrado exitosamente"
 *                 usuario:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     nombre:
 *                       type: string
 *                       example: "Freddy Morales"
 *                     email:
 *                       type: string
 *                       example: "freddy_alexander@example.com"
 *                     edad:
 *                       type: integer
 *                       example: 30
 *       400:
 *         description: Error en la validación de los datos
 *       500:
 *         description: Error al guardar los datos
 */
router.post('/registro', validarRegistro, userController.registrarUsuario);

module.exports = router;
