import React from "react";
import HeroSection from "./heroSection";
import StatsSection from "./statsSection";
import CategoriesSection from "./categoriesSection";
import FeaturSection from "./featurSection";
import ContactSection from './contactSection';
import Footer from "./footer";

export default function HomePage() {


  // Yaqin oradagi tadbirlar uchun namunaviy ma'lumotlar
  const featuredEvents = [
    {
      id: 1,
      title: "Uzbekistan UI/UX Design uchrashuvi 2026",
      date: "25 Iyul, 18:30",
      type: "Offline",
      speaker: "Azizbek Raximov",
      badge: "Top",
    },
    {
      id: 2,
      title: "Next.js va Jamstack arxitekturasi",
      date: "02 Avgust, 20:00",
      type: "Online",
      speaker: "Shaxzod Aliyev",
      badge: "Bepul",
    },
    {
      id: 3,
      title: "Startaplarni nolga investitsiya bilan boshlash",
      date: "15 Avgust, 15:00",
      type: "Offline",
      speaker: "Farhod Mahmudov",
      badge: "Qizg'in",
    },
  ];

  return (
    <div className="bg-pure-white  text-dark-charkoal font-sans antialiased min-h-screen">
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <FeaturSection />
      <ContactSection />
      {/* 🏁 FOOTER */}
      <Footer />
    </div>
  );
}
