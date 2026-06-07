"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import RadarTab from "../../../components/RadarTab";
import CopilotTab from "../../../components/CopilotTab";
import SettingsTab from "../../../components/SettingsTab";

const tabs = [
  { id: "Radar", label: "📡 Radar" },
  { id: "Copilot", label: "🧭 Copilot" },
  { id: "Settings", label: "⚙ Settings" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Radar");

  return (
    <main className="h-screen flex flex-col bg-surface text-ink font-body">
      <div className="sticky top-0 z-20 border-b border-border bg-card px-6">
        <div className="flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <span className="text-sm font-bold uppercase tracking-[0.24em] text-ink font-display">HORIVON</span>
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? "border-l-2 border-accent bg-card shadow-sm text-ink"
                      : "text-ink2 hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/dashboard" className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-ink hover:bg-surface">
              Connect Bank
            </Link>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
              HB
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <Suspense fallback={<div className="text-ink2">Loading dashboard...</div>}>
          <div
            key={activeTab}
            className="animate-[fade-in_0.25s_ease-out] transition-opacity duration-300"
          >
            {activeTab === "Radar" && <RadarTab />}
            {activeTab === "Copilot" && <CopilotTab />}
            {activeTab === "Settings" && <SettingsTab />}
          </div>
        </Suspense>
      </div>

      <div className="sticky bottom-0 border-t border-border bg-card px-6 py-3 text-center text-xs text-ink2">
        HORIVON uses AI to generate estimates — not financial advice. Consult a licensed accountant.
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
