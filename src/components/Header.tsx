"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "border-b border-[#E8E5E0] shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
        <a
          href="https://wisdmlabs.com"
          aria-label="WisdmLabs Home"
          className="flex items-center gap-2.5"
        >
          <Image
            src="https://wisdmlabs.com/wp-content/uploads/2023/12/cropped-wisdmlabs-logo.webp"
            alt="WisdmLabs"
            width={200}
            height={50}
            className="h-11 w-auto"
            priority
          />
          <span className="font-poppins text-lg font-bold tracking-wide">
            <span className="text-[#4A4A4A]">WISDM</span>
            <span className="text-[#960000]">LABS</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { href: "#what-you-get", label: "What You Get" },
            { href: "#results", label: "Results" },
            { href: "#the-service", label: "The Service" },
            { href: "#faq", label: "FAQ" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-poppins text-sm font-medium text-[#4A4A4A] transition-colors duration-200 hover:text-[#1A1A1A]"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#960000] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#hero-form"
          className="rounded-lg bg-[#960000] px-5 py-2.5 font-poppins text-sm font-semibold text-white shadow-[0_1px_2px_rgba(150,0,0,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7A0000] hover:shadow-[0_2px_8px_rgba(150,0,0,0.25)] active:scale-[0.98]"
        >
          Get Your Free Audit
        </a>
      </div>
    </header>
  );
}
