import supertest from 'supertest';
import { afterAll, jest } from '@jest/globals';
import { app, server} from '../../../app';



jest.mock('../../../services/coingecko')

const request = supertest(app);
const urlList = '/api/v1/crypto/currencies';


afterAll(() => {
    server.close();
})

it('Crypto currency list success', async (done) => {
    const response = await request.get(urlList)
    expect(response.status).toBe(200)
    done();
})