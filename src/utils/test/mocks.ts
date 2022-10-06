import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { DATE_FORMAT, PERIOD_END, PERIOD_START } from 'types/constants';
import { DailyPrices } from 'types/DailyPrices';
import { DemoTickers } from 'types/Tickers';

const randomDate = faker.date.betweens(PERIOD_START, PERIOD_END, 2);
const randomFormattedDate = randomDate.map((d) => dayjs(d).format(DATE_FORMAT));

const dailyPricesMock: DailyPrices = randomFormattedDate.reduce(
  (acc: DailyPrices, item: string) => {
    return {
      ...acc,
      ...{
        [item]: {
          [DemoTickers.pzza]: faker.datatype.number({
            min: 10,
            max: 50,
            precision: 0.01,
          }),
          [DemoTickers.cake]: faker.datatype.number({
            min: 10,
            max: 50,
            precision: 0.01,
          }),
          [DemoTickers.eat]: faker.datatype.number({
            min: 10,
            max: 50,
            precision: 0.01,
          }),
        },
      },
    };
  },
  {},
);

export { dailyPricesMock, randomFormattedDate };
