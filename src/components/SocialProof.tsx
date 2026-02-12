import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const caseStudies = [
  {
    image:
      "https://wisdmlabs.com/wp-content/uploads/2025/12/Untitled-design-73.png",
    tag: "Performance",
    title:
      "How Speed Optimization Improved PageSpeed Scores for an eLearning Platform",
    result:
      "Audit revealed 14 performance bottlenecks. After fixing them: dramatic PageSpeed improvements.",
    link: "https://wisdmlabs.com/case-study/how-speed-optimization-improved-mobile-and-desktop-pagespeed-scores/",
  },
  {
    image:
      "https://wisdmlabs.com/wp-content/uploads/2025/12/Untitled-design-66.png",
    tag: "SEO + Optimization",
    title:
      "How Strategic SEO & Website Optimization Drove 4x Engagement and 65% More Traffic",
    result:
      "Audit identified SEO-killing technical issues. After fixing them: 4x engagement and 65% more traffic.",
    link: "https://wisdmlabs.com/case-study/how-strategic-seo-website-optimization-drove-4x-engagement-and-65-more-traffic-for-an-options-trading-education-platform/",
  },
  {
    image:
      "https://wisdmlabs.com/wp-content/uploads/2025/12/Untitled-design-75-300x300.png",
    tag: "E-Commerce + Design",
    title:
      "Building a Faith-Aligned, High-Converting E-Commerce Experience",
    result:
      "Audit uncovered conversion-blocking design patterns. After redesign: purpose-driven store built for conversion.",
    link: "https://wisdmlabs.com/case-study/building-a-faith-aligned-high-converting-e-commerce-experience/",
  },
];

const testimonials = [
  {
    quote:
      "The audit showed us we were losing $4,200/month from checkout friction alone. After Wisdm-HPC fixed it, our conversion rate jumped 32%.",
    name: "Sarah M.",
    title: "E-Commerce Manager",
    platform: "Shopify",
    metric: "Conversion improved 32%",
  },
  {
    quote:
      "We finally stopped worrying about Black Friday crashes. The audit findings gave us a clear roadmap, and having one team implement everything meant zero gaps.",
    name: "James T.",
    title: "Store Owner",
    platform: "WooCommerce",
    metric: "Zero downtime during peak",
  },
  {
    quote:
      "The audit uncovered 11 revenue leaks we had no idea about. One partner for design, CRO, performance, and hosting\u2014instead of four vendors\u2014saved us thousands.",
    name: "Maria L.",
    title: "Operations Director",
    platform: "Both",
    metric: "Load time reduced 67%",
  },
];

const trustBadges = [
  "Expert-Reviewed by Engineers",
  "Delivered in 24 Hours",
  "100% Free, No Strings",
  "Actionable Insights Guaranteed",
];

export default function SocialProof() {
  return (
    <section id="results" className="bg-[#F7F5F2] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-center font-poppins text-[13px] font-medium uppercase tracking-[0.08em] text-[#960000]">
          Audit-to-Results
        </p>
        <h2 className="mt-3 text-center font-poppins text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#1A1A1A]">
          What Happens After the Audit
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-center font-poppins text-lg leading-relaxed text-[#4A4A4A]">
          Stores that act on their audit findings see dramatic results.
          Here&rsquo;s what&rsquo;s possible.
        </p>

        {/* Case Study Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {caseStudies.map((cs) => (
            <a
              key={cs.title}
              href={cs.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-[#E8E5E0] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D0CCC7] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-[#960000] px-3 py-1 font-poppins text-xs font-semibold text-white">
                  {cs.tag}
                </span>
              </div>
              <div className="p-6">
                <h4 className="font-poppins text-base font-semibold leading-snug text-[#1A1A1A]">
                  {cs.title}
                </h4>
                <p className="mt-2 font-poppins text-sm text-[#8A8A8A]">
                  {cs.result}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 font-poppins text-sm font-medium text-[#960000]">
                  Read Case Study
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Testimonials */}
        <p className="mt-16 text-center font-poppins text-sm font-medium uppercase tracking-[0.06em] text-[#8A8A8A]">
          Don&rsquo;t take our word for it
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-[#E8E5E0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <p className="font-poppins text-sm italic leading-relaxed text-[#4A4A4A]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="font-poppins text-sm font-semibold text-[#1A1A1A]">
                    {t.name}
                  </p>
                  <p className="font-poppins text-xs text-[#8A8A8A]">
                    {t.title}
                  </p>
                </div>
                <span className="rounded-md border border-[#E8E5E0] px-2 py-1 font-poppins text-xs font-medium text-[#960000]">
                  {t.platform}
                </span>
              </div>
              <p className="mt-3 font-poppins text-xs font-semibold text-[#960000]">
                {t.metric}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 font-poppins text-sm font-medium text-[#4A4A4A]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#E8E5E0] bg-white">
                <svg
                  className="h-3.5 w-3.5 text-[#10B981]"
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
              </span>
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
