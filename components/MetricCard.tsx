import React from "react";

interface MetricCardProps {
  label: string;
  value: string;
  delta: string;
  description: string;
}

export function MetricCard({ label, value, delta, description }: MetricCardProps) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{label}</p>
          <p className="mt-4 text-4xl font-black tracking-tight text-slate-950">{value}</p>
        </div>
        <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
          {delta}
        </span>
      </div>
      <p className="mt-5 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}
