import Header from "@/components/Header";
import HeroAudit from "@/components/HeroAudit";
import StatsBar from "@/components/StatsBar";
import PlatformLogos from "@/components/PlatformLogos";
import RevenueLeakage from "@/components/RevenueLeakage";
import AuditContents from "@/components/AuditContents";
import AuditProcess from "@/components/AuditProcess";
import SocialProof from "@/components/SocialProof";
import ServiceOverview from "@/components/ServiceOverview";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroAudit />
        <StatsBar />
        <PlatformLogos />
        <RevenueLeakage />
        <AuditContents />
        <AuditProcess />
        <SocialProof />
        <ServiceOverview />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
