import supertest from 'supertest';
import { afterAll, jest } from '@jest/globals';
import { app, server } from '../../../app';

jest.mock('../../../services/coingecko');
jest.mock('../../../models/db');

const request = supertest(app);
const urlList = '/api/v1/crypto/currencies';
const urlTop = '/api/v1/crypto/currencies/top'
it('Crypto currency list success', async (done) => {
  const response = await request
    .get(urlList)
    .set('Authorization', 'Bearer valid:token');
  expect(response.status).toBe(200);
  done();
});

it('Crypto currency list unauthorized', async (done) => {
  const response = await request
    .get(urlList)
    .set('Authorization', 'Bearer invalid:token');
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

it('Crypto currency top success', async (done) => {
  const response = await request.get(urlTop).set('Authorization', 'Bearer valid:token')
  console.log(response.body)
  expect(response.status).toBe(400)
  done()
})

it('Crypto currency top limit', async (done) => {
  const response = await request.get(urlTop).set('Authorization', 'Bearer valid:token').query({ top: 1});
  expect(response.status).toBe(200);
  expect(response.body.data.CryptoCurrencies.length).toBe(1)
  done();
})

it('Crypto currency create success', async (done) => {
  const requestCrypto = {
    data: {
      id: 'bitcoin'
    }
  }
  const response = await request.post(urlList).set('Authorization', 'Bearer valid:token').send(requestCrypto)
  expect(response.status).toBe(201);
  done();
})
