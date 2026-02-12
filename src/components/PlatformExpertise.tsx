export default function PlatformExpertise() {
  return (
    <section className="bg-white px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="text-center font-poppins text-[clamp(1.625rem,3.5vw,2.25rem)] font-bold leading-[1.25] text-[#222222]">
          Shopify + WooCommerce Experts
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Shopify */}
          <div className="rounded-lg border border-[#EDEDED] bg-white p-8 shadow-[0px_2px_5px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden>
                <path
                  fill="#95BF47"
                  d="M15.34 5.54c-.02-.16-.16-.24-.27-.25s-2.34-.04-2.34-.04-.63-.61-.87-.85c-.24-.24-.71-.17-.89-.11-.03.01-.47.14-1.2.37-.12-.35-.33-.8-.65-1.23C8.42 2.51 7.5 2.5 7.25 2.52c-.02 0-.04 0-.06.01-.07-.08-.14-.16-.22-.23C6.54 1.88 6.01 1.7 5.58 1.71c-1.06.02-2.1.8-2.93 2.18C1.82 5.35 1.2 7.13 1.04 8.5c-.8.25-1.36.42-1.43.44C.3 9.13.29 9.14.27 9.41.26 9.62-.5 15.57-.5 15.57l11.73 2.04 5.06-1.23s-1.9-12.67-1.95-12.84z"
                />
              </svg>
              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#222222]">
                  Shopify
                </h3>
                <p className="font-poppins text-sm font-medium text-[#960000]">
                  Certified Shopify Partner
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {[
                "App performance audit & optimization",
                "Liquid theme speed tuning",
                "Checkout flow optimization",
                "Mobile-first performance",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-poppins text-sm text-[#333333]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#960000]" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 font-poppins text-sm italic text-[#7a7a7a]">
              &ldquo;We optimize your apps, theme, and checkout for maximum
              speed and conversion.&rdquo;
            </p>
          </div>

          {/* WooCommerce */}
          <div className="rounded-lg border border-[#EDEDED] bg-white p-8 shadow-[0px_2px_5px_rgba(0,0,0,0.18)]">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-10 w-10" aria-hidden>
                <path
                  fill="#96588A"
                  d="M2.227 4.857A2.228 2.228 0 0 0 0 7.084v8.093c0 .855.483 1.593 1.192 1.965l5.37 2.93a2.23 2.23 0 0 0 2.07 0l5.37-2.93A2.226 2.226 0 0 0 15.195 15.177V7.084a2.228 2.228 0 0 0-2.227-2.227H2.227z"
                />
              </svg>
              <div>
                <h3 className="font-poppins text-xl font-semibold text-[#222222]">
                  WooCommerce
                </h3>
                <p className="font-poppins text-sm font-medium text-[#960000]">
                  WooCommerce Expert
                </p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {[
                "Database query optimization",
                "Plugin audit & management",
                "Hosting configuration tuning",
                "Custom code optimization",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-poppins text-sm text-[#333333]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#960000]" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 font-poppins text-sm italic text-[#7a7a7a]">
              &ldquo;We handle the complexity of WordPress/WooCommerce so you
              can focus on growth.&rdquo;
            </p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-[680px] text-center font-poppins text-base text-[#333333]">
          The only performance + design partner serving both platforms with
          equal depth.{" "}
          <strong>One partner for all your e-commerce needs.</strong>
        </p>
      </div>
    </section>
  );
}
