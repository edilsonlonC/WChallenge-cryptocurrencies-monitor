import { mockUser } from './user';
import { mockFavoriteCurrency } from './favorite-currency';
import {  mockCryptoCurrency } from './crypto-currencies'
export const Database = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return { db: { User: mockUser, FavoriteCurrency: mockFavoriteCurrency, CryptoCurrency: mockCryptoCurrency } };
});

export default mock;
