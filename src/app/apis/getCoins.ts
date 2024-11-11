export default async function getCoins() {
  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  try {
    const res = await fetch(url, { next: { revalidate: 60 } });
    return res.json();
  } catch (e) {
    console.log('Sth Error Occured!', e);
  }
}
