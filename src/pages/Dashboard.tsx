import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import { Portfolio } from 'types/Portfilio';
import { Purchase } from 'types/Purchase';
import { ChartData } from 'types/ChartData';
import { DailyPrices } from 'types/DailyPrices';
import { CONTRIBUTION, INCOME, RISK, DATE_FORMAT } from 'types/constants';

import mockData from 'mock/financialmodelingprep';
import { PORTFOLIOS } from 'mock/portfolios';

import ChartComponent from 'components/ChartComponent';
import ButtonComponent from 'components/ButtonComponent';
import TextInput from 'components/TextInput';

import { getDailyPrices } from 'utils/getDailyPrices';
import { getInvestDates } from 'utils/getInvestDates';
import { getPortfolio } from 'utils/getPortfolio';
import { getClosingPrice } from 'utils/getClosingPrice';

dayjs.extend(duration);

const Dashboard: FunctionComponent = () => {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [income, setIncome] = useState<number>(INCOME);
  const [monthlyInvest, setMonthlyInvest] = useState<number>(
    income * CONTRIBUTION,
  );
  const [risk, setRisk] = useState<number>(RISK);
  const [portfolio, setPortfolio] = useState<Portfolio[]>(
    PORTFOLIOS[getPortfolio(risk)],
  );

  const dailyPrices = getDailyPrices(mockData);
  const investDates = getInvestDates(dailyPrices);

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

  const getPurchases = (): Purchase[] => {
    const purchases: Purchase[] = [];

    for (const date of investDates) {
      portfolio.map(({ ticker }) => {
        const tickerWeight = portfolio.filter(
          (element) => element.ticker === ticker,
        )[0].weight;
        const closingPrice = getClosingPrice(dailyPrices, date, ticker);
        const shares =
          (tickerWeight * +monthlyInvest.toFixed(2)) / closingPrice;
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

  const getChartData = () => {
    setChartData([]);
    for (let period = 0; period < investDates.length; period++) {
      const date = investDates[period];

      const portfolioAmount = getPortfolioAmount(
        getPurchases(),
        date,
        dailyPrices,
      );
      const contributions = (period + 1) * +monthlyInvest.toFixed(2);
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
  };

  useEffect(() => {
    getChartData();
  }, [portfolio, monthlyInvest]);

  const onCalculate = () => {
    setPortfolio(PORTFOLIOS[`${getPortfolio(risk)}`]);
    setMonthlyInvest(income * CONTRIBUTION);
  };

  const onRiskChange = (risk: number | string) => {
    setRisk(+risk <= 10 ? +risk : 10);
  };

  return (
    <SContainer>
      <header>
        <h1>Portfolio calculator based on risk and monthly income</h1>
      </header>
      <ul>
        <li>
          The stocks are based on the supplied portfolio weighting nad and they
          make up 15% of the monthly income.
        </li>
        <li>
          First contribution took place on 3.1.2017 and the last contribution on
          1.6.2021.
        </li>
        <li>The close price use as the purchase price of the partial share.</li>
      </ul>
      <SControls>
        <TextInput
          inputId={nanoid(4)}
          value={income}
          label="Income"
          description="How much do you earn per month?"
          onChange={({ currentTarget }) => setIncome(+currentTarget.value)}
        />
        <TextInput
          inputId={nanoid(4)}
          value={risk}
          label="Risk"
          description="What is your risk tolerance level? (Between 0-10)"
          onChange={({ currentTarget }) => onRiskChange(currentTarget.value)}
        />
        <ButtonComponent onClick={onCalculate}>Calculate</ButtonComponent>
      </SControls>
      <ChartComponent chartData={chartData} />
    </SContainer>
  );
};

export default Dashboard;

const SContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.bkg.container};
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl}rem;

  ul {
    max-width: 450px;
  }
`;

const SControls = styled.div`
  margin: ${({ theme }) => theme.spacing.xl}rem 0;
  max-width: 250px;

  & > * + * {
    margin-top: ${({ theme }) => theme.spacing.sm}rem;
  }
`;
