import dayjs from 'dayjs';

import { DailyPrices } from 'types/DailyPrices';
import { DATE_FORMAT, PERIOD_END, PERIOD_START } from 'types/constants';

export const getInvestDates = (dp: DailyPrices): string[] => {
  let periodStart = dayjs(PERIOD_START);
  const periodEnd = dayjs(PERIOD_END);

  const investedMonths: string[] = [];
  while (periodStart.isBefore(periodEnd) || periodStart.isSame(periodEnd)) {
    periodStart = investedMonths.length
      ? periodStart.add(1, 'month')
      : periodStart;

    investedMonths.push(periodStart.format());
  }

  const isMarketDay = (date: string) => {
    return Boolean(dp[dayjs(date).format(DATE_FORMAT)]);
  };

  return investedMonths.reduce((acc: string[], item: string) => {
    while (!isMarketDay(item) && dayjs(item).isBefore(periodEnd)) {
      item = dayjs(item).add(1, 'day').format();
    }

    return isMarketDay(item) ? acc.concat(item) : acc;
  }, []);
};
