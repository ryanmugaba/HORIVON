import Link from "next/link";

export function DisclaimerFooter() {
  return (
    <footer className="mx-auto mt-10 max-w-7xl px-6 pb-10 text-center text-sm text-slate-500 sm:px-8">
      <div className="inline-flex flex-col items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-6 py-4 text-slate-600 shadow-soft sm:flex-row sm:justify-center">
        <span>HORIVON content is illustrative and does not constitute financial, tax or legal advice.</span>
        <Link href="/legal/disclaimer" className="font-semibold text-slate-950 transition hover:text-slate-700">
          View full disclaimer
        </Link>
      </div>
    </footer>
  );
}
