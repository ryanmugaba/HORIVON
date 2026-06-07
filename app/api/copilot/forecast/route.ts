import { NextResponse } from "next/server";

export async function GET() {
  const cashFlowForecast = Array.from({ length: 30 }, (_, index) => {
    const day = `Day ${index + 1}`;
    const value = index < 13 ? 18000 - index * 900 : 4200 + (index - 13) * 1400;
    return { day, value };
  });

  const upcomingBills = [
    { description: "Supplier invoice — Chen Parts Co.", dueDate: "Jun 15", amount: "−$3,800", variant: "danger" },
    { description: "Office lease top-up", dueDate: "Jun 20", amount: "−$2,200", variant: "danger" },
    { description: "BAS quarterly", dueDate: "Jul 21", amount: "−$12,400", variant: "danger" },
    { description: "Customer payment — Greenfields Ltd", dueDate: "Jun 12", amount: "+$8,500", variant: "success" },
    { description: "AWS / Vercel hosting", dueDate: "Jun 14", amount: "−$340", variant: "danger" },
  ];

  return NextResponse.json({
    cashFlowForecast,
    healthScore: 74,
    upcomingBills,
  });
}
