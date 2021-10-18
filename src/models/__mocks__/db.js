import { mockUser } from './user';

export const Database = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return { db: { User: mockUser } };
});

export default mock;
