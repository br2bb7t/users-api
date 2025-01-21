const request = require('supertest');
const app = require('../src/app');

describe('Pruebas de la API de Usuarios', () => {
  let server;

  beforeAll(() => {
    server = app.listen(0);
  });

  afterAll(() => {
    server.close();
  });

  it('Debería registrar un nuevo usuario', async () => {
    const response = await request(server)
      .post('/users/registro')
      .send({
        nombre: 'Juan Pérez',
        email: 'juan_perez@outlook.com',
        edad: 30,
      });
    console.log(response.body);
    expect(response.statusCode).toBe(201);
    expect(response.body.usuario).toHaveProperty('id');
  });
  

  it('Debería rechazar un registro con datos inválidos', async () => {
    const response = await request(server)
      .post('/users/registro')
      .send({
        nombre: '',
        correo: 'correo-no-valido',
        edad: -5,
      });
    expect(response.statusCode).toBe(400);
  });
});
