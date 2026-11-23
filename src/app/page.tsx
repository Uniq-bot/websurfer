"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import WhyWebSurfer from "@/components/WhyWebSurfer";
import PricingSection from "@/components/PricingSection";
import SpeedLab from "@/components/SpeedLab";
import CoverageChecker from "@/components/CoverageChecker";
import EnterpriseSection from "@/components/EnterpriseSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Surfer 150 + TV");

  const handleOpenOrder = (planName?: string) => {
    if (planName) {
      setSelectedPlan(planName);
    }
    setModalOpen(true);
  };

  const handleCloseOrder = () => {
    setModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#E5440C] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenOrder={handleOpenOrder} />

      {/* Hero Section */}
      <Hero onOpenOrder={handleOpenOrder} />

      {/* Peering Partners Marquee */}
      <TrustMarquee />

      {/* 4-Pillar Features */}
      <WhyWebSurfer onOpenOrder={handleOpenOrder} />

      {/* Pricing / Packages */}
      <PricingSection onOpenOrder={handleOpenOrder} />

      {/* Interactive Speed Lab & Gauge */}
      <SpeedLab />

      {/* Live Coverage Availability Checker */}
      <CoverageChecker />

      {/* Enterprise Solutions */}
      <EnterpriseSection onOpenOrder={handleOpenOrder} />

      {/* Minimal FAQ Accordion */}
      <FAQSection />

      {/* Final Vibrant CTA Banner */}
      <FinalCTA onOpenOrder={handleOpenOrder} />

      {/* Footer */}
      <Footer />

      {/* Connection Order Modal */}
      <OrderModal
        isOpen={modalOpen}
        initialPlan={selectedPlan}
        onClose={handleCloseOrder}
      />
    </main>
  );
}
