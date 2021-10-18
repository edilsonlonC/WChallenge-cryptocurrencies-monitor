export const Currencies = [
    {
        id: 1,
        name: 'eur'
    },
    {
        id: 2,
        name: 'usd'
    },
    {
        id: 3,
        name: 'ars'
    }
]



export const mockFavoriteCurrency = {
    findByPk(id){
        return Currencies.find(currency => currency.id === id)
    }
}