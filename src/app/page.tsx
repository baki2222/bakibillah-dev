import { GITHUB_URL, PROCESS, PROJECTS, SERVICES, STACK, UPWORK_URL } from "@/lib/content";

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="inline-block">
      <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
      <span className="text-signal">{n}</span> / {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="grain">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-4">
          <a href="#top" className="font-serif text-2xl leading-none">
            Baki Billah<span className="text-signal">.</span>
          </a>
          <nav className="hidden sm:flex items-center gap-7 text-sm text-muted">
            <a href="#work" className="hover:text-paper">Work</a>
            <a href="#services" className="hover:text-paper">Services</a>
            <a href="#process" className="hover:text-paper">Process</a>
            <a href="#contact" className="hover:text-paper">Contact</a>
          </nav>
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-signal px-4 py-2 text-sm font-semibold text-ink hover:brightness-95"
          >
            Hire me
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <p className="rise font-mono text-xs uppercase tracking-[0.2em] text-muted">
            AI Engineer & Full-Stack Developer · Available for new projects
          </p>
          <h1 className="rise mt-6 font-serif text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tight" style={{ animationDelay: "80ms" }}>
            I build AI products
            <br />
            that <em className="text-signal">actually ship.</em>
          </h1>
          <p className="rise mt-8 max-w-2xl text-lg text-paper/75 leading-relaxed" style={{ animationDelay: "160ms" }}>
            LLM agents, RAG chatbots, and full-stack SaaS apps — from first idea to deployed, production-ready code. Every
            project below is live: click it, try it, read the source.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a href="#work" className="rounded-full bg-paper px-6 py-3 font-semibold text-ink hover:bg-white">
              See live projects
            </a>
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-paper/25 px-6 py-3 font-semibold hover:border-paper"
            >
              Work with me on Upwork <Arrow />
            </a>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
            <SectionLabel n="01">Selected work</SectionLabel>
            <h2 className="mt-4 font-serif text-5xl sm:text-6xl">Live projects</h2>
            <p className="mt-4 max-w-xl text-paper/65">Real, working applications — not mockups. Each one runs on its own subdomain.</p>

            <div className="mt-14 space-y-6">
              {PROJECTS.map((p, i) => (
                <article
                  key={p.slug}
                  className="group grid gap-8 rounded-3xl border border-line bg-white/[0.02] p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr] hover:border-paper/25 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-3 font-mono text-xs text-muted">
                      <span style={{ color: p.accent }}>●</span> {String(i + 1).padStart(2, "0")} — {p.live.replace("https://", "")}
                    </div>
                    <h3 className="mt-4 font-serif text-4xl sm:text-5xl">{p.name}</h3>
                    <p className="mt-2 text-lg text-paper/80">{p.tagline}</p>
                    <p className="mt-5 text-paper/60 leading-relaxed">{p.description}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full px-5 py-2.5 text-sm font-semibold text-ink"
                        style={{ background: p.accent }}
                      >
                        Open live demo <Arrow />
                      </a>
                      <a
                        href={p.source}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-paper/20 px-5 py-2.5 text-sm font-semibold hover:border-paper"
                      >
                        Source code <Arrow />
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-8">
                    <ul className="space-y-4">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-paper/80">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: p.accent }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
            <SectionLabel n="02">Services</SectionLabel>
            <h2 className="mt-4 font-serif text-5xl sm:text-6xl">What I build</h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
              {SERVICES.map((s) => (
                <div key={s.title} className="bg-ink p-8">
                  <h3 className="font-serif text-3xl">{s.title}</h3>
                  <p className="mt-4 text-paper/65 leading-relaxed">{s.body}</p>
                  <ul className="mt-6 space-y-2 font-mono text-xs text-muted">
                    {s.points.map((pt) => (
                      <li key={pt}>→ {pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Tools I work with</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {STACK.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-paper/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
            <SectionLabel n="03">Process</SectionLabel>
            <h2 className="mt-4 font-serif text-5xl sm:text-6xl">How we&apos;ll work</h2>
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((p) => (
                <div key={p.step} className="border-t border-paper/20 pt-6">
                  <p className="font-mono text-sm text-signal">{p.step}</p>
                  <h3 className="mt-3 font-serif text-3xl">{p.title}</h3>
                  <p className="mt-3 text-paper/65 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32">
            <SectionLabel n="04">Contact</SectionLabel>
            <h2 className="mt-6 font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.95]">
              Have a project in mind?
              <br />
              <em className="text-signal">Let&apos;s talk.</em>
            </h2>
            <p className="mt-8 max-w-xl text-lg text-paper/70">
              Send me a short description of what you want to build. I&apos;ll reply with a clear plan and an estimate — free.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={UPWORK_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-signal px-7 py-3.5 font-semibold text-ink hover:brightness-95"
              >
                Message me on Upwork <Arrow />
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-paper/25 px-7 py-3.5 font-semibold hover:border-paper"
              >
                GitHub <Arrow />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 sm:px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Baki Billah</p>
          <p className="font-mono text-xs">Built with Next.js · Hosted on Vercel</p>
        </div>
      </footer>
    </div>
  );
}
