"use client";

import { useEffect, useRef } from "react";
import {
  PaintBrushIcon,
  BoltIcon,
  ListBulletIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const croItems = [
  "Homepage conversion path analysis",
  "Product page layout & persuasion review",
  "Checkout flow friction audit (every step)",
  "Cart abandonment trigger identification",
  "Mobile UX conversion assessment",
  "Call-to-action effectiveness review",
  "Trust signal & social proof audit",
  "Navigation and search usability review",
];

const techItems = [
  "Core Web Vitals deep analysis (LCP, INP, CLS)",
  "Page load speed audit (mobile + desktop)",
  "Server response time analysis",
  "Image & asset optimization review",
  "Third-party script impact assessment",
  "Caching & CDN configuration check",
  "Database query performance (WooCommerce)",
  "Hosting infrastructure evaluation",
];

const roadmapFeatures = [
  {
    icon: ListBulletIcon,
    title: "Priority Matrix",
    description: "Issues ranked by revenue impact and effort",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Revenue Projections",
    description: "Expected monthly revenue gain per fix",
  },
  {
    icon: CalendarDaysIcon,
    title: "Timeline Estimate",
    description: "Realistic implementation timeline",
  },
];

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <svg
        className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
      <span className="font-poppins text-sm text-[#4A4A4A]">{text}</span>
    </li>
  );
}

export default function AuditContents() {
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
              }, i * 150);
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
    <section id="what-you-get" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-center font-poppins text-[13px] font-medium uppercase tracking-[0.08em] text-[#960000]">
          What You Get
        </p>
        <h2 className="mt-3 text-center font-poppins text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#1A1A1A]">
          A Complete Revenue Leakage Report.
          <br className="hidden sm:block" />
          In 24 Hours. For Free.
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] text-center font-poppins text-lg leading-relaxed text-[#4A4A4A]">
          Your audit isn&rsquo;t a generic speed test. It&rsquo;s a
          comprehensive, expert-reviewed assessment of your store&rsquo;s
          conversion performance and technical health, with specific dollar
          amounts attached to every finding.
        </p>

        {/* Two audit columns */}
        <div
          ref={ref}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {/* CRO Audit Card */}
          <div
            data-animate
            className="rounded-2xl border border-[#E8E5E0] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease-out",
            }}
          >
            <div className="h-1 rounded-t-2xl bg-[#960000]" />
            <div className="p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8E5E0] bg-[#F7F5F2]">
                  <PaintBrushIcon className="h-5 w-5 text-[#960000]" />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-[#1A1A1A]">
                  Conversion Rate Optimization Audit
                </h3>
              </div>
              <ul className="space-y-3">
                {croItems.map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Performance Audit Card */}
          <div
            data-animate
            className="rounded-2xl border border-[#E8E5E0] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease-out",
            }}
          >
            <div className="h-1 rounded-t-2xl bg-[#960000]" />
            <div className="p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8E5E0] bg-[#F7F5F2]">
                  <BoltIcon className="h-5 w-5 text-[#960000]" />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-[#1A1A1A]">
                  Technical Performance Audit
                </h3>
              </div>
              <ul className="space-y-3">
                {techItems.map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Implementation Roadmap Card */}
        <div
          className="mt-6 rounded-2xl border border-[#E8E5E0] bg-[#F7F5F2] p-8"
        >
          <h3 className="text-center font-poppins text-xl font-semibold text-[#1A1A1A]">
            Plus: Your Custom Implementation Roadmap
          </h3>
          <p className="mx-auto mt-3 max-w-[600px] text-center font-poppins text-sm leading-relaxed text-[#4A4A4A]">
            Every audit includes a prioritized action plan showing exactly what
            to fix, in what order, and the expected revenue impact of each fix.
            No guesswork&mdash;just a clear path from leaking revenue to
            capturing it.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {roadmapFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8E5E0] bg-white">
                  <feature.icon className="h-5 w-5 text-[#960000]" />
                </div>
                <h4 className="font-poppins text-sm font-semibold text-[#1A1A1A]">
                  {feature.title}
                </h4>
                <p className="mt-1 font-poppins text-xs text-[#8A8A8A]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#hero-form"
            className="inline-block rounded-lg bg-[#960000] px-8 py-4 font-poppins text-base font-semibold text-white shadow-[0_1px_2px_rgba(150,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7A0000] hover:shadow-[0_2px_8px_rgba(150,0,0,0.25)] active:scale-[0.98]"
          >
            This Entire Audit Is Free. Get Yours Now.
          </a>
        </div>
      </div>
    </section>
  );
}
