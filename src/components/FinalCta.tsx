export default function FinalCta() {
  return (
    <section className="bg-[#0A0A0A] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[680px] text-center">
        <h2 className="font-poppins text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.2] tracking-[-0.02em] text-white">
          Your Store Is Leaking Revenue Right Now.
          <br />
          <span className="text-[#960000]">Find Out Exactly How Much.</span>
        </h2>
        <p className="mt-5 font-poppins text-lg text-white/60">
          Request your free CRO + performance audit. Delivered to your inbox in
          24 hours. No strings attached.
        </p>
        <a
          href="#hero-form"
          className="mt-8 inline-block rounded-lg bg-[#960000] px-8 py-4 font-poppins text-base font-semibold text-white shadow-[0_1px_2px_rgba(150,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7A0000] hover:shadow-[0_2px_8px_rgba(150,0,0,0.25)] active:scale-[0.98]"
        >
          Get My Free Store Audit
        </a>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 font-poppins text-xs text-white/40">
          {[
            "Free forever",
            "No credit card",
            "Delivered in 24 hours",
            "Expert-reviewed",
          ].map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && (
                <span className="hidden text-white/20 sm:inline">&bull;</span>
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
