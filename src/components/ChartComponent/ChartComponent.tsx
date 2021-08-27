import React, { memo } from 'react';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartData } from 'types/ChartData';

import mainTheme from 'theme/theme';

import { SContainer } from './ChartComponent.styles';

type ChartComponentProps = {
  chartData: ChartData[];
};

const ChartComponent = memo<ChartComponentProps>(({ chartData }) => {
  return (
    <SContainer>
      <ResponsiveContainer width="99%" height={250}>
        <ComposedChart height={250} data={chartData}>
          <XAxis
            dataKey="date"
            type="category"
            interval={6}
            style={{ fontSize: `${mainTheme.font.size.sm}rem` }}
            height={60}
          />
          <YAxis
            interval={0}
            tick={{ fontSize: `${mainTheme.font.size.sm}rem` }}
          />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke={mainTheme.colors.border} />
          <Bar
            dataKey="portfolio"
            barSize={20}
            fill={mainTheme.colors.chart['01']}
          />
          <Area
            type="monotone"
            dataKey="contributions"
            fill={mainTheme.colors.chart['02']}
            stroke={mainTheme.colors.chart['02']}
          />
          <Line
            type="monotone"
            dataKey="returns"
            stroke={mainTheme.colors.chart['03']}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </SContainer>
  );
});

ChartComponent.displayName = 'ChartComponent';

export default ChartComponent;
