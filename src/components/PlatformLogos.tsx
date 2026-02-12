"use client";

import { useEffect, useRef, useState } from "react";

/* Platform logos using brand colors, clean icons, and bold wordmarks. */

const ShopifyLogo = () => (
  <div className="flex items-center gap-2.5">
    {/* Shopify shopping bag icon */}
    <svg viewBox="0 0 32 36" className="h-8 w-auto" fill="none">
      <path
        d="M25.6 7.2c0-.1-.1-.2-.2-.2-.1 0-2.2-.2-2.2-.2s-1.5-1.5-1.7-1.7c-.2-.2-.5-.1-.6-.1l-.9.3c-.5-1.5-1.4-2.9-3-2.9h-.2C16.1 1.6 15.3 1 14.5 1c-3.7 0-5.5 4.7-6 7l-2.6.8c-.8.2-.8.3-.9 1L2.7 29.3l18.9 3.5L27 31s-1.4-23.6-1.4-23.8zM18 5.6l-1.5.5c0-.1 0-.2 0-.4 0-1.1-.2-2-.4-2.7.9.2 1.5 1.2 1.9 2.6zm-3.3 1c-1 .3-2.2.7-3.3 1 .6-2.4 1.8-3.6 2.8-4 .4.8.5 1.8.5 3zm-2-5c.2 0 .5.1.7.3-1.3.6-2.8 2.2-3.4 5.3l-2.6.8C8.2 5.7 10 2.6 12.7 2.6z"
        fill="#95BF47"
      />
      <path
        d="M25.4 7c-.1 0-2.2-.2-2.2-.2s-1.5-1.5-1.7-1.7c-.1-.1-.1-.1-.2-.1l-1.3 26.8 7.4-1.6S25.6 7.2 25.4 7z"
        fill="#5E8E3E"
      />
      <path
        d="M14.7 12.4l-1 3.1s-1.2-.5-2.5-.5c-2 0-2.1 1.3-2.1 1.6 0 1.7 4.5 2.4 4.5 6.4 0 3.2-2 5.2-4.7 5.2-3.3 0-4.9-2-4.9-2l.9-2.9s1.7 1.5 3.2 1.5c1 0 1.3-.8 1.3-1.3 0-2.3-3.7-2.4-3.7-6.1 0-3.1 2.3-6.2 6.8-6.2 1.8.1 2.2.2 2.2.2z"
        fill="white"
      />
    </svg>
    <span className="font-poppins text-[24px] font-bold tracking-[-0.02em] text-[#5E8E3E]">
      Shopify
    </span>
  </div>
);

const WooCommerceLogo = () => (
  <div className="flex items-center gap-2.5">
    {/* WooCommerce speech bubble icon */}
    <svg viewBox="0 0 32 32" className="h-8 w-auto" fill="none">
      <path
        d="M3 5h26a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H18l-4.5 5.5L12 24H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
        fill="#9B5C8F"
      />
      <path
        d="M7 11c.5 2.5 1.2 5 2 5s1.2-1.8 2-4.2c.6 2.4 1.2 4.2 2 4.2s1.4-2.5 2-5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="20" cy="13" rx="2.3" ry="2.5" stroke="white" strokeWidth="1.8" fill="none" />
      <ellipse cx="26" cy="13" rx="2.3" ry="2.5" stroke="white" strokeWidth="1.8" fill="none" />
    </svg>
    <span className="font-poppins text-[24px] font-bold tracking-[-0.02em] text-[#9B5C8F]">
      Woo<span className="font-medium">Commerce</span>
    </span>
  </div>
);

const BigCommerceLogo = () => (
  <div className="flex items-center gap-2.5">
    {/* BigCommerce "B" hexagon icon */}
    <svg viewBox="0 0 32 32" className="h-8 w-auto" fill="none">
      <path
        d="M16 2l12.5 7.2v14.4L16 30 3.5 23.6V9.2L16 2z"
        fill="#121118"
      />
      <path
        d="M10 11h5.5c2 0 3 .9 3 2.2 0 1-.6 1.7-1.4 2 1 .3 1.8 1.1 1.8 2.3 0 1.6-1.2 2.5-3.2 2.5H10V11z"
        fill="white"
      />
      <path
        d="M12.5 13v2.2h2.5c.7 0 1.1-.4 1.1-.9v-.3c0-.6-.4-1-1.1-1h-2.5zM12.5 17.2v2.3h2.8c.8 0 1.3-.4 1.3-1.1 0-.7-.5-1.2-1.3-1.2h-2.8z"
        fill="#121118"
      />
    </svg>
    <span className="font-poppins text-[24px] font-bold tracking-[-0.02em] text-[#121118]">
      Big<span className="font-medium">Commerce</span>
    </span>
  </div>
);

const MagentoLogo = () => (
  <div className="flex items-center gap-2.5">
    {/* Magento "M" chevron icon */}
    <svg viewBox="0 0 32 32" className="h-8 w-auto" fill="none">
      <path d="M16 2L4 9.5v15L8.5 27V12l7.5-4.5L23.5 12v15l4.5-2.5v-15L16 2z" fill="#F26322" />
      <path d="M16 13.5v15l-3.5-2V11.5L16 13.5z" fill="#F26322" opacity="0.7" />
      <path d="M19.5 11.5v15l-3.5 2v-15l3.5-2z" fill="#F26322" opacity="0.85" />
    </svg>
    <span className="font-poppins text-[24px] font-bold tracking-[-0.02em] text-[#F26322]">
      Magento
    </span>
  </div>
);

const platforms = [
  { name: "Shopify", Logo: ShopifyLogo },
  { name: "WooCommerce", Logo: WooCommerceLogo },
  { name: "BigCommerce", Logo: BigCommerceLogo },
  { name: "Magento", Logo: MagentoLogo },
];

export default function PlatformLogos() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-b border-[#E8E5E0] bg-white px-6 py-14">
      <div ref={ref} className="mx-auto max-w-[1280px]">
        <p className="text-center font-poppins text-[13px] font-medium uppercase tracking-[0.08em] text-[#8A8A8A]">
          Works with every major ecommerce platform
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-16">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className="transition-all duration-500 hover:scale-105"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.6s ease-out ${i * 120}ms`,
              }}
            >
              <p.Logo />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
