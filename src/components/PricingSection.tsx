"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Sparkles, Tv, Wifi } from "lucide-react";

interface PricingProps {
  onOpenOrder: (planName?: string) => void;
}

export default function PricingSection({ onOpenOrder }: PricingProps) {
  const [period, setPeriod] = useState<"yearly" | "quarterly" | "monthly">("yearly");

  const plans = [
    {
      id: "surfer80",
      tag: "STANDARD",
      name: "Surfer 80",
      speed: 80,
      ideal: "Work & Streaming",
      price: {
        yearly: "9,999",
        quarterly: "3,150",
        monthly: "1,150",
      },
      featured: false,
      perks: [
        "Unlimited Pure Fiber Data",
        "Dual-Band 5GHz Router Included",
        "Free Optical Drop Cable",
        "Sky TV Optional Add-on",
      ],
    },
    {
      id: "surfer150",
      tag: "FLAGSHIP BUNDLE",
      name: "Surfer 150 + TV",
      speed: 150,
      ideal: "4K Home & Family",
      price: {
        yearly: "12,499",
        quarterly: "3,850",
        monthly: "1,399",
      },
      featured: true,
      perks: [
        "Sky TV HD Included (175+ Channels)",
        "Dual-Band AC Gigabit Router",
        "Zero Throttling • Low Ping",
        "Free Setup & Set-Top Box",
        "Priority 24/7 Field Support",
      ],
    },
    {
      id: "surfer300",
      tag: "ULTRA PRO",
      name: "Surfer 300 Pro",
      speed: 300,
      ideal: "Esports & Creators",
      price: {
        yearly: "16,499",
        quarterly: "4,950",
        monthly: "1,799",
      },
      featured: false,
      perks: [
        "Wi-Fi 6 (802.11ax) Gigabit Router",
        "Gaming FastPath Low Latency",
        "Sky TV Full HD Included",
        "Multi-Device Mesh Support",
        "VIP Dedicated NOC Escalation",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50/70 border-y border-slate-200/70" id="plans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF3EE] text-[#E5440C] text-xs font-black uppercase tracking-wider mb-3">
            <span>HONEST TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] mb-4">
            CHOOSE YOUR <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#E5440C] font-normal">
              FIBER SPEED.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mb-8">
            Free router equipment, zero installation fees, and unconditional unlimited data.
          </p>

          {/* Billing Cycle Switcher with Savings Badge */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setPeriod("yearly")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                period === "yearly"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>12 Months</span>
              <span className="text-[10px] font-black bg-[#E5440C] text-white px-2 py-0.5 rounded-full">
                2 Mos Free
              </span>
            </button>

            <button
              onClick={() => setPeriod("quarterly")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                period === "quarterly"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              3 Months
            </button>

            <button
              onClick={() => setPeriod("monthly")}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                period === "monthly"
                  ? "bg-slate-900 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* 3 Pricing Attraction Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 sm:p-9 bg-white transition-all duration-300 flex flex-col justify-between ${
                plan.featured
                  ? "border-3 border-[#E5440C] shadow-2xl shadow-[#E5440C]/15 transform lg:-translate-y-3"
                  : "border-2 border-slate-200 hover:border-slate-300 shadow-md hover:shadow-xl"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E5440C] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-[#E5440C]/30 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#E5440C]">
                    {plan.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {plan.ideal}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-slate-950 mb-4">
                  {plan.name}
                </h3>

                {/* Big Speed Block */}
                <div
                  className={`p-4 rounded-2xl flex items-baseline justify-between mb-6 ${
                    plan.featured ? "bg-[#FFF3EE]" : "bg-slate-50"
                  }`}
                >
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-5xl font-mono-num font-black leading-none ${
                        plan.featured ? "text-[#E5440C]" : "text-slate-950"
                      }`}
                    >
                      {plan.speed}
                    </span>
                    <span className="text-base font-black text-slate-800 uppercase">
                      Mbps
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Symmetric 1:1
                  </span>
                </div>

                {/* Big Price Block */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-slate-400">NPR</span>
                    <span
                      className={`text-4xl font-mono-num font-black ${
                        plan.featured ? "text-[#E5440C]" : "text-slate-950"
                      }`}
                    >
                      {plan.price[period]}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      /{period === "yearly" ? "year" : period === "quarterly" ? "3 mos" : "mo"}
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-400 mt-1">
                    + Government Taxes (13% VAT)
                  </div>
                </div>

                {/* Short, Punchy Perks */}
                <ul className="space-y-3 pt-6 border-t border-slate-100 text-xs font-semibold text-slate-700 mb-8">
                  {plan.perks.map((perk, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.featured
                            ? "bg-[#FFF3EE] text-[#E5440C]"
                            : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className={plan.featured && fIdx === 0 ? "font-black text-slate-950" : ""}>
                        {perk}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenOrder(plan.name)}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 ${
                  plan.featured
                    ? "bg-[#E5440C] hover:bg-[#CC3B08] text-white shadow-xl shadow-[#E5440C]/25 hover:shadow-2xl"
                    : "bg-slate-950 hover:bg-[#E5440C] text-white"
                }`}
              >
                <span>Select {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Corporate Leased Line Strip */}
        <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-lg font-black text-slate-900 mb-1">
              Need 1:1 Dedicated Corporate Leased Line?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Guaranteed CIR, static IP blocks, and redundant fiber rings with 99.99% SLA across Nepal.
            </p>
          </div>
          <button
            onClick={() => onOpenOrder("Corporate Leased Line")}
            className="flex-shrink-0 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-[#E5440C] text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
          >
            Enterprise Inquiry &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
