import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft">
        <h1 className="text-5xl font-black text-slate-950">HORIVON</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">A financial radar and copilot for Australian small businesses.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/dashboard" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            Open dashboard
          </Link>
          <Link href="/legal/disclaimer" className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-50">
            Disclaimer
          </Link>
        </div>
      </div>
    </main>
  );
}
