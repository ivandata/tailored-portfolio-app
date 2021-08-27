import dayjs from 'dayjs';

import { DailyPrices } from 'types/DailyPrices';
import { Ticker } from 'types/Tickers';
import { DATE_FORMAT } from 'types/constants';

export const getClosingPrice = (
  dp: DailyPrices,
  dt: string,
  tk: Ticker,
): number => {
  return dp[dayjs(dt).format(DATE_FORMAT)][tk];
};
