import response from '../helper/response';
import Error from '../helper/error';


export default function (services ,db) {
    return {
        async cryptoCurrencyExist(req, res, next) {
            const { data: { id } } = req.body
            try {
                const data = await services.coinGecko.getCoins({ ids: [id]});
                if (data.data.length) return next()
                return response(res, req)(
                    {
                        data: null,
                        error: new Error(400, 'validators.cryptoCurrency.notExist')
                    }
                )
                
            } catch (error) {
                return next(error)
                
            }
        }
    }
}