import response from '../../helper/response';

export default function (services, db) {
  const { CryptoCurrency } = db;
  return {
    async list(req, res, next) {
      try {
        const { Currency } = req.User;
        const data = await services.coinGecko.getCoins({ currency: Currency.name});
        const cryptoCurrencies = data.data.map((d) => ({
          id: d.id,
          symbol: d.symbol,
          name: d.name,
          image: d.image,
          current_price: d.current_price,
          last_updated: d.last_updated,
        }));
        return response(
          res,
          req
        )({
          data: { count: cryptoCurrencies.length, CryptoCurrencies: cryptoCurrencies },
          message: 'cryptocurrencies.list',
        });
      } catch (error) {
        return next(error);
      }
    },
  async create(req, res, next){
      const userId= req.User?.id
      console.log(req.User, 'user', req.User.id)
      const { data: { id }} = req.body;
    try{
       await CryptoCurrency.create({
         id,
         userId
       })
       return response(res,req)({
         data: null,
         message: 'crypto.created',
         statusCode: 201
       }) 

    }catch(error){
      return next(error)
    }

  }
  };
}
