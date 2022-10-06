import { getInvestDates } from 'utils/getInvestDates';
import { dailyPricesMock } from './mocks';
import dayjs from 'dayjs';

test('getInvestDates', () => {
  const investDates = getInvestDates(dailyPricesMock);
  Object.keys(dailyPricesMock).map((date) =>
    expect(investDates).toContain(dayjs(date).format()),
  );
});
