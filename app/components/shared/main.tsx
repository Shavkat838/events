import React from "react";
import HeroSection from "./heroSection";
import StatsSection from "./statsSection";
import CategoriesSection from "./categoriesSection";
import FeaturSection from "./featurSection";
import ContactSection from './contactSection';


export default function HomePage() {
  return (
    <div className="bg-pure-white  text-dark-charkoal font-sans antialiased min-h-screen">
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturSection />
      <ContactSection />
    </div>
  );
}
