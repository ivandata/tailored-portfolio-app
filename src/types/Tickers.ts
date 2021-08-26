export const DemoTickers = {
  cake: 'CAKE',
  pzza: 'PZZA',
  eat: 'EAT',
} as const;

type Tickers = typeof DemoTickers;

export type Ticker = typeof DemoTickers[keyof Tickers];
