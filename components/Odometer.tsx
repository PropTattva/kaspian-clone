"use client";

import { useEffect, useRef, useState } from "react";

/** Rolling-digit counter (the "100+ years" stat). Each digit column scrolls 0-9 to its target. */
export default function Odometer({ value, suffix = "+" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [run, setRun] = useState(false);
  const digits = String(value).split("").map(Number);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={`odo${run ? " odo--run" : ""}`} aria-label={`${value}${suffix}`}>
      {digits.map((d, i) => (
        <span key={i} className="odo__digit" aria-hidden="true">
          <span className="odo__strip" style={{ ["--d" as string]: d, ["--i" as string]: i }}>
            {Array.from({ length: 10 }, (_, n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </span>
      ))}
      <span className="odo__suffix" aria-hidden="true">
        {suffix}
      </span>
    </span>
  );
}
