export const users = [

  {
    id: 1,
    name: 'Edilson',
    surname: 'Londonio',
    username: 'Eddylson2',
    password: '12345',
    passwordConfirmation: '12345',
    favorite_currencyId: 1,
    token: 'valid:token',
    Currency: {
      name: 'eur'
    }
  },
]

export const mockUser = {
  create(data) {
    return data;
  },
  verifyJWT(token){
    return token === 'valid:token' ? { isValid: true, payload: users.find(user => user.token === token)} : { isValid: false, payload: {}}
  },
  findByUsername(username){
    return users.find(user => user.username === username)
  }
};

Object.prototype.generateJWT = function(){
  return 'valid:token'
}