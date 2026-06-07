import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface text-ink font-body">
      <div className="sticky top-0 z-20 border-b border-border bg-surface/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold uppercase tracking-[0.24em] font-display">
            HORI<span className="text-accent">VON</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex text-sm text-ink2">
            <a href="#features" className="hover:text-ink">Features</a>
            <a href="#pricing" className="hover:text-ink">Pricing</a>
            <a href="#about" className="hover:text-ink">About</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-ink hover:bg-surface">
              Log in
            </Link>
            <Link href="/dashboard" className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-accent2">
              Start free trial
            </Link>
          </div>
        </div>
      </div>

      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:py-24">
        <div className="max-w-3xl space-y-8">
          <div className="hero-fade hero-fade-0 inline-flex items-center gap-3 rounded-pill border border-border bg-white px-4 py-2 text-sm font-medium text-ink2 shadow-card">
            <span className="rounded-full bg-surface px-2 py-1 text-xs uppercase tracking-[0.2em] text-ink3">AI-powered</span>
            <span className="text-ink2">· Australia</span>
          </div>
          <h1 className="hero-fade hero-fade-1 text-5xl font-black tracking-tight text-ink font-display sm:text-6xl">
            Know your cash flow before your bank does.
          </h1>
          <p className="hero-fade hero-fade-2 max-w-2xl text-lg leading-8 text-ink2">
            HORIVON combines real-time economic intelligence with AI-powered financial analysis — built for small businesses that can't afford to be caught off guard.
          </p>
          <div className="hero-fade hero-fade-3 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/dashboard" className="inline-flex items-center justify-center rounded-btn bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-accent2">
              Start free trial →
            </Link>
            <a href="#pricing" className="inline-flex items-center justify-center rounded-btn border border-border bg-card px-6 py-3 text-sm font-semibold text-ink hover:bg-surface">
              See pricing
            </a>
          </div>
          <p className="hero-fade hero-fade-3 text-sm text-ink3">14-day free trial · No credit card required</p>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-card border border-border bg-card p-6 shadow-card">
            <div className="mb-4 text-3xl">📡</div>
            <h2 className="mb-3 text-xl font-semibold text-ink font-display">Economic Radar</h2>
            <p className="text-sm leading-7 text-ink2">
              Track ports, shipping, and commodity signals that matter to your cash flow. Make proactive decisions with alerts built for Australian small businesses.
            </p>
          </article>

          <article className="rounded-card border border-border bg-card p-6 shadow-card">
            <div className="mb-4 text-3xl">🧭</div>
            <h2 className="mb-3 text-xl font-semibold text-ink font-display">Financial Copilot</h2>
            <p className="text-sm leading-7 text-ink2">
              Get AI-guided cash flow forecasts, BAS estimates, and hiring capacity signals. Keep your finances aligned with real-time operational priorities.
            </p>
          </article>

          <article className="rounded-card border border-border bg-card p-6 shadow-card">
            <div className="mb-4 text-3xl">⚡</div>
            <h2 className="mb-3 text-xl font-semibold text-ink font-display">AI Insights</h2>
            <p className="text-sm leading-7 text-ink2">
              Turn complex financial data into clear, actionable insight cards. Spot risk and opportunity before it affects your bottom line.
            </p>
          </article>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ink3">Pricing</p>
          <h2 className="mt-4 text-4xl font-bold text-ink font-display">Simple pricing.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-card border border-border bg-card p-8 shadow-card">
            <div className="mb-6 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink3">Copilot Only</p>
              <p className="text-4xl font-bold text-ink">$79<span className="text-lg font-medium text-ink3">/mo</span></p>
            </div>
            <ul className="space-y-3 text-sm text-ink2">
              <li>30-day cash flow forecast</li>
              <li>Tax &amp; BAS estimates</li>
              <li>Hiring capacity signals</li>
              <li>AI insight cards</li>
              <li>CSV upload</li>
            </ul>
            <Link href="/dashboard" className="mt-8 inline-flex w-full items-center justify-center rounded-btn bg-accent px-5 py-3 text-sm font-semibold text-white shadow-card hover:bg-accent2">
              Start free trial
            </Link>
          </article>

          <article className="rounded-card border border-accent bg-card p-8 shadow-card">
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-full border border-accent bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Most popular
              </span>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink3">Radar + Copilot</p>
              <p className="text-4xl font-bold text-ink">$149<span className="text-lg font-medium text-ink3">/mo</span></p>
            </div>
            <ul className="mt-8 space-y-3 text-sm text-ink2">
              <li>Everything in Copilot</li>
              <li>Port &amp; shipping monitoring</li>
              <li>Commodity price alerts</li>
              <li>Tender opportunity feed</li>
              <li>Weekly intelligence brief</li>
            </ul>
            <Link href="/dashboard" className="mt-8 inline-flex w-full items-center justify-center rounded-btn bg-accent px-5 py-3 text-sm font-semibold text-white shadow-card hover:bg-accent2">
              Start free trial
            </Link>
          </article>
        </div>
      </section>

      <div className="sticky bottom-0 z-10 border-t border-border bg-surface/95 px-6 py-3 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-center text-center text-xs text-ink2">
          HORIVON uses AI — not financial advice. Consult a licensed professional. 
          <Link href="/legal/disclaimer" className="ml-2 font-semibold text-accent hover:text-accent2">
            Learn more
          </Link>
        </div>
      </div>
    </main>
  );
}
