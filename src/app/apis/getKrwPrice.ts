export default async function getFiatPrice() {
  const url = 'https://api.frankfurter.app/latest?from=USD&to=KRW';

  try {
    const { rates } = await fetch(url, { next: { revalidate: 60 } }).then(
      (res) => res.json()
    );

    return { price: rates['KRW'] };
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    return { rates: {}, flagImages: {} };
  }
}
