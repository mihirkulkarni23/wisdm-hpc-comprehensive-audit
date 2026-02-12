"use client";

import { useEffect, useRef } from "react";
import {
  ClockIcon,
  ShoppingCartIcon,
  DevicePhoneMobileIcon,
  PhotoIcon,
  ChartBarSquareIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

const leaks = [
  {
    icon: ClockIcon,
    title: "Slow Page Load Speed",
    description:
      "Pages loading over 3 seconds hemorrhage conversions. Every extra second costs 7\u201320% of potential sales.",
    impact: "$1,200\u2013$5,000/mo lost",
  },
  {
    icon: ShoppingCartIcon,
    title: "Broken Checkout Flow",
    description:
      "Confusing steps, hidden costs, and poor mobile checkout design cause 70%+ cart abandonment.",
    impact: "$2,000\u2013$8,000/mo lost",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Poor Mobile Experience",
    description:
      "60\u201370% of your traffic is on mobile. A clunky mobile UX is your biggest blind spot.",
    impact: "$1,500\u2013$6,000/mo lost",
  },
  {
    icon: PhotoIcon,
    title: "Underperforming Product Pages",
    description:
      "Weak product imagery, missing social proof, and poor above-the-fold layout suppress add-to-cart rates.",
    impact: "$800\u2013$3,000/mo lost",
  },
  {
    icon: ChartBarSquareIcon,
    title: "Failed Core Web Vitals",
    description:
      "Poor LCP, CLS, and INP scores tank your Google rankings and drive up ad costs 20\u201340%.",
    impact: "$500\u2013$2,000/mo lost",
  },
  {
    icon: PuzzlePieceIcon,
    title: "App & Plugin Bloat",
    description:
      "The average store runs 10\u201320 apps injecting scripts on every page. Most merchants don\u2019t know which ones are killing performance.",
    impact: "$600\u2013$2,500/mo lost",
  },
];

export default function RevenueLeakage() {
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
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-center font-poppins text-[13px] font-medium uppercase tracking-[0.08em] text-[#960000]">
          The Hidden Cost
        </p>
        <h2 className="mt-3 text-center font-poppins text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#1A1A1A]">
          Your Store Is Losing Money Right Now. Here&rsquo;s How.
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-center font-poppins text-lg leading-relaxed text-[#4A4A4A]">
          Most e-commerce stores have 8&ndash;15 revenue leaks they don&rsquo;t
          even know about. Our audit finds every single one and shows you the
          dollar cost of each.
        </p>

        {/* Leak Cards */}
        <div
          ref={ref}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {leaks.map((leak) => (
            <div
              key={leak.title}
              data-animate
              className="rounded-2xl border border-[#E8E5E0] bg-white p-7 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D0CCC7] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease-out",
              }}
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[#E8E5E0] bg-[#F7F5F2]">
                <leak.icon className="h-5 w-5 text-[#960000]" />
              </div>
              <h4 className="font-poppins text-lg font-semibold text-[#1A1A1A]">
                {leak.title}
              </h4>
              <p className="mt-2 font-poppins text-sm leading-relaxed text-[#4A4A4A]">
                {leak.description}
              </p>
              {/* Revenue impact badge */}
              <span className="mt-4 inline-block rounded-full bg-[#960000]/5 px-3 py-1 font-poppins text-sm font-semibold text-[#960000]">
                {leak.impact}
              </span>
            </div>
          ))}
        </div>

        {/* Summary callout */}
        <div className="mx-auto mt-14 max-w-[720px] rounded-2xl border border-[#E8E5E0] bg-[#F7F5F2] p-8 text-center">
          <p className="font-poppins text-lg font-semibold text-[#1A1A1A]">
            The average store we audit is leaking{" "}
            <span className="text-[#960000]">$4,200/month</span> in preventable
            revenue loss.
          </p>
          <p className="mt-1 font-poppins text-sm text-[#4A4A4A]">
            That&rsquo;s{" "}
            <span className="font-semibold">$50,400 per year</span> walking out
            the door.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#hero-form"
            className="inline-block rounded-lg bg-[#960000] px-8 py-4 font-poppins text-base font-semibold text-white shadow-[0_1px_2px_rgba(150,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7A0000] hover:shadow-[0_2px_8px_rgba(150,0,0,0.25)] active:scale-[0.98]"
          >
            Find Your Revenue Leaks &mdash; Free
          </a>
        </div>
      </div>
    </section>
  );
}
