"use client";

import { useEffect, useRef } from "react";
import {
  PaintBrushIcon,
  ChartBarSquareIcon,
  BoltIcon,
  ServerStackIcon,
} from "@heroicons/react/24/outline";

const pillars = [
  {
    icon: PaintBrushIcon,
    title: "Conversion-Led Design",
    description:
      "Strategic homepage redesigns, checkout flow optimization, and A/B testing support\u2014every design decision backed by conversion data from your audit.",
  },
  {
    icon: ChartBarSquareIcon,
    title: "CRO Implementation",
    description:
      "Data-driven conversion optimization across your entire funnel\u2014landing pages, product pages, cart, and checkout\u2014turning audit findings into revenue.",
  },
  {
    icon: BoltIcon,
    title: "Performance Engineering",
    description:
      "Advanced caching, database optimization, mobile-specific tuning, and image optimization\u2014delivering sub-2-second load times at any scale.",
  },
  {
    icon: ServerStackIcon,
    title: "Managed Hosting",
    description:
      "Infrastructure with 99.95%+ uptime SLAs, proactive monitoring, auto-scaling, and security\u2014so your store never goes down when it matters most.",
  },
];

export default function ServiceOverview() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-animate]").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="the-service" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-center font-poppins text-[13px] font-medium uppercase tracking-[0.08em] text-[#960000]">
          Meet Your Tech Partner
        </p>
        <h2 className="mt-3 text-center font-poppins text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#1A1A1A]">
          One Team to Fix Everything the Audit Finds
        </h2>
        <p className="mx-auto mt-4 max-w-[620px] text-center font-poppins text-lg leading-relaxed text-[#4A4A4A]">
          Most stores juggle 3&ndash;4 vendors for design, CRO, performance,
          and hosting. Wisdm-HPC manages all four pillars under one roof&mdash;so
          every optimization compounds instead of conflicting.
        </p>

        {/* Four Pillars */}
        <div ref={ref} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              data-animate
              className="rounded-2xl border border-[#E8E5E0] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D0CCC7] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease-out",
              }}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[#E8E5E0] bg-[#F7F5F2]">
                <p.icon className="h-5 w-5 text-[#960000]" />
              </div>
              <h3 className="font-poppins text-lg font-semibold text-[#1A1A1A]">
                {p.title}
              </h3>
              <p className="mt-3 font-poppins text-sm leading-relaxed text-[#4A4A4A]">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Value Proposition Strip */}
        <div className="mx-auto mt-14 max-w-[800px] rounded-2xl border border-[#E8E5E0] bg-[#F7F5F2] p-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                stat: "$497",
                label: "/month",
                description: "Managed implementation starting price",
              },
              {
                stat: "30",
                label: "-day",
                description: "Money-back guarantee on all plans",
              },
              {
                stat: "7",
                label: " days",
                description: "From kickoff to first optimizations live",
              },
            ].map((item) => (
              <div key={item.description} className="text-center">
                <p className="font-poppins text-2xl font-bold text-[#960000]">
                  {item.stat}
                  <span className="text-lg font-semibold text-[#4A4A4A]">
                    {item.label}
                  </span>
                </p>
                <p className="mt-1 font-poppins text-xs text-[#8A8A8A]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bridge to Audit CTA */}
        <div className="mt-10 text-center">
          <p className="font-poppins text-sm text-[#4A4A4A]">
            Not sure if you need us yet? Start with the free audit&mdash;no
            commitment required.
          </p>
          <a
            href="#hero-form"
            className="mt-4 inline-block rounded-lg bg-[#960000] px-8 py-4 font-poppins text-base font-semibold text-white shadow-[0_1px_2px_rgba(150,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7A0000] hover:shadow-[0_2px_8px_rgba(150,0,0,0.25)] active:scale-[0.98]"
          >
            Get Your Free Audit First
          </a>
        </div>
      </div>
    </section>
  );
}
