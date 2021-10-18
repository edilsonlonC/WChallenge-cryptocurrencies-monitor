import app from '../../../app';
import supertest from 'supertest';
import Database from '../../../models';
import { jest } from '@jest/globals';
import { expectCt } from 'helmet';

jest.mock('../../../models/db');
const request = supertest(app);
let server = null
beforeAll((done) => {
    console.log('before')
    server = app.listen(done)
})
afterAll( (done) => {
    console.log('after')
    server.close(done)
}) 
test('User created should be success', async (done) => {
  const requestBody = {
    data: {
      name: 'Edilson',
      surname: 'Londonio',
      username: 'Eddylson2',
      password: '12345',
      passwordConfirmation: '12345',
      favorite_currencyId: 0,
    },
};
  const response = await  request.post('/api/v1/users/create').send(requestBody)
  const expectResponse = {
      data: null,
      statusCode: 201,
      message: 'Usuario creado exitosamente'
  }
  expect(response.status).toBe(201);
  expect(response.body).toMatchObject(expectResponse);
  done();

  
});
