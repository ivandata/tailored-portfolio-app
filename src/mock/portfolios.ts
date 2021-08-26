import { Portfolio } from 'types/Portfilio';

export const PORTFOLIOS: {
  [key: string]: Portfolio[];
} = {
  '2': [
    {
      weight: 0.2,
      ticker: 'CAKE',
    },
    {
      weight: 0.5,
      ticker: 'PZZA',
    },
    {
      weight: 0.3,
      ticker: 'EAT',
    },
  ],
  '4': [
    {
      weight: 0.4,
      ticker: 'CAKE',
    },
    {
      weight: 0.35,
      ticker: 'PZZA',
    },
    {
      weight: 0.25,
      ticker: 'EAT',
    },
  ],
  '6': [
    {
      weight: 0.65,
      ticker: 'CAKE',
    },
    {
      weight: 0.2,
      ticker: 'PZZA',
    },
    {
      weight: 0.15,
      ticker: 'EAT',
    },
  ],
  '8': [
    {
      weight: 0.8,
      ticker: 'CAKE',
    },
    {
      weight: 0.1,
      ticker: 'PZZA',
    },
    {
      weight: 0.1,
      ticker: 'EAT',
    },
  ],
  '10': [
    {
      weight: 1,
      ticker: 'CAKE',
    },
    {
      weight: 0,
      ticker: 'PZZA',
    },
    {
      weight: 0,
      ticker: 'EAT',
    },
  ],
};
