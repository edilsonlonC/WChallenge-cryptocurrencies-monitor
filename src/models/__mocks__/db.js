import { mockUser } from './user';
import { mockFavoriteCurrency } from './favorite-currency';

export const Database = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return { db: { User: mockUser, FavoriteCurrency: mockFavoriteCurrency } };
});

export default mock;
