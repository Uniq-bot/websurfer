"use client";

import React from "react";
import { ArrowRight, Phone, Shield, Zap, Server } from "lucide-react";

interface EnterpriseProps {
  onOpenOrder: (planName?: string) => void;
}

export default function EnterpriseSection({ onOpenOrder }: EnterpriseProps) {
  const corporatePerks = [
    {
      icon: Zap,
      stat: "1:1 CIR",
      title: "Guaranteed Bandwidth",
      desc: "Committed Information Rate exclusively provisioned for your organization with zero congestion.",
    },
    {
      icon: Shield,
      stat: "99.99%",
      title: "Dual-Ring Redundancy",
      desc: "Automatic optical failover across distinct physical routes so banking and cloud operations never drop.",
    },
    {
      icon: Server,
      stat: "10 Gbps+",
      title: "Static IP & BGP Routing",
      desc: "Public static IPv4/IPv6 blocks and direct cross-connect to Nepal's Tier-3 data centers.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white" id="enterprise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-[#0B0F19] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl border border-white/10">
          
          {/* Subtle Ambient glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5440C]/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#FF7A45] text-xs font-black uppercase tracking-wider mb-4">
              <span>ENTERPRISE & MISSION-CRITICAL</span>
            </div>

            {/* Massive Punchy Headline */}
            <h2 className="text-4xl sm:text-6xl font-black text-white max-w-3xl leading-[1.02] mb-4">
              DEDICATED LEASED <br />
              <span className="font-serif italic text-[#FF8F68] font-normal">
                CORPORATE FIBER.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-medium mb-12">
              Powering banks, fintech hubs, healthcare, and enterprises across Nepal with uncompromising optical SLAs.
            </p>

            {/* 3 High-Impact Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {corporatePerks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={perk.title}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E5440C]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl font-mono-num font-black text-[#FF7A45]">
                          {perk.stat}
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-white/10 text-[#FF7A45] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <h4 className="text-base font-black text-white mb-2">
                        {perk.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-medium">
                        {perk.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => onOpenOrder("Corporate Leased Line")}
                className="inline-flex items-center gap-2.5 bg-[#E5440C] hover:bg-[#CC3B08] text-white text-sm font-bold px-8 py-4 rounded-full shadow-xl shadow-[#E5440C]/30 transition-all cursor-pointer"
              >
                <span>Enterprise Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:015970222"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4 text-[#FF7A45]" />
                <span>NOC Hotline: 01-5970222</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
