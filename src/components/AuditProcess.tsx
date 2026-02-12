export default function AuditProcess() {
  const steps = [
    {
      number: "01",
      title: "Submit Your Store URL",
      description:
        "Fill out the 60-second form above with your store URL and basic details. That\u2019s all we need to get started.",
    },
    {
      number: "02",
      title: "We Analyze Everything",
      description:
        "Our team runs a comprehensive CRO + technical audit. We crawl your store, test performance, analyze conversion paths, and calculate revenue impact.",
    },
    {
      number: "03",
      title: "Get Your Report in 24 Hours",
      description:
        "A detailed report lands in your inbox with every revenue leak identified, its dollar cost, and a prioritized implementation roadmap to fix it.",
    },
  ];

  return (
    <section className="bg-[#F7F5F2] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <p className="text-center font-poppins text-[13px] font-medium uppercase tracking-[0.08em] text-[#960000]">
          How It Works
        </p>
        <h2 className="mt-3 text-center font-poppins text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-[#1A1A1A]">
          Three Steps. Zero Risk. Real Answers.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute left-[calc(50%+30px)] top-5 hidden h-px w-[calc(100%-60px)] bg-[#E8E5E0] sm:block" />
              )}
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#960000]/30 font-poppins text-sm font-bold text-[#960000]">
                {step.number}
              </div>
              <h4 className="mt-4 font-poppins text-base font-semibold text-[#1A1A1A]">
                {step.title}
              </h4>
              <p className="mt-2 font-poppins text-sm leading-relaxed text-[#8A8A8A]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <p className="mt-12 text-center font-poppins text-sm text-[#8A8A8A]">
          No sales call required. No credit card. No commitment. Just actionable
          insights you can use immediately.
        </p>
      </div>
    </section>
  );
}
