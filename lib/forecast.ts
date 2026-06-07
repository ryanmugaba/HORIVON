import { linearRegression, linearRegressionLine } from "simple-statistics";

export function forecastCashFlow(transactions: { date: string; amount: number }[], days = 30) {
  const sorted = [...transactions].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  const balances = sorted.reduce<{ date: string; balance: number }[]>((acc, txn) => {
    const previous = acc.length ? acc[acc.length - 1].balance : 100000;
    acc.push({ date: txn.date, balance: previous + txn.amount });
    return acc;
  }, []);

  const points = balances.map((item, index) => [index, item.balance] as [number, number]);
  const regression = linearRegression(points);
  const line = linearRegressionLine(regression);

  const forecast = Array.from({ length: days }).map((_, idx) => {
    const projectedIndex = balances.length + idx;
    return {
      date: new Date(Date.now() + 24 * 60 * 60 * 1000 * (idx + 1)).toISOString().slice(0, 10),
      balance: Math.round(line(projectedIndex)),
    };
  });

  const lowest = forecast.reduce((min, point) => (point.balance < min.balance ? point : min), forecast[0]);
  return { forecast, lowest };
}
