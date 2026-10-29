"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      // Some embedded browsers block the async Clipboard API; fall back to the legacy copy command.
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      ok = document.execCommand("copy");
      ta.remove();
    }
    if (!ok) {
      window.location.href = `mailto:${email}`;
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button type="button" className="btn ghost" onClick={copy} aria-live="polite">
      {copied ? "Copied ✓" : "Copy email"}
    </button>
  );
}
