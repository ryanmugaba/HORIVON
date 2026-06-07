export function RadarCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {[
        { label: "Port wait time", value: "3.8d" },
        { label: "RBA cash rate", value: "4.35%" },
        { label: "Flight arrivals", value: "1,255" },
        { label: "Unemployment", value: "4.1%" },
      ].map((card) => (
        <div key={card.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-700">{card.label}</p>
          <p className="mt-4 text-3xl font-black text-slate-950">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
