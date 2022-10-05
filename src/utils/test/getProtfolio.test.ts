import { getPortfolio } from 'utils/getPortfolio';
import { faker } from '@faker-js/faker';

test('Should return default portfolio', () => {
  const risk = faker.helpers.arrayElement([0, 11]);
  const portfolio = getPortfolio(risk);
  expect(portfolio).toBe('2');
});
