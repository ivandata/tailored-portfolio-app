import { Ticker } from './Tickers';

export type Purchase = {
  date: string;
  ticker: Ticker;
  closingPrice: number;
  shares: string | number;
};
