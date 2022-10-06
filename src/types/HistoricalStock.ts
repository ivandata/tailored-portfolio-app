import { Ticker } from './Tickers';

export type HistoricalStockItem = {
  date: string;
  close: number;
};

export type HistoricalStock = {
  historicalStockList: {
    symbol: Ticker;
    historical: HistoricalStockItem[];
  }[];
};
