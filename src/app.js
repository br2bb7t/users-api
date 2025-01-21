const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRoutes = require('./routes/userRoutes'); // Rutas de la API

const app = express();
const port = process.env.PORT || 3000; // Usa un puerto dinámico si está definido

// Importar la configuración de Swagger
const swaggerConfig = require('./config/swagger');
const swaggerSpec = swaggerJsdoc(swaggerConfig); // Pasa la configuración correcta a swagger-jsdoc

// Ruta para servir la documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware para parsear las solicitudes JSON
app.use(express.json());

// Usar las rutas de usuario
app.use('/users', userRoutes);

// Exportar la aplicación sin iniciar el servidor
module.exports = app;

// Iniciar el servidor solo si este archivo se ejecuta directamente
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log(`Documentación de la API disponible en http://localhost:${port}/api-docs`);
  });
}
