import { LandingNavbar } from "@/components/landing/landing-navbar";
import { LandingHero } from "@/components/landing/landing-hero";
const LandingPage = () => {
  return (
    <div className="h-screen">
      <LandingNavbar />
      <LandingHero />
    </div>
  );
};

export default LandingPage;
