"use client";

import { useState, useEffect, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  storeUrl: string;
  platform: string;
  revenue: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  storeUrl?: string;
  platform?: string;
}

export default function HeroAudit() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    storeUrl: "",
    platform: "",
    revenue: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFormVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (formData.name.trim().length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Please enter a valid email address.";
    if (
      !/^https?:\/\/.+\..+/.test(formData.storeUrl) &&
      formData.storeUrl.trim().length > 0
    ) {
      errs.storeUrl = "Please enter a valid URL (e.g. https://yourstore.com).";
    }
    if (!formData.storeUrl.trim()) errs.storeUrl = "Please enter your store URL.";
    if (!formData.platform) errs.platform = "Please select your platform.";
    return errs;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setSubmitError(null);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);

    try {
      const res = await fetch("/api/submit-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.error || "Submission failed. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email sales@wisdmlabs.com.";
      setSubmitError(message);
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-lg border bg-[#FAFAFA] px-4 py-3.5 font-poppins text-base text-[#1A1A1A] outline-none transition-all placeholder:text-[#8A8A8A]";
  const inputFocus =
    "focus:border-[#960000] focus:shadow-[0_0_0_3px_rgba(150,0,0,0.08)]";
  const inputError = "border-red-500 focus:border-red-500";
  const inputNormal = "border-[#E8E5E0]";

  const checkSvg = (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-[#10B981]"
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
  );

  return (
    <section
      id="hero-form"
      className="relative overflow-hidden bg-white px-6 pb-20 pt-28 md:pb-28 md:pt-36"
    >
      {/* Subtle background grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative accent line */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#960000] to-transparent opacity-40" />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left Column: Copy ── */}
          <div className="max-w-[560px]">
            {/* Eyebrow */}
            <p className="font-poppins text-[13px] font-medium uppercase tracking-[0.08em] text-[#960000]">
              Free CRO + Performance Audit
            </p>

            {/* Headline */}
            <h1 className="mt-5 font-poppins text-[clamp(2.25rem,5vw,3.25rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#1A1A1A]">
              Discover Exactly Where
              <br className="hidden sm:block" />
              Your Store Is{" "}
              <span className="relative text-[#960000]">
                Leaking Revenue
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 280 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 5.5C40 2.5 80 3 140 4.5C200 6 240 3 278 5"
                    stroke="#960000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.3"
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 max-w-[480px] font-poppins text-lg leading-relaxed text-[#4A4A4A]">
              Get a comprehensive CRO + technical performance audit that shows
              you every conversion leak, its revenue impact, and exactly how to
              fix it. Delivered to your inbox within 24 hours. Completely free.
            </p>

            {/* Value Props */}
            <div className="mt-8 space-y-3">
              {[
                "Revenue leakage assessment with dollar amounts",
                "CRO + technical performance analysis combined",
                "Custom implementation roadmap to fix every issue",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  {checkSvg}
                  <span className="font-poppins text-[15px] font-medium text-[#1A1A1A]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-5 font-poppins text-sm text-[#8A8A8A]">
              {[
                "Delivered in 24 hours",
                "No credit card required",
                "100% free, no strings attached",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-[#10B981]"
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
                  {item}
                </span>
              ))}
            </div>

          </div>

          {/* ── Right Column: Form Card ── */}
          <div
            className="transition-all duration-700 ease-out"
            style={{
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? "translateX(0)" : "translateX(24px)",
            }}
          >
            {submitted ? (
              /* ── Success State ── */
              <div className="rounded-2xl border border-[#E8E5E0] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                <div className="text-center">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#10B981]/20 bg-[#10B981]/10">
                    <svg
                      className="h-8 w-8 text-[#10B981]"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h3 className="font-poppins text-xl font-bold text-[#1A1A1A]">
                    Your Audit Is Being Prepared!
                  </h3>
                  <p className="mt-3 font-poppins text-sm leading-relaxed text-[#4A4A4A]">
                    Check your email within 24 hours for your complete revenue
                    leakage report and implementation roadmap.
                  </p>
                  <p className="mt-4 font-poppins text-xs text-[#8A8A8A]">
                    Didn&rsquo;t receive it? Check spam or email us at{" "}
                    <span className="font-medium text-[#960000]">
                      sales@wisdmlabs.com
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              /* ── Form ── */
              <div className="rounded-2xl border border-[#E8E5E0] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                {/* Form Header */}
                <div className="mb-6">
                  <h2 className="font-poppins text-xl font-semibold text-[#1A1A1A]">
                    Get Your Free Store Audit
                  </h2>
                  <p className="mt-1 font-poppins text-sm text-[#8A8A8A]">
                    Takes 60 seconds. Delivered in 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="audit-name"
                      className="mb-1.5 block font-poppins text-sm font-medium text-[#1A1A1A]"
                    >
                      Name
                    </label>
                    <input
                      id="audit-name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`${inputBase} ${inputFocus} ${errors.name ? inputError : inputNormal}`}
                    />
                    {errors.name && (
                      <p className="mt-1 font-poppins text-xs text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="audit-email"
                      className="mb-1.5 block font-poppins text-sm font-medium text-[#1A1A1A]"
                    >
                      Email
                    </label>
                    <input
                      id="audit-email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`${inputBase} ${inputFocus} ${errors.email ? inputError : inputNormal}`}
                    />
                    {errors.email && (
                      <p className="mt-1 font-poppins text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Store URL */}
                  <div>
                    <label
                      htmlFor="audit-url"
                      className="mb-1.5 block font-poppins text-sm font-medium text-[#1A1A1A]"
                    >
                      Store URL
                    </label>
                    <input
                      id="audit-url"
                      type="url"
                      placeholder="https://yourstore.com"
                      value={formData.storeUrl}
                      onChange={(e) =>
                        setFormData({ ...formData, storeUrl: e.target.value })
                      }
                      className={`${inputBase} ${inputFocus} ${errors.storeUrl ? inputError : inputNormal}`}
                    />
                    {errors.storeUrl && (
                      <p className="mt-1 font-poppins text-xs text-red-600">
                        {errors.storeUrl}
                      </p>
                    )}
                  </div>

                  {/* Platform */}
                  <div>
                    <label
                      htmlFor="audit-platform"
                      className="mb-1.5 block font-poppins text-sm font-medium text-[#1A1A1A]"
                    >
                      Platform
                    </label>
                    <select
                      id="audit-platform"
                      value={formData.platform}
                      onChange={(e) =>
                        setFormData({ ...formData, platform: e.target.value })
                      }
                      className={`${inputBase} ${inputFocus} ${!formData.platform ? "text-[#8A8A8A]" : ""} ${errors.platform ? inputError : inputNormal}`}
                    >
                      <option value="" disabled>
                        Select your platform
                      </option>
                      <option value="shopify">Shopify</option>
                      <option value="woocommerce">WooCommerce</option>
                      <option value="bigcommerce">BigCommerce</option>
                      <option value="magento">Magento</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.platform && (
                      <p className="mt-1 font-poppins text-xs text-red-600">
                        {errors.platform}
                      </p>
                    )}
                  </div>

                  {/* Monthly Revenue (optional) */}
                  <div>
                    <label
                      htmlFor="audit-revenue"
                      className="mb-1.5 block font-poppins text-sm font-medium text-[#1A1A1A]"
                    >
                      Monthly Revenue{" "}
                      <span className="font-normal text-[#8A8A8A]">
                        (optional)
                      </span>
                    </label>
                    <select
                      id="audit-revenue"
                      value={formData.revenue}
                      onChange={(e) =>
                        setFormData({ ...formData, revenue: e.target.value })
                      }
                      className={`${inputBase} ${inputFocus} ${!formData.revenue ? "text-[#8A8A8A]" : ""} ${inputNormal}`}
                    >
                      <option value="" disabled>
                        Estimated monthly revenue
                      </option>
                      <option value="under-10k">Under $10K</option>
                      <option value="10k-50k">$10K–$50K</option>
                      <option value="50k-100k">$50K–$100K</option>
                      <option value="100k-500k">$100K–$500K</option>
                      <option value="500k-plus">$500K+</option>
                      <option value="prefer-not">Prefer not to say</option>
                    </select>
                  </div>

                  {/* Submission Error Banner */}
                  {submitError && (
                    <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                      <p className="font-poppins text-sm text-red-700">
                        {submitError}
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="mt-2 w-full rounded-lg bg-[#960000] py-4 font-poppins text-base font-semibold text-white shadow-[0_1px_2px_rgba(150,0,0,0.2)] transition-all duration-300 hover:bg-[#7A0000] hover:shadow-[0_2px_8px_rgba(150,0,0,0.25)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? (
                      <span className="inline-flex items-center gap-2">
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="opacity-25"
                          />
                          <path
                            d="M4 12a8 8 0 018-8"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Get My Free Audit"
                    )}
                  </button>
                </form>

                {/* Security Note */}
                <div className="mt-4 flex items-center justify-center gap-1.5">
                  <svg
                    className="h-3.5 w-3.5 text-[#8A8A8A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  <span className="font-poppins text-xs text-[#8A8A8A]">
                    Your data is secure. We never share your information.
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
