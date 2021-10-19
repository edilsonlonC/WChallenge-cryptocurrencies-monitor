import { afterAll, jest } from '@jest/globals';
import supertest from 'supertest';
import { app, server } from '../../../app';

jest.mock('../../../models/db');

const request = supertest(app);
const urlLogin = '/api/v1/auth/login';

it('login success', async (done) => {
  const requestLogin = {
    data: {
      username: 'Eddylson2',
      password: '12345',
    },
  };
  const response = await request.post(urlLogin).send(requestLogin);

  expect(response.status).toBe(200);
  done();
});

it('login password incorrect', async(done) => {
    const requestLogin = {
    data: {
      username: 'Eddylson2',
      password: '123455',
    },
  };
  const response = await request.post(urlLogin).send(requestLogin);
  expect(response.status).toBe(401)
  done()
})
it('login username incorrect', async(done) => {
    const requestLogin = {
    data: {
      username: 'Eddylson22',
      password: '123455',
    },
  };
  const response = await request.post(urlLogin).send(requestLogin);
  expect(response.status).toBe(401)
  done()
})
afterAll(() => {
  server.close();
});
