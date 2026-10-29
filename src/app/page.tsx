import CopyEmail from "@/components/CopyEmail";
import Effects from "@/components/Effects";
import LocalTime from "@/components/LocalTime";
import { EMAIL, MARQUEE, PROCESS, PROJECTS, SERVICES, STACK, STATS } from "@/lib/content";

const ROTOR = ["ship.", "scale.", "last."];
const ROMAN = ["i.", "ii.", "iii."];

export default function Home() {
  return (
    <>
      <Effects />
      <div id="rail" aria-hidden />
      <div id="cur" aria-hidden />
      <div id="cur-ring" aria-hidden />
      <div id="peek" aria-hidden>
        <div className="frame" />
      </div>

      <nav className="site-nav" id="nav">
        <div className="wrap nav-inner">
          <a className="wordmark" href="#top">
            bakibillah<em>.</em>dev
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact" className="nav-cta">
              Start a project
            </a>
          </div>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="ghost-words" aria-hidden>
          <span className="g1" data-par="-14">
            agents
          </span>
          <span className="g2" data-par="9">
            ship.
          </span>
        </div>
        <div className="wrap hero-body">
          <div className="avail rise">
            <span className="dot" />
            Available for new projects
          </div>
          <h1 className="display" id="hero-h1">
            <span className="ln">
              <span style={{ "--d": "0ms" } as React.CSSProperties}>I build AI</span>
            </span>
            <span className="ln">
              <span style={{ "--d": "120ms" } as React.CSSProperties}>products that</span>
            </span>
            <span className="ln">
              <span style={{ "--d": "240ms" } as React.CSSProperties}>
                <em>
                  actually{" "}
                  <span className="rotor" id="rotor">
                    {ROTOR.map((w, i) => (
                      <span key={w} className={i === 0 ? "rw on" : "rw"} aria-hidden={i !== 0}>
                        {w}
                      </span>
                    ))}
                    <span className="ph" aria-hidden>
                      {ROTOR[0]}
                    </span>
                  </span>
                </em>
              </span>
            </span>
          </h1>
          <div className="hero-grid">
            <div className="rise">
              <p className="hero-lede">
                LLM agents, RAG chatbots, and full-stack SaaS apps — from first idea to deployed, production-ready
                code. <strong>Every project below is a real, shipped product you can open and use today.</strong>
              </p>
              <div className="hero-actions">
                <a className="btn" href="#contact">
                  Start a project
                </a>
                <a className="btn line" href="#work">
                  See the work ↓
                </a>
              </div>
            </div>
            <div className="hero-meta rise">
              <div>
                <span>Role</span>
                <b>AI Engineer</b>
              </div>
              <div>
                <span>Also</span>
                <b>Full-Stack Dev</b>
              </div>
              <div>
                <span>Based</span>
                <b>Bangladesh · Remote</b>
              </div>
              <div>
                <span>Local time</span>
                <b className="live">
                  <LocalTime />
                </b>
              </div>
              <div>
                <span>Stack</span>
                <b>Next.js · Python</b>
              </div>
            </div>
          </div>
          <div className="stats">
            {STATS.map((s) => (
              <div key={s.label} className="stat rise">
                <b>
                  <i className="count" data-to={s.value}>
                    {s.value.toLocaleString("en-US")}
                  </i>
                  {s.suffix}
                </b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="marquee" aria-hidden>
        <div className="mq-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span key={i} className={i % 2 ? "out" : undefined}>
              {m}
            </span>
          ))}
        </div>
      </div>

      <main>
        <section className="sec" id="work">
          <div className="wrap">
            <div className="two-col">
              <div className="col-sticky rise">
                <div className="sec-head">
                  <span className="sec-num">01</span>
                  <span className="sec-kicker">Selected work</span>
                </div>
                <h2 className="sectitle">
                  Live <em>projects</em>
                </h2>
                <p className="sec-note">
                  Real, shipped products — not mockups. Hover any entry to peek inside. Web apps run on their own
                  domains; the desktop app ships as a Windows installer.
                </p>
              </div>

              <div className="work-list">
                {PROJECTS.map((p, i) => (
                  <a
                    key={p.slug}
                    className="work-item rise"
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    data-shot={p.shot}
                  >
                    <div className="work-idx">N° {String(i + 1).padStart(2, "0")}</div>
                    <div>
                      <div className="work-title-row">
                        <h3 className="work-title">{p.name}</h3>
                        <span className="work-tag">{p.tag}</span>
                      </div>
                      <p className="work-sub">{p.tagline}</p>
                      <p className="work-desc">{p.description}</p>
                      <ul className="work-bullets">
                        {p.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                      <div className="chips">
                        {p.stack.map((s) => (
                          <span key={s}>{s}</span>
                        ))}
                      </div>
                      <div className="work-shot">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.shot} alt={`${p.name} screenshot`} loading="lazy" width={1200} height={750} />
                      </div>
                    </div>
                    <span className="work-arrow" aria-hidden>
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="services">
          <div className="wrap">
            <div className="sec-head rise">
              <span className="sec-num">02</span>
              <span className="sec-kicker">Services</span>
            </div>
            <h2 className="sectitle">
              <span className="ln">
                <span>
                  What I <em>build</em>
                </span>
              </span>
            </h2>

            <div className="services">
              {SERVICES.map((s, i) => (
                <div key={s.title} className="service-row rise">
                  <div className="service-no">{ROMAN[i]}</div>
                  <h3 className="service-name">{s.title}</h3>
                  <div className="service-body">
                    <p>{s.body}</p>
                    <ul className="service-list">
                      {s.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="toolbelt rise">
              <h3>Tools I work with</h3>
              <div className="chips">
                {STACK.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sec" id="process">
          <div className="wrap">
            <div className="sec-head rise">
              <span className="sec-num">03</span>
              <span className="sec-kicker">Process</span>
            </div>
            <h2 className="sectitle">
              <span className="ln">
                <span>
                  How we&rsquo;ll <em>work</em>
                </span>
              </span>
            </h2>

            <div className="process-track" id="ptrack">
              <div className="track-line">
                <i id="pfill" />
              </div>
              {PROCESS.map((p) => (
                <div key={p.step} className="step rise">
                  <span className="step-dot" />
                  <div className="step-no">STEP {p.step}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec" id="contact">
          <span className="ghost-c" aria-hidden data-par="6">
            let&rsquo;s talk
          </span>
          <div className="wrap contact-inner">
            <div className="sec-head rise">
              <span className="sec-num">04</span>
              <span className="sec-kicker">Contact</span>
            </div>
            <h2 className="contact-big">
              <span className="ln">
                <span>Have a project</span>
              </span>
              <span className="ln">
                <span style={{ "--d": "140ms" } as React.CSSProperties}>
                  in mind? <em>Let&rsquo;s talk.</em>
                </span>
              </span>
            </h2>
            <p className="contact-sub rise">
              Send me a short description of what you want to build. I&rsquo;ll reply with a clear plan and an
              estimate — free.
            </p>
            <div className="contact-actions rise">
              <a className="btn contact-email" id="magnet" href={`mailto:${EMAIL}`} data-scramble={EMAIL}>
                {EMAIL}
              </a>
              <CopyEmail email={EMAIL} />
            </div>
            <p className="contact-note rise">Bangladesh · UTC+6 · Remote</p>

            <footer className="contact-foot">
              <span>© {new Date().getFullYear()} bakibillah.dev — AI Engineer &amp; Full-Stack Developer</span>
              <a href="#top">Back to top ↑</a>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
