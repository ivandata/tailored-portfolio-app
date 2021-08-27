import { PORTFOLIOS } from 'mock/portfolios';

export const getPortfolio = (risk: number | string): string => {
  for (const portfolio in PORTFOLIOS) {
    if (+risk <= +portfolio || +risk === 1) {
      return portfolio;
    }
  }

  return '2';
};
