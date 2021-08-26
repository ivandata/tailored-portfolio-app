import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  ResponsiveContainer,
  Bar,
  Legend,
  ComposedChart,
  Line,
} from 'recharts';
import styled from 'styled-components';
import mockData from 'mock/financialmodelingprep';
import { PORTFOLIOS } from 'mock/portfolios';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { Ticker } from 'types/Tickers';
import { Portfolio } from 'types/Portfilio';
import { Purchase } from 'types/Purchase';
import { ChartData } from 'types/ChartData';
import { DailyPrices } from 'types/DailyPrices';
import { HistoricalStock } from 'types/HistoricalStock';
import {
  CONTRIBUTION,
  INCOME,
  PERIOD_END,
  PERIOD_START,
  RISK,
  DATE_FORMAT,
} from '../types/constants';

dayjs.extend(duration);

const Dashboard: FunctionComponent = () => {
  const [portfolio] = useState<Portfolio[]>(PORTFOLIOS[`${RISK}`]);
  const monthlyInvest = (INCOME * CONTRIBUTION).toFixed(2);
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const getDailyPrices = (hs: HistoricalStock): DailyPrices => {
    const pricesByDate: DailyPrices = {};

    for (const data of hs.historicalStockList) {
      data.historical.forEach((item) => {
        pricesByDate[item.date] = {
          ...pricesByDate[item.date],
          ...{ [data.symbol]: item.close },
        };
      });
    }

    return pricesByDate;
  };

  const getInvestDates = (dp: DailyPrices): string[] => {
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

  const getPurchases = (investDates: string[], dp: DailyPrices): Purchase[] => {
    const purchases: Purchase[] = [];

    for (const date of investDates) {
      portfolio.map(({ ticker }) => {
        const tickerWeight = portfolio.filter(
          (element) => element.ticker === ticker,
        )[0].weight;
        const closingPrice = getClosingPrice(dp, date, ticker);
        const shares = (tickerWeight * +monthlyInvest) / closingPrice;
        purchases.push({
          date,
          ticker,
          closingPrice,
          shares,
        });
      });
    }

    return purchases;
  };

  const getClosingPrice = (dp: DailyPrices, dt: string, tk: Ticker): number => {
    return dp[dayjs(dt).format(DATE_FORMAT)][tk];
  };

  const getPortfolioAmount = (
    ps: Purchase[],
    dt: string,
    dp: DailyPrices,
  ): number => {
    const purchases = ps.filter(
      (p) => dayjs(p.date).isBefore(dt) || dayjs(p.date).isSame(dt, 'day'),
    );

    return purchases.reduce((acc: number, item: Purchase): number => {
      const close: number = getClosingPrice(dp, dt, item.ticker);
      return acc + +item.shares * close;
    }, 0);
  };

  useEffect(() => {
    setChartData([]);
    const dailyPrices = getDailyPrices(mockData);
    const investDates = getInvestDates(dailyPrices);
    const purchases = getPurchases(investDates, dailyPrices);

    for (let numPeriod = 0; numPeriod < investDates.length; numPeriod++) {
      const date = investDates[numPeriod];

      const portfolioAmount = getPortfolioAmount(purchases, date, dailyPrices);
      const contributions = (numPeriod + 1) * +monthlyInvest;
      const returns = portfolioAmount - contributions;
      setChartData((data) => {
        return data.concat({
          date: dayjs(date).format(DATE_FORMAT),
          contributions: +contributions.toFixed(2),
          portfolio: +portfolioAmount.toFixed(2),
          returns: +returns.toFixed(2),
        });
      });
    }
  }, []);

  console.log('chartData', chartData);
  return (
    <Container>
      <ResponsiveContainer width="99%" height={250}>
        <ComposedChart width={730} height={250} data={chartData}>
          <XAxis
            dataKey="date"
            type="category"
            interval={6}
            style={{ fontSize: '.6rem' }}
            height={60}
          />
          <YAxis interval={0} tick={{ fontSize: '.6rem' }} />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar dataKey="portfolio" barSize={20} fill="#F9A8D4" />
          <Area
            type="monotone"
            dataKey="contributions"
            fill="#6EE7B7"
            stroke="#6EE7B7"
          />
          <Line type="monotone" dataKey="returns" stroke="#047857" />
        </ComposedChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Dashboard;

const Container = styled.section`
  max-width: 1000px;
  width: 100%;
  height: 300px;
  padding: 30px;
`;
