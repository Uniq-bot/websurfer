"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

interface PricingProps {
  onOpenOrder: (planName?: string) => void;
}

export default function PricingSection({ onOpenOrder }: PricingProps) {
  const [period, setPeriod] = useState<"yearly" | "quarterly" | "monthly">("yearly");

  const plans = [
    {
      id: "surfer80",
      category: "HOME BASIC",
      name: "Surfer 80",
      speed: 80,
      desc: "Ideal for small apartments, HD streaming, and everyday remote work.",
      price: {
        yearly: "9,999",
        quarterly: "3,150",
        monthly: "1,150",
      },
      featured: false,
      features: [
        "Unlimited Fiber Data (Zero FUP Cap)",
        "Dual-Band 5GHz Fiber ONU Router",
        "Free Drop Fiber Cable (up to 100m)",
        "Standard Sky TV Add-on Available",
        "99.9% Uptime Guarantee",
      ],
    },
    {
      id: "surfer150",
      category: "FAMILY & STREAMER",
      name: "Surfer 150 + TV",
      speed: 150,
      desc: "Our flagship speed for 4K streaming, multi-device households, and creators.",
      price: {
        yearly: "12,499",
        quarterly: "3,850",
        monthly: "1,399",
      },
      featured: true,
      features: [
        "Sky TV HD Included (175+ Channels)",
        "Free High-Gain Dual Band AC Router",
        "Zero Throttling • Low Latency Routing",
        "Free Fiber Drop Cable & Set-Top Box",
        "Priority 24/7 Field & NOC Dispatch",
      ],
    },
    {
      id: "surfer300",
      category: "POWER USER & GAMING",
      name: "Surfer 300 Pro",
      speed: 300,
      desc: "Wi-Fi 6 technology, ultra-low ping for competitive esports & smart homes.",
      price: {
        yearly: "16,499",
        quarterly: "4,950",
        monthly: "1,799",
      },
      featured: false,
      features: [
        "Wi-Fi 6 (802.11ax) Gigabit Equipment",
        "Low Latency Gaming FastPath Routing",
        "Sky TV Full HD + Multi-TV Support",
        "Priority 1-Hour SLA Customer Support",
        "Free Mesh Pod with Annual Booking",
      ],
    },
  ];

  return (
    <section className="py-24 bg-slate-50/70 border-y border-slate-200/70" id="plans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-widest text-[#E5440C] uppercase mb-3">
            TRANSPARENT PLANS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 mb-4">
            <span className="font-sans font-bold">Select Your</span>{" "}
            <span className="font-serif italic text-[#E5440C]">Fiber Speed</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed mb-8 font-sans">
            Clean, predictable pricing with no hidden bandwidth caps or surprise throttling.
          </p>

          {/* Billing Cycle Tabs */}
          <div className="inline-flex items-center p-1.5  bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setPeriod("yearly")}
              className={`px-5 py-2  text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${period === "yearly"
                  ? "bg-slate-900 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
                }`}
            >
              <span>Annual (12 Months)</span>
              <span className="text-[10px] font-bold bg-[#E5440C] text-white px-2 py-0.5 ">
                Best Value • 2 Mos Free
              </span>
            </button>

            <button
              onClick={() => setPeriod("quarterly")}
              className={`px-4 py-2  text-xs sm:text-sm font-semibold transition-all cursor-pointer ${period === "quarterly"
                  ? "bg-slate-900 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Quarterly (3 Mos)
            </button>

            <button
              onClick={() => setPeriod("monthly")}
              className={`px-4 py-2  text-xs sm:text-sm font-semibold transition-all cursor-pointer ${period === "monthly"
                  ? "bg-slate-900 text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
                }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative  p-8 sm:p-9 bg-white transition-all duration-300 flex flex-col justify-between ${plan.featured
                  ? "border-2 border-[#E5440C] shadow-2xl shadow-[#E5440C]/10 transform lg:-translate-y-2"
                  : "border border-slate-200 hover:border-slate-300 shadow-md hover:shadow-xl"
                }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E5440C] text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1  shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {plan.category}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {plan.desc}
                </p>

                {/* Speed Ribbon */}
                <div
                  className={`p-4  flex items-baseline gap-2 mb-6 ${plan.featured ? "bg-[#FFF3EE]" : "bg-slate-50"
                    }`}
                >
                  <span
                    className={`text-4xl font-mono-num font-extrabold leading-none ${plan.featured ? "text-[#E5440C]" : "text-slate-900"
                      }`}
                  >
                    {plan.speed}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-800 uppercase">
                      Mbps
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase">
                      Pure Symmetric
                    </span>
                  </div>
                </div>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs font-bold text-slate-500">NPR</span>
                    <span
                      className={`text-3xl font-mono-num font-extrabold ${plan.featured ? "text-[#E5440C]" : "text-slate-900"
                        }`}
                    >
                      {plan.price[period]}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      /{period === "yearly" ? "year" : period === "quarterly" ? "3 mos" : "month"}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    + Applicable Government Taxes (13% VAT)
                  </div>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-3 pt-6 border-t border-slate-100 text-xs text-slate-600 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <div
                        className={`w-4 h-4  flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.featured
                            ? "bg-[#FFF3EE] text-[#E5440C]"
                            : "bg-emerald-50 text-emerald-600"
                          }`}
                      >
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <span className={plan.featured && fIdx === 0 ? "font-bold text-slate-900" : ""}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenOrder(plan.name)}
                className={`w-full py-3.5 px-6  font-semibold text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${plan.featured
                    ? "bg-[#E5440C] hover:bg-[#CC3B08] text-white shadow-lg shadow-[#E5440C]/25 hover:shadow-xl hover:shadow-[#E5440C]/35"
                    : "bg-slate-900 hover:bg-[#E5440C] text-white hover:shadow-md"
                  }`}
              >
                <span>Select {plan.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Corporate Leased Line Callout */}
        <div className="bg-white border border-slate-200  p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-1">
              Need dedicated leased lines or high-volume enterprise bandwidth?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              We provide guaranteed 1:1 CIR, static IP blocks, and redundant fiber rings with 99.99% SLA across Nepal.
            </p>
          </div>
          <button
            onClick={() => onOpenOrder("Corporate Leased Line")}
            className="flex-shrink-0 px-6 py-3  border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold hover:border-[#E5440C] hover:text-[#E5440C] transition-all cursor-pointer"
          >
            Enterprise Inquiry &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
