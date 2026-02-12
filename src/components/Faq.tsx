"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "What exactly is included in the free audit?",
    answer:
      "Your audit covers two major areas: (1) A CRO audit examining your checkout flow, product pages, mobile UX, cart abandonment triggers, trust signals, and conversion paths, and (2) A technical performance audit covering Core Web Vitals, page load speed, server response times, image optimization, third-party script impact, caching, and hosting configuration. Every finding includes an estimated monthly revenue impact in dollar terms, plus a prioritized implementation roadmap.",
  },
  {
    question: "Is it really free? What\u2019s the catch?",
    answer:
      "It is genuinely free with no obligation. We provide the audit because it demonstrates our expertise and gives you immediate, actionable value. If you want help implementing the recommendations, we offer managed optimization services\u2014but there is absolutely no pressure and no sales call required to get the audit.",
  },
  {
    question: "How do you deliver the audit in just 24 hours?",
    answer:
      "We have built proprietary tooling that automates the data-collection phase of the audit\u2014crawling your store, running performance tests, and analyzing conversion paths. Our senior engineers then review the automated findings, add expert analysis, calculate revenue impact, and build your custom roadmap. The combination of automation and expertise is what makes 24-hour delivery possible.",
  },
  {
    question: "How do you calculate the revenue leakage amounts?",
    answer:
      "We use industry-validated conversion impact data (e.g., each additional second of load time costs 7\u201320% of conversions) combined with your store\u2019s traffic and revenue range to estimate the dollar impact of each issue. The figures are conservative estimates based on real-world benchmarks from research by Google, Portent, and others.",
  },
  {
    question: "Which ecommerce platforms do you support?",
    answer:
      "We work with all major ecommerce platforms: Shopify (including Liquid theme optimization and app impact analysis), WooCommerce (including database optimization, plugin management, and hosting configuration), BigCommerce, and Magento. The audit methodology is tailored to your specific platform.",
  },
  {
    question: "What happens after I get the audit?",
    answer:
      "The audit report is yours to keep and act on however you choose. You can implement the recommendations yourself, hire another agency, or work with us. If you choose Wisdm-HPC, we offer fully managed implementation starting at $497/month with a 30-day money-back guarantee. But the audit has value regardless of whether you become a client.",
  },
  {
    question: "Will you need access to my store\u2019s backend?",
    answer:
      "No. For the initial free audit, we only need your store URL. We analyze everything from the front end\u2014load performance, user experience, conversion paths, and technical health\u2014without needing admin access to your store.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-center font-poppins text-[13px] font-medium uppercase tracking-[0.08em] text-[#960000]">
          Questions About the Audit
        </p>
        <h2 className="mt-3 text-center font-poppins text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#1A1A1A]">
          Everything You Need to Know
        </h2>

        <div className="mt-12 divide-y divide-[#E8E5E0]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-poppins text-base font-semibold text-[#1A1A1A]">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 shrink-0 text-[#960000] transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  open === i ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="font-poppins text-sm leading-relaxed text-[#4A4A4A]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
