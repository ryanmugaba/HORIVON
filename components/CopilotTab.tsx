"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ForecastData = {
  cashFlowForecast: Array<{ day: string; value: number }>;
  healthScore: number;
  upcomingBills: Array<{ description: string; dueDate: string; amount: string; variant: "danger" | "success" }>;
};

type InsightsData = {
  insights: string[];
};

const formatCurrency = (value: number) => `$${Math.round(value / 1000)}k`;

function HighlightDot({ cx, cy, payload }: any) {
  const day = payload?.day ?? payload?.payload?.day;
  if (day !== "Day 14") {
    return null;
  }
  return <circle cx={cx} cy={cy} r={6} fill="#ef4444" stroke="#ffffff" strokeWidth={2} />;
}

export default function CopilotTab() {
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [insightsData, setInsightsData] = useState<InsightsData | null>(null);
  const [insightIndex, setInsightIndex] = useState(0);
  const [dropPct, setDropPct] = useState(10);

  useEffect(() => {
    fetch("/api/copilot/forecast")
      .then((res) => res.json())
      .then(setForecastData)
      .catch(() => null);

    fetch("/api/copilot/insights")
      .then((res) => res.json())
      .then(setInsightsData)
      .catch(() => null);
  }, []);

  const currentInsight = insightsData?.insights?.[insightIndex] ?? "Loading insight...";

  const lowestPoint = useMemo(() => {
    if (!forecastData) return 0;
    const base = 4200;
    return Math.round(base * (1 - dropPct / 100));
  }, [dropPct, forecastData]);

  const riskLevel = useMemo(() => {
    if (dropPct > 15) return "Severe overdraft risk";
    if (dropPct > 7) return "High overdraft risk";
    return "Manageable";
  }, [dropPct]);

  const cashFlowData = forecastData?.cashFlowForecast ?? [];
  const healthScore = forecastData?.healthScore ?? 74;
  const pieData = [
    { value: healthScore, fill: "#0d9f6e" },
    { value: 100 - healthScore, fill: "#f3f4f6" },
  ];

  return (
    <div className="space-y-4 text-ink font-body">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2 rounded-card border border-border bg-card p-4 shadow-card">
          <h4 className="mb-3 text-sm font-semibold text-ink2">Cash flow forecast — next 30 days</h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashFlowData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="cashFlowFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a56db" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#1a56db" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tickFormatter={formatCurrency} tick={{ fill: "#6b7280", fontSize: 12 }} />
                <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, "Cash flow"]} />
                <Area type="monotone" dataKey="value" stroke="#1a56db" fill="url(#cashFlowFill)" dot={<HighlightDot />} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-card border border-border bg-card p-4 shadow-card">
          <h4 className="mb-4 text-sm font-semibold text-ink2">Business health score</h4>
          <div className="relative flex h-48 items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={0}
                  stroke="transparent"
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-x-0 top-1/2 flex flex-col items-center -translate-y-1/2">
              <span className="text-3xl font-bold text-success font-display">{healthScore}</span>
              <span className="mt-2 text-center text-xs text-ink3">Good — 4.2 months runway</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-card border border-border bg-card p-4 shadow-card">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-ink3">
          <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-success" />
          AI INSIGHT
        </div>
        <p className="mt-3 text-sm leading-7 text-ink2">{currentInsight}</p>
        <div className="mt-3 rounded-xl border border-border bg-surface p-2 text-xs text-ink3">
          ⚠ AI-generated analysis — not financial advice. Consult a licensed accountant before acting.
        </div>
        <button
          type="button"
          onClick={() => setInsightIndex((current) => (insightsData ? (current + 1) % insightsData.insights.length : 0))}
          className="mt-4 inline-flex items-center gap-2 rounded-btn border border-border bg-white px-3 py-2 text-xs font-semibold text-ink hover:bg-surface"
        >
          ↻ Refresh insight
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
        <div className="rounded-card border border-border bg-card p-4 shadow-card">
          <h4 className="mb-2 text-sm font-semibold text-ink2">Hiring capacity</h4>
          <p className="text-3xl font-bold font-display text-ink">$75k/yr</p>
          <p className="mt-3 text-sm leading-6 text-ink2">You can onboard a $75k employee from September based on current trajectory.</p>
        </div>

        <div className="rounded-card border border-border bg-card p-4 shadow-card">
          <h4 className="mb-2 text-sm font-semibold text-ink2">Tax estimate</h4>
          <p className="text-3xl font-bold font-display text-warn">$12,400</p>
          <p className="mt-3 text-sm leading-6 text-ink2">BAS due July 21. Set aside $2,100/week starting now.</p>
        </div>

        <div className="rounded-card border border-border bg-card p-4 shadow-card">
          <h4 className="mb-3 text-sm font-semibold text-ink2">What-if simulator</h4>
          <label className="text-sm font-medium text-ink2" htmlFor="sales-drop">
            If sales drop by {dropPct}%
          </label>
          <input
            id="sales-drop"
            type="range"
            min={0}
            max={30}
            value={dropPct}
            onChange={(event) => setDropPct(Number(event.target.value))}
            className="mt-3 w-full accent-accent"
          />
          <p className="mt-4 text-sm leading-7 text-ink2">
            Your lowest point moves to <span className="font-display font-semibold text-ink">${lowestPoint.toLocaleString()}</span> on June 11th. <span className="font-semibold">{riskLevel}</span>
          </p>
        </div>
      </div>

      <div className="rounded-card border border-border bg-card p-4 shadow-card">
        <div className="mb-4 flex items-center justify-between">
          <h4 className="text-sm font-semibold text-ink2">Upcoming bills</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left text-sm text-ink2">
            <thead>
              <tr>
                <th className="pb-3 font-semibold text-ink">Description</th>
                <th className="pb-3 font-semibold text-ink">Due date</th>
                <th className="pb-3 font-semibold text-ink">Amount</th>
              </tr>
            </thead>
            <tbody>
              {(forecastData?.upcomingBills ?? []).map((row) => (
                <tr key={row.description} className="border-t border-border">
                  <td className="py-3 pr-4">{row.description}</td>
                  <td className="py-3 pr-4">{row.dueDate}</td>
                  <td className={`py-3 font-display font-semibold ${row.variant === "danger" ? "text-danger" : "text-success"}`}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
