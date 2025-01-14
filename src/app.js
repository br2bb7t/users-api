const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRoutes = require('./routes/userRoutes'); // Rutas de la API

const app = express();
const port = 3000;

// Importar la configuración de Swagger
const swaggerConfig = require('./config/swagger');
const swaggerSpec = swaggerJsdoc(swaggerConfig);  // Pasa la configuración correcta a swagger-jsdoc

// Ruta para servir la documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware para parsear las solicitudes JSON
app.use(express.json());

// Usar las rutas de usuario
app.use('/users', userRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log(`Documentación de la API disponible en http://localhost:${port}/api-docs`);
});
