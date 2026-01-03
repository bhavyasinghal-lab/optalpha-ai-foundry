import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { WhyOptAlphaSection } from "@/components/sections/WhyOptAlphaSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <TechnologySection />
      <WhyOptAlphaSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
