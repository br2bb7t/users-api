module.exports = {
    definition: {
      openapi: '3.0.0',  // Define la versión de OpenAPI
      info: {
        title: 'API de Ejemplo',
        version: '1.0.0',
        description: 'Una API de ejemplo con Express y Swagger',
      },
    },
    apis: ['./src/routes/*.js'],  // Apunta a tus archivos de rutas para buscar las definiciones de Swagger
  };
  