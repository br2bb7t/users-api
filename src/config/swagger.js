module.exports = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API de Usuarios',
        version: '1.0.0',
        description: 'Una API de ejemplo con Express y Swagger',
      },
    },
    apis: ['./src/routes/*.js'], 
  };
  
