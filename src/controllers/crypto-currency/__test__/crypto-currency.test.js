import supertest from 'supertest';
import { afterAll, jest } from '@jest/globals';
import { app, server } from '../../../app';

jest.mock('../../../services/coingecko');
jest.mock('../../../models/db')

const request = supertest(app);
const urlList = '/api/v1/crypto/currencies';

it('Crypto currency list success', async (done) => {
  const response = await request.get(urlList).set('Authorization', 'Bearer valid:token');
  expect(response.status).toBe(200);
  done();
});

it('Crypto currency list unauthorized', async (done) => {
const response = await request.get(urlList).set('Authorization', 'Bearer invalid:token');
  expect(response.status).toBe(401);
  done();
});
it('Crypto currency list unauthorized', async (done) => {
const response = await request.get(urlList);
  expect(response.status).toBe(401);
  done();
});
afterAll(() => {
  server.close();
});

