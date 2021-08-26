export type HistoricalStock = {
  historicalStockList: {
    symbol: string;
    historical: {
      date: string;
      close: number;
    }[];
  }[];
};
