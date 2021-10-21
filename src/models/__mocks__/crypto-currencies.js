const cryptoCurrencies = [
    {
        id: 'bitcoin',
        userId: 1
    },
    {
        id: 'ethereum',
        userId: 1
    }
]


export const mockCryptoCurrency = {
    findAll(query){
        const { where } = query;
        return !where?.userId 
        ? cryptoCurrencies 
        : cryptoCurrencies.filter(crypto => crypto.userId === where.userId)

    },
    create(data){
        return data
    },
    findOne(query){
        const { where: { userId, id} } = query;
        return cryptoCurrencies.find(crypto => crypto.userId === userId && crypto.id === id)
        }
}