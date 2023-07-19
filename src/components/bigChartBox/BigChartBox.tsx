import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './bigChartBox.scss';

const data = [
  {
    name: '日',
    书籍: 4000,
    衣服: 2400,
    电子产品: 2400,
  },
  {
    name: '一',
    书籍: 3000,
    衣服: 1398,
    电子产品: 2210,
  },
  {
    name: '二',
    书籍: 2000,
    衣服: 9800,
    电子产品: 2290,
  },
  {
    name: '三',
    书籍: 2780,
    衣服: 3908,
    电子产品: 2000,
  },
  {
    name: '四',
    书籍: 1890,
    衣服: 4800,
    电子产品: 2181,
  },
  {
    name: '五',
    书籍: 2390,
    衣服: 3800,
    电子产品: 2500,
  },
  {
    name: '六',
    书籍: 3490,
    衣服: 4300,
    电子产品: 2100,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>回馈分析</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="电子产品"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="衣服"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="书籍"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
