import { faker } from '@faker-js/faker';
import { getDailyPrices } from 'utils/getDailyPrices';
import { HistoricalStock } from 'types/HistoricalStock';
import { DemoTickers } from 'types/Tickers';
import { randomFormattedDate } from './mocks';

test('getDailyPrices', () => {
  const historicalStock: HistoricalStock = {
    historicalStockList: [
      {
        symbol: DemoTickers.eat,
        historical: faker.helpers.uniqueArray(() => {
          return {
            date: randomFormattedDate[0],
            close: faker.datatype.number({
              min: 10,
              max: 50,
              precision: 0.01,
            }),
          };
        }, 1),
      },
    ],
  };

  expect(getDailyPrices(historicalStock)).toStrictEqual({
    [historicalStock.historicalStockList[0].historical[0].date]: {
      [DemoTickers.eat]:
        historicalStock.historicalStockList[0].historical[0].close,
    },
  });
});
