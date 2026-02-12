"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 7, suffix: "%", label: "Of revenue lost per extra second of load time" },
  { value: 24, suffix: "hrs", label: "From request to audit in your inbox" },
  { value: 12, suffix: "+", label: "Conversion leaks found in the average audit" },
  { value: 30, suffix: "%", label: "Average revenue uplift after fixing audit findings" },
];

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  started,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  started: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(interval);
      } else {
        setDisplay(current);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [started, value]);

  const formatted =
    value >= 1000
      ? display.toLocaleString("en-US", { maximumFractionDigits: 0 })
      : Math.round(display).toString();

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-y border-[#E8E5E0] bg-[#F7F5F2] px-6 py-14 md:py-18">
      <div
        ref={ref}
        className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 md:grid-cols-4 md:gap-6"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-poppins text-3xl font-bold text-[#960000] md:text-[42px]">
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                started={started}
              />
            </p>
            <p className="mt-2 font-poppins text-sm font-medium text-[#8A8A8A]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
