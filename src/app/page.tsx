import Client from "./Client";
import getCoins from "./apis/getCoins";
import getKrwPrice from "./apis/getKrwPrice";

export default async function Hone() {
  const coinList = await getCoins();
  const krw = await getKrwPrice();

  return (
    <section>
      <h3 className="h3 text-center">평단가 계산기</h3>
      <Client coinList={coinList} krwPrice={krw.price} />
    </section>
  );
}
