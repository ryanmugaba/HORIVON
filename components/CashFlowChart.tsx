import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const sampleData = [
  { name: "Jun 1", balance: 142000 },
  { name: "Jun 8", balance: 138500 },
  { name: "Jun 15", balance: 132000 },
  { name: "Jun 22", balance: 129500 },
  { name: "Jun 29", balance: 135000 },
];

export function CashFlowChart() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-500">Cash flow</p>
        <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">30 days</span>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sampleData}>
            <defs>
              <linearGradient id="cashflow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0f172a" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#0f172a" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip />
            <Area type="monotone" dataKey="balance" stroke="#0f172a" fill="url(#cashflow)" fillOpacity={1} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
