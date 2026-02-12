import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E5E0] bg-[#0A0A0A] px-6 py-14 md:py-18">
      <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-5">
        {/* Logo & Description */}
        <div className="md:col-span-1">
          <Image
            src="https://wisdmlabs.com/wp-content/uploads/2023/12/cropped-wisdmlabs-logo.webp"
            alt="WisdmLabs"
            width={140}
            height={35}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-4 font-poppins text-sm leading-relaxed text-white/40">
            The tech team your ecommerce store deserves. Design, CRO,
            performance, and hosting for Shopify &amp; WooCommerce.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h5 className="font-poppins text-sm font-semibold text-white">
            About Us
          </h5>
          <ul className="mt-4 space-y-2.5">
            {["About WisdmLabs", "Our Team", "Careers", "Contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href="https://wisdmlabs.com"
                    className="font-poppins text-sm text-white/40 transition-colors hover:text-white"
                  >
                    {link}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h5 className="font-poppins text-sm font-semibold text-white">
            Services
          </h5>
          <ul className="mt-4 space-y-2.5">
            {[
              "Wisdm-HPC",
              "Ecommerce Design",
              "Conversion Optimization",
              "Managed Hosting",
            ].map((link) => (
              <li key={link}>
                <a
                  href="https://wisdmlabs.com"
                  className="font-poppins text-sm text-white/40 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h5 className="font-poppins text-sm font-semibold text-white">
            Connect
          </h5>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href="mailto:sales@wisdmlabs.com"
                className="font-poppins text-sm text-white/40 transition-colors hover:text-white"
              >
                sales@wisdmlabs.com
              </a>
            </li>
            {["LinkedIn", "YouTube", "Dribbble"].map((link) => (
              <li key={link}>
                <a
                  href="https://wisdmlabs.com"
                  className="font-poppins text-sm text-white/40 transition-colors hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Offices */}
        <div>
          <h5 className="font-poppins text-sm font-semibold text-white">
            Offices
          </h5>
          <ul className="mt-4 space-y-2.5">
            {[
              "Newark, Delaware, USA",
              "Mumbai, India",
              "RAK, UAE",
            ].map((office) => (
              <li
                key={office}
                className="font-poppins text-sm text-white/40"
              >
                {office}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 md:flex-row">
        <p className="font-poppins text-xs text-white/25">
          &copy; {new Date().getFullYear()} WisdmLabs. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://wisdmlabs.com/privacy-policy"
            className="font-poppins text-xs text-white/25 transition-colors hover:text-white/60"
          >
            Privacy Policy
          </a>
          <a
            href="https://wisdmlabs.com/terms-of-service"
            className="font-poppins text-xs text-white/25 transition-colors hover:text-white/60"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
