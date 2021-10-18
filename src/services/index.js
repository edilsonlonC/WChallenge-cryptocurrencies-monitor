import coingeckoService from './coingecko';

export default function Services() {
  const coinGecko = coingeckoService();
  return {
    coinGecko,
  };
}
