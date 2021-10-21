import { afterAll, expect, it, jest } from '@jest/globals';
import supertest from 'supertest'

import { app, server } from '../../../app';


jest.mock('../../../models/db');

const request = supertest(app);
const urlCurrencies = '/api/v1/currencies/favorite';

it('Get currencies favorites success', async(done) => {
    const response = await request.get(urlCurrencies);
    expect(response.status).toBe(200);
    done();
})


afterAll(() => {
    server.close()
})