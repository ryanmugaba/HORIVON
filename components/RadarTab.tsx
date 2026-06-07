"use client";

import {
  Area,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const kpiCards = [
  {
    label: "Port Melbourne",
    value: "2.4 days",
    change: "+22% ▲",
    changeClass: "text-danger",
  },
  {
    label: "RBA Cash Rate",
    value: "4.35%",
    change: "Hold signaled Jun 18",
    changeClass: "text-ink3",
  },
  {
    label: "SYD Flight Activity",
    value: "−8%",
    change: "vs last month",
    changeClass: "text-success",
  },
  {
    label: "Unemployment",
    value: "4.1%",
    change: "Steady →",
    changeClass: "text-ink3",
  },
];

const portData = Array.from({ length: 30 }, (_, index) => ({
  day: `${index + 1}`,
  value: 1.2 + index * 0.04,
}));

const rateData = [
  { label: "May 1", actual: 4.35, forecast: 4.4 },
  { label: "May 8", actual: 4.35, forecast: 4.38 },
  { label: "May 15", actual: 4.35, forecast: 4.36 },
  { label: "May 22", actual: 4.35, forecast: 4.35 },
  { label: "May 29", actual: 4.35, forecast: 4.34 },
  { label: "Jun 5", actual: 4.35, forecast: 4.33 },
  { label: "Jun 12", actual: 4.35, forecast: 4.32 },
  { label: "Jun 18", actual: 4.35, forecast: 4.31 },
];

const passengerData = [
  { date: "W1", syd: 92, mel: 87, bne: 79, per: 74 },
  { date: "W2", syd: 95, mel: 84, bne: 76, per: 72 },
  { date: "W3", syd: 89, mel: 82, bne: 78, per: 71 },
  { date: "W4", syd: 90, mel: 85, bne: 80, per: 73 },
  { date: "W5", syd: 93, mel: 88, bne: 81, per: 75 },
  { date: "W6", syd: 91, mel: 86, bne: 82, per: 76 },
  { date: "W7", syd: 94, mel: 89, bne: 83, per: 78 },
  { date: "W8", syd: 96, mel: 90, bne: 85, per: 80 },
];

const oreData = [
  { date: "Day 1", value: 118 },
  { date: "Day 10", value: 116 },
  { date: "Day 20", value: 115 },
  { date: "Day 30", value: 114 },
  { date: "Day 40", value: 113 },
  { date: "Day 50", value: 112 },
  { date: "Day 60", value: 111.5 },
  { date: "Day 70", value: 111 },
  { date: "Day 80", value: 110.5 },
  { date: "Day 90", value: 110 },
];

const alerts = [
  {
    variant: "warn",
    text: "Port congestion likely to worsen next week. Industries affected: retail, auto parts.",
    timestamp: "2h ago",
    tags: ["Retail", "Auto parts"],
  },
  {
    variant: "info",
    text: "RBA meeting June 18 — 65% probability of hold. No rate movement expected.",
    timestamp: "5h ago",
    tags: ["Finance"],
  },
  {
    variant: "warn",
    text: "New PRAZ tender: Road rehabilitation equipment Harare CBD. USD 840,000. Deadline Jun 28.",
    timestamp: "8h ago",
    tags: ["Procurement"],
  },
  {
    variant: "info",
    text: "Iron ore futures down 4.2% — potential softening in Chinese steel mill freight demand.",
    timestamp: "1d ago",
    tags: ["Commodities"],
  },
];

export default function RadarTab() {
  return (
    <div className="space-y-4 text-ink font-body">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {kpiCards.map((card) => (
          <div key={card.label} className="rounded-card border border-border bg-card p-4 shadow-card">
            <p className="text-xs uppercase tracking-wide text-ink3">{card.label}</p>
            <p className="mt-3 text-2xl font-bold font-display text-ink">{card.value}</p>
            <p className={`mt-2 text-sm ${card.changeClass}`}>{card.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="rounded-card border border-border bg-card p-4 shadow-card">
          <h4 className="mb-3 text-sm font-semibold text-ink2">Port Melbourne — avg wait time (30d)</h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={portData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
                <Tooltip />
                <defs>
                  <linearGradient id="portFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e53935" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#e53935" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="none" fill="url(#portFill)" />
                <Line type="monotone" dataKey="value" stroke="#e53935" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-card border border-border bg-card p-4 shadow-card">
          <h4 className="mb-3 text-sm font-semibold text-ink2">RBA rate vs market expectations</h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={rateData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
                <YAxis domain={[4.2, 4.5]} tickLine={false} axisLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="actual" stroke="#1a56db" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="forecast" stroke="#9ca3af" strokeWidth={2} dot={false} strokeDasharray="4 4" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="rounded-card border border-border bg-card p-4 shadow-card">
          <h4 className="mb-3 text-sm font-semibold text-ink2">Flight passenger volume — SYD, MEL, BNE, PER</h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={passengerData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
                <Tooltip />
                <Line type="monotone" dataKey="syd" stroke="#1a56db" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="mel" stroke="#7c3aed" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="bne" stroke="#16a34a" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="per" stroke="#d97706" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-card border border-border bg-card p-4 shadow-card">
          <h4 className="mb-3 text-sm font-semibold text-ink2">Iron ore — USD/tonne (90d)</h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={oreData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fill: "#6b7280", fontSize: 12 }} />
                <Tooltip />
                <defs>
                  <linearGradient id="oreFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="value" stroke="none" fill="url(#oreFill)" />
                <Line type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-card border border-border bg-card p-4 shadow-card">
        <h4 className="mb-4 text-sm font-semibold text-ink2">Live alerts</h4>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.text} className="space-y-2 rounded-xl border border-border bg-surface p-4">
              <div className="flex items-start gap-3">
                <span
                  className={`mt-1 inline-flex h-2.5 w-2.5 rounded-full ${
                    alert.variant === "warn" ? "bg-warn" : "bg-accent"
                  }`}
                />
                <p className="text-sm leading-7 text-ink">{alert.text}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-ink3">
                <span>{alert.timestamp}</span>
                <span className="mx-1 h-1 w-1 rounded-full bg-border" />
                <div className="flex flex-wrap gap-2">
                  {alert.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-card px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-ink3">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
