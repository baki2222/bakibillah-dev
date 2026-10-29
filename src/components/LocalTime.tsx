"use client";

import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Dhaka", hour: "2-digit", minute: "2-digit" });

// Shows the current time in Dhaka so clients can see the overlap with their own day.
export default function LocalTime() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return <>{now ? `${now} · UTC+6` : "UTC+6"}</>;
}
