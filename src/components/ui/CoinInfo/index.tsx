import { CoinList } from '@/apis/types';
import { withCommas } from '@/utils/functions';

interface PropType {
  coinInfo: CoinList | undefined;
  isUsdMode: boolean;
  krwPrice: number;
}
const CoinInfo: React.FC<PropType> = (props) => {
  const { coinInfo, isUsdMode, krwPrice } = props;
  if (!coinInfo) return <p>Sth Error...Please try again later</p>;

  return (
    <div className="py-4 flex flex-col items-start gap-2 dark:bg-slate-800 bg-sky-100 rounded-xl p-3 mt-4">
      <h5 className="h5 text-center text-blue-500">Coin Info</h5>
      <div className="flex items-center justify-between w-full">
        Name:
        <p className="text-blue-700 dark:text-blue-100">{coinInfo.name}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        Current Price:
        <p className="text-blue-700 dark:text-blue-100">
          {withCommas(
            isUsdMode
              ? '$' + coinInfo.current_price
              : '₩' + (coinInfo.current_price * krwPrice).toFixed(0)
          )}
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        Rank:
        <p className="text-blue-700 dark:text-blue-100">
          {coinInfo.market_cap_rank}
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        Market cap:
        <p className="text-blue-700 dark:text-blue-100">
          {withCommas(
            isUsdMode
              ? '$' + coinInfo.market_cap
              : '₩' + (coinInfo.market_cap * krwPrice).toFixed(0)
          )}
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        High 24h:
        <p className="text-blue-700 dark:text-blue-100">
          {withCommas(
            isUsdMode
              ? '$' + coinInfo.high_24h
              : '₩' + (coinInfo.high_24h * krwPrice).toFixed(0)
          )}
        </p>
      </div>
      <div className="flex items-center justify-between w-full">
        Low 24h:
        <p className="text-blue-700 dark:text-blue-100">
          {withCommas(
            isUsdMode
              ? '$' + coinInfo.low_24h
              : '₩' + (coinInfo.low_24h * krwPrice).toFixed(0)
          )}
        </p>
      </div>
    </div>
  );
};

export default CoinInfo;
