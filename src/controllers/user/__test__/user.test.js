import supertest from 'supertest';
import { jest } from '@jest/globals';
import { app, server } from '../../../app';

jest.mock('../../../models/db');
const request = supertest(app);
const requestBody = {
  data: {
    name: 'Edilson',
    surname: 'Londonio',
    username: 'Eddylson2',
    password: '12345',
    passwordConfirmation: '12345',
    favorite_currencyId: 1,
  },
};
const urlCreate = '/api/v1/users/create';

it('User created should be success', async (done) => {
  const requestBodyUser = { data: { ...requestBody.data } };
  const response = await request.post(urlCreate).send(requestBodyUser);
  const expectResponse = {
    data: null,
    statusCode: 201,
    message: 'Usuario creado exitosamente',
  };
  expect(response.status).toBe(201);
  expect(response.body).toMatchObject(expectResponse);
  done();
});

it('User create missing name field', async (done) => {
  const requestBodyUser = { data: { ...requestBody.data } };

  delete requestBodyUser.data.name;
  const response = await request.post(urlCreate).send(requestBodyUser);
  const expectResponse = {
    data: null,
    statusCode: 400,
    message: 'El campo name es requerido',
    errors: {
      'data.name': [
        'validators.data.name.isRequired',
        'validators.data.name.minLength',
      ],
    },
  };
  expect(response.status).toBe(400);
  expect(response.body).toMatchObject(expectResponse);
  done();
});
it('User create missing surname field', async (done) => {
  const requestBodyUser = { data: { ...requestBody.data } };

  delete requestBodyUser.data.surname;
  const response = await request.post(urlCreate).send(requestBodyUser);
  const expectResponse = {
    data: null,
    statusCode: 400,
    message: 'El campo surname es requerido',
    errors: {
      'data.surname': [
        'validators.data.surname.isRequired',
        'validators.data.surname.minLength',
      ],
    },
  };
  expect(response.status).toBe(400);
  expect(response.body).toMatchObject(expectResponse);
  done();
});
it('User create missing username field', async (done) => {
  const requestBodyUser = { data: { ...requestBody.data } };

  delete requestBodyUser.data.username;
  const response = await request.post(urlCreate).send(requestBodyUser);
  const expectResponse = {
    data: null,
    statusCode: 400,
    message: 'El campo username es requerido',
    errors: {
      'data.username': [
        'validators.data.username.isRequired',
        'validators.data.username.minLength',
      ],
    },
  };
  expect(response.status).toBe(400);
  expect(response.body).toMatchObject(expectResponse);
  done();
});
it('User create missing password field', async (done) => {
  const requestBodyUser = { data: { ...requestBody.data } };

  delete requestBodyUser.data.password;
  const response = await request.post(urlCreate).send(requestBodyUser);
  const expectResponse = {
    data: null,
    statusCode: 400,
    message: 'El campo password es requerido',
    errors: {
      'data.password': ['validators.data.password.isRequired'],
    },
  };
  expect(response.status).toBe(400);
  expect(response.body).toMatchObject(expectResponse);
  done();
});
it('User create missing passwordConfirmation field', async (done) => {
  const requestBodyUser = { data: { ...requestBody.data } };

  delete requestBodyUser.data.passwordConfirmation;
  const response = await request.post(urlCreate).send(requestBodyUser);
  const expectResponse = {
    data: null,
    statusCode: 400,
    message: 'El campo passwordConfirmation es requerido',
    errors: {
      'data.passwordConfirmation': [
        'validators.data.passwordConfirmation.isRequired',
        'validators.data.passwordConfirmation.notMatch',
      ],
    },
  };
  expect(response.status).toBe(400);
  expect(response.body).toMatchObject(expectResponse);
  done();
});
it('User create missing favorite_currencyId field', async (done) => {
  const requestBodyUser = { data: { ...requestBody.data } };

  delete requestBodyUser.data.favorite_currencyId;
  const response = await request.post(urlCreate).send(requestBodyUser);
  const expectResponse = {
    data: null,
    statusCode: 400,
    message: 'El campo favorite_currencyId es requerido',
    errors: {
      'data.favorite_currencyId': [
        'validators.data.favorite_currencyId.isRequired',
      ],
    },
  };
  expect(response.status).toBe(400);
  expect(response.body).toMatchObject(expectResponse);
  done();
});
it('User create with different password', async (done) => {
  const requestBodyUser = { data: { ...requestBody.data } };
  requestBodyUser.data.password = '12345';
  requestBodyUser.data.passwordConfirmation = '123456';
  const response = await request.post(urlCreate).send(requestBodyUser);
  const expectResponse = {
    data: null,
    statusCode: 400,
    message: 'Las contraseñas no coinciden',
    errors: {
      'data.passwordConfirmation': [
        'validators.data.passwordConfirmation.notMatch',
      ],
    },
  };
  expect(response.status).toBe(400);
  expect(response.body).toMatchObject(expectResponse);
  done();
});

it('User create when favorite currency does not exist', async (done) => {
  const requestBodyUser = { data: { ...requestBody.data } };
  requestBodyUser.data.favorite_currencyId = 10000;
  const response = await request.post(urlCreate).send(requestBodyUser);
  const expectResponse = {
    data: null,
    statusCode: 400,
    message: 'El tipo de moneda no existe',
  };
  expect(response.status).toBe(400);
  expect(response.body).toMatchObject(expectResponse);
  done();
});
afterAll(() => {
  server.close();
});
