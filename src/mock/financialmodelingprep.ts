import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';

import { DemoTickers, Ticker } from 'types/Tickers';
import { HistoricalStock, HistoricalStockItem } from 'types/HistoricalStock';
import { DATE_FORMAT, PERIOD_END, PERIOD_START } from 'types/constants';

const stockDates = faker.date
  .betweens(PERIOD_START, PERIOD_END, 1109)
  .map((date) => {
    return dayjs(date.toISOString()).format(DATE_FORMAT);
  });

const data: HistoricalStock = {
  historicalStockList: Object.values(DemoTickers).map((ticker: Ticker) => ({
    symbol: ticker,
    historical: stockDates.reduce(
      (acc: HistoricalStockItem[], item: string) => {
        return acc.concat({
          date: item,
          close: faker.datatype.number({
            min: 50,
            max: 99,
            precision: 0.01,
          }),
        });
      },
      [],
    ),
  })),
};

export default data;
