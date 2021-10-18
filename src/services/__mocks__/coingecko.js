export const coingGecko = jest.fn();

const mock = jest.fn().mockImplementation(() => {
  return {
    getCoins: () => {
      return {
        data: [
          {
            id: 'bitcoin',
            symbol: 'btc',
            name: 'Bitcoin',
            image:
              'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
            current_price: 6072490,
            last_updated: '2021-10-18T19:29:52.671Z',
          },
          {
            id: 'ethereum',
            symbol: 'eth',
            name: 'Ethereum',
            image:
              'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
            current_price: 368548,
            last_updated: '2021-10-18T19:30:10.246Z',
          },
        ],
      };
    },
  };
});


export default mock;