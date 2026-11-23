"use client";

import React from "react";
import { Globe, Tv, Wifi, ShieldCheck, ArrowRight, Check } from "lucide-react";

interface WhyWebSurferProps {
  onOpenOrder: (planName?: string) => void;
}

export default function WhyWebSurfer({ onOpenOrder }: WhyWebSurferProps) {
  const features = [
    {
      icon: Globe,
      badge: "Pure FTTH",
      stat: "0%",
      statLabel: "Copper Degradation",
      title: "Pure Optical Fiber",
      highlights: [
        "100% glass direct to your home",
        "Equal upload & download speed",
        "Sub-3ms gateway latency",
      ],
      planTarget: "Surfer 150 + TV",
    },
    {
      icon: Tv,
      badge: "Included Free",
      stat: "175+",
      statLabel: "Live HD Channels",
      title: "Sky TV HD Bundle",
      highlights: [
        "Dedicated optical TV VLAN",
        "Zero internet bandwidth sharing",
        "Full HD Sports & 4K movies",
      ],
      planTarget: "Surfer 150 + TV",
    },
    {
      icon: Wifi,
      badge: "Wi-Fi 6 Tech",
      stat: "40+",
      statLabel: "Concurrent Devices",
      title: "GigaMesh Equipment",
      highlights: [
        "Wall-penetrating OFDMA signal",
        "Dual-band 5GHz + 2.4GHz auto-shift",
        "Zero dead zones in your apartment",
      ],
      planTarget: "Surfer 300 Pro",
    },
    {
      icon: ShieldCheck,
      badge: "24/7 Support",
      stat: "< 15m",
      statLabel: "NOC Direct Response",
      title: "Dedicated Kathmandu NOC",
      highlights: [
        "24/7 real human network engineers",
        "Direct phone & WhatsApp hotline",
        "Same-day field technician dispatch",
      ],
      planTarget: "Surfer 80",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header: Big Typography, Minimal Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3EE] text-[#E5440C] text-xs font-black uppercase tracking-wider mb-4">
            <span>ENGINEERED TO DOMINATE</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] mb-4">
            BUILT FOR RAW <br className="hidden sm:inline" />
            <span className="font-serif italic text-[#E5440C] font-normal">
              PERFORMANCE.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            No copper bottlenecks. No sharing ratios. Only uninterrupted optical power.
          </p>
        </div>

        {/* 4 High-Attraction Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-7 rounded-3xl border-2 border-slate-100 hover:border-[#E5440C]/40 bg-white hover:shadow-2xl hover:shadow-[#E5440C]/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Strip */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF3EE] text-[#E5440C] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  {/* Giant Stat Attraction */}
                  <div className="mb-4">
                    <div className="text-4xl sm:text-5xl font-mono-num font-black text-slate-950 tracking-tight leading-none group-hover:text-[#E5440C] transition-colors">
                      {item.stat}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">
                      {item.statLabel}
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-4">
                    {item.title}
                  </h3>

                  {/* Punchy Highlight Bullets */}
                  <ul className="space-y-2 mb-6">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#E5440C] flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <button
                  onClick={() => onOpenOrder(item.planTarget)}
                  className="w-full pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#E5440C] group-hover:text-[#CC3B08] cursor-pointer"
                >
                  <span>Select Package</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
