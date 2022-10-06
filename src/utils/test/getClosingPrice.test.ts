import { faker } from '@faker-js/faker';

import { getClosingPrice } from 'utils/getClosingPrice';
import { DemoTickers } from 'types/Tickers';
import { dailyPricesMock, randomFormattedDate } from './mocks';

test('getClosingPrice', () => {
  const randomTicker = faker.helpers.arrayElement([
    DemoTickers.eat,
    DemoTickers.pzza,
    DemoTickers.cake,
  ]);

  const closingPrice = getClosingPrice(
    dailyPricesMock,
    randomFormattedDate[0],
    randomTicker,
  );

  expect(closingPrice).toBe(
    dailyPricesMock[randomFormattedDate[0]][randomTicker],
  );
});
