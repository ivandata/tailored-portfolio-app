import { Ticker } from './Tickers';

export type DailyPrices = {
  [key: string]: {
    [key in Ticker]: number;
  };
};
