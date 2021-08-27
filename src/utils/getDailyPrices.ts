import { HistoricalStock } from 'types/HistoricalStock';
import { DailyPrices } from 'types/DailyPrices';

export const getDailyPrices = (hs: HistoricalStock): DailyPrices => {
  const pricesByDate: DailyPrices = {};

  for (const data of hs.historicalStockList) {
    data.historical.forEach((item) => {
      pricesByDate[item.date] = {
        ...pricesByDate[item.date],
        ...{ [data.symbol]: item.close },
      };
    });
  }

  return pricesByDate;
};
