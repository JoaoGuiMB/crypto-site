import { CoinHistory } from "@/types/Coin";
import moment from "moment";

import { LineChart, Line, ResponsiveContainer, XAxis, YAxis } from "recharts";
interface PriceChartProps {
  coinHistory: CoinHistory | undefined;
}

const PriceChart = ({ coinHistory }: PriceChartProps) => {
  const data = coinHistory?.prices.map((price) => ({
    name: new Date(price[0]),
    uv: price[1],
  }));

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart width={300} height={400} data={data}>
        <XAxis
          dataKey="name"
          tickFormatter={(timeStr) => moment(timeStr).format("DD/MM/YYYY")}
        />
        <YAxis />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
