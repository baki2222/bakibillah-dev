"use client";

import { useEffect } from "react";

// All page motion lives here: scroll rail, nav state, parallax, reveals, counters,
// the headline rotor, project peek previews, the custom cursor and the contact button.
// The markup is server-rendered and readable on its own; this only enhances it.
export default function Effects() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = matchMedia("(pointer: fine)").matches && matchMedia("(hover: hover)").matches;
    const cleanups: (() => void)[] = [];
    const $ = (sel: string) => document.querySelector<HTMLElement>(sel);
    const $$ = (sel: string) => [...document.querySelectorAll<HTMLElement>(sel)];
    const on = (target: EventTarget, type: string, fn: (e: never) => void, opts?: AddEventListenerOptions) => {
      target.addEventListener(type, fn as EventListener, opts);
      cleanups.push(() => target.removeEventListener(type, fn as EventListener, opts));
    };

    /* ---------- nav, rail, parallax, active link, process fill (one rAF per scroll) ---------- */
    const nav = $("#nav")!;
    const rail = $("#rail")!;
    const pfill = $("#pfill")!;
    const ptrack = $("#ptrack")!;
    const ghosts = $$("[data-par]");
    const steps = $$(".step");
    const navLinks = $$(".nav-links a");
    const sections = navLinks.map((a) => $(a.getAttribute("href")!)).filter(Boolean) as HTMLElement[];
    let ticking = false;
    const onFrame = () => {
      ticking = false;
      const y = window.scrollY;
      const doc = document.documentElement;
      nav.classList.toggle("scrolled", y > 24);
      rail.style.transform = `scaleX(${Math.min(1, y / Math.max(1, doc.scrollHeight - innerHeight))})`;

      const mid = innerHeight * 0.4;
      let current = "";
      for (const s of sections) if (s.getBoundingClientRect().top <= mid) current = "#" + s.id;
      for (const a of navLinks) a.classList.toggle("active", a.getAttribute("href") === current);

      if (reduced) {
        steps.forEach((s) => s.classList.add("lit"));
        pfill.style.setProperty("--p", "1");
        return;
      }
      for (const g of ghosts) g.style.transform = `translateY(${(y * parseFloat(g.dataset.par!)) / 100}px)`;
      const r = ptrack.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.75 - r.top) / (r.height + innerHeight * 0.3)));
      pfill.style.setProperty("--p", p.toFixed(3));
      steps.forEach((s, i) => s.classList.toggle("lit", p >= ((i + 0.5) / steps.length) * 0.98));
    };
    on(window, "scroll", () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onFrame);
      }
    }, { passive: true });
    on(window, "resize", onFrame);
    onFrame();

    /* ---------- reveal ---------- */
    const io = new IntersectionObserver(
      (es) => {
        for (const e of es)
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    $$(".rise").forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 4) * 70}ms`;
      io.observe(el);
    });
    const io2 = new IntersectionObserver(
      (es) => {
        for (const e of es)
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io2.unobserve(e.target);
          }
      },
      { threshold: 0.4 },
    );
    $$("h2.sectitle, .contact-big").forEach((el) => io2.observe(el));
    $("#hero-h1")!.classList.add("in");
    cleanups.push(() => io.disconnect(), () => io2.disconnect());

    /* ---------- counters ---------- */
    const cio = new IntersectionObserver(
      (es) => {
        for (const e of es) {
          if (!e.isIntersecting) continue;
          cio.unobserve(e.target);
          const el = e.target as HTMLElement;
          const to = Number(el.dataset.to);
          const t0 = performance.now();
          const tick = (t: number) => {
            const k = Math.min(1, (t - t0) / 1400);
            el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))).toLocaleString("en-US");
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 },
    );
    if (!reduced)
      $$(".count").forEach((el) => {
        el.textContent = "0";
        cio.observe(el);
      });
    cleanups.push(() => cio.disconnect());

    /* ---------- rotor ---------- */
    if (!reduced) {
      const words = $$("#rotor .rw");
      let ri = 0;
      const id = setInterval(() => {
        words[ri].classList.remove("on");
        ri = (ri + 1) % words.length;
        words[ri].classList.add("on");
      }, 2600);
      cleanups.push(() => clearInterval(id));
    }

    /* ---------- cursor + peek (mouse/trackpad only) ---------- */
    if (finePointer && !reduced) {
      const cur = $("#cur")!;
      const ring = $("#cur-ring")!;
      const peek = $("#peek")!;
      const frame = peek.querySelector<HTMLElement>(".frame")!;
      let cx = -100, cy = -100, tx = -100, ty = -100, rot = 0, peeking = false, raf = 0;

      // Warm the cache so the first peek doesn't pop in empty.
      $$("[data-shot]").forEach((el) => {
        const img = new Image();
        img.src = el.dataset.shot!;
      });

      on(window, "pointermove", (e: PointerEvent) => {
        cx = e.clientX;
        cy = e.clientY;
        ring.classList.add("on");
      }, { passive: true });
      on(document.documentElement, "pointerleave", () => ring.classList.remove("on"));

      $$("[data-shot]").forEach((item) => {
        on(item, "pointerenter", () => {
          frame.innerHTML = "";
          const img = new Image();
          img.src = item.dataset.shot!;
          img.alt = "";
          frame.appendChild(img);
          peek.classList.add("show");
          ring.classList.add("peek", "on");
          ring.textContent = "VISIT ↗";
          peeking = true;
        });
        on(item, "pointerleave", () => {
          peek.classList.remove("show");
          ring.classList.remove("peek");
          ring.textContent = "";
          peeking = false;
        });
      });

      const loop = () => {
        const vx = cx - tx;
        tx += (cx - tx) * 0.14;
        ty += (cy - ty) * 0.14;
        cur.style.transform = `translate(${cx}px,${cy}px)`;
        ring.style.transform = `translate(${tx}px,${ty}px)`;
        if (peeking) {
          rot += (Math.max(-10, Math.min(10, vx * 0.35)) - rot) * 0.12;
          frame.style.setProperty("--rot", `${rot.toFixed(2)}deg`);
          // Follow the cursor but keep the whole preview on screen.
          const px = Math.min(Math.max(tx + 60, 210), innerWidth - 210);
          peek.style.transform = `translate(${px}px,${ty}px) translate(-50%,-50%)`;
        }
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
      cleanups.push(() => cancelAnimationFrame(raf));
    }

    /* ---------- magnetic email button + scramble ---------- */
    const mag = $("#magnet");
    if (mag && !reduced && finePointer) {
      on(mag, "pointermove", (e: PointerEvent) => {
        const r = mag.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width / 2) / r.width;
        const dy = (e.clientY - r.top - r.height / 2) / r.height;
        mag.style.transform = `translate(${dx * 22}px,${dy * 14}px)`;
      });
      on(mag, "pointerleave", () => (mag.style.transform = ""));
    }
    if (!reduced) {
      const CH = "!<>-_\\/[]{}—=+*^?#";
      $$("[data-scramble]").forEach((el) => {
        let id = 0;
        on(el, "pointerenter", () => {
          const final = el.dataset.scramble!;
          let i = 0;
          clearInterval(id);
          id = window.setInterval(() => {
            el.textContent = final
              .split("")
              .map((c, j) => (j < i || c === "@" || c === "." ? c : CH[Math.floor(Math.random() * CH.length)]))
              .join("");
            if (i > final.length) clearInterval(id);
            i += 1.5;
          }, 30);
        });
        cleanups.push(() => {
          clearInterval(id);
          el.textContent = el.dataset.scramble!;
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
