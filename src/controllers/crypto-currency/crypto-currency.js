import response from '../../helper/response';

export default function (services, db) {
  const { CryptoCurrency, FavoriteCurrency } = db;
  return {
    async list(req, res, next) {
      try {
        const { Currency } = req.User;
        const { per_page, page} = req.query
        const data = await services.coinGecko.getCoins({ 
          currency: Currency.name,
          perPage: per_page,
          page
        });
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
          data: { page, per_page, CryptoCurrencies: cryptoCurrencies },
          message: 'cryptocurrencies.list',
        });
      } catch (error) {
        return next(error);
      }
    },
  async create(req, res, next){
      const userId= req.User?.id
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

  },
  async top(req, res, next) {
    const { top, order } = req.query; 
    try {
      const { id, Currency } = req.User;
      const cryptoCurrenciesByUser = await CryptoCurrency.findAll({
        where:{
          userId: id
        }
      }) 
      const ids = cryptoCurrenciesByUser.map(crypto => crypto.id);
      const data = await services.coinGecko.getCoins({
        ids,
        perPage: top,
        currency: Currency.name,
        order
       })
       const allCryptoCurrencies = data.data.slice(0,top)
      const cryptoCurrencies = allCryptoCurrencies.map((d) => ({
          id: d.id,
          symbol: d.symbol,
          name: d.name,
          image: d.image,
          current_price: d.current_price,
          last_updated: d.last_updated,
        }));
        const currencies = await FavoriteCurrency.findAll();
        const vsCurrencies = currencies.map(currency => currency.name)
        const dataPrices = await services.coinGecko.getPrices({
          ids,
          vs_currencies: vsCurrencies
        })
        const simplePrices = dataPrices.data
        const cryptoCurrenciesWithPrices = cryptoCurrencies.reduce((previous, current) => {
          previous.push({ ...current, ...simplePrices[current.id]})
          return previous;
          

        }, [])
        return response(res,req)({
          data: { count: cryptoCurrencies.length, CryptoCurrencies: cryptoCurrenciesWithPrices},
          message: 'cryptoCurencies.list'
        })
      
      
    } catch (error) {
      return next(error)
      
    }
  }
  };
}
