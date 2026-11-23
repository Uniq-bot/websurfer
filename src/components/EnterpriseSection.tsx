import React from "react";
import { ArrowRight, Phone } from "lucide-react";

interface EnterpriseProps {
  onOpenOrder: (planName?: string) => void;
}

export default function EnterpriseSection({ onOpenOrder }: EnterpriseProps) {
  const corporatePerks = [
    {
      num: "01",
      title: "Dedicated 1:1 Symmetrical CIR",
      desc: "Committed Information Rate exclusively provisioned for your organization with zero peak-hour jitter or congestion.",
    },
    {
      num: "02",
      title: "Dual-Ring Underground Redundancy",
      desc: "Automatic failover across distinct physical optical rings so your banking or cloud operations never drop.",
    },
    {
      num: "03",
      title: "Static IPv4 / IPv6 Subnets & BGP",
      desc: "Tailored routing configuration, public static IP pools, and direct cross-connect to major data centers in Nepal.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="enterprise">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-[#0F172A] text-white p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E5440C]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="text-xs font-bold tracking-widest text-[#FF7A45] uppercase mb-3">
              ENTERPRISE & MISSION-CRITICAL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white max-w-2xl mb-4">
              <span className="font-sans font-bold">Built for</span>{" "}
              <span className="font-serif italic text-[#FF8F68]">Mission-Critical</span>{" "}
              <span className="font-sans font-bold">Corporate Infrastructure</span>
            </h2>
            <p className="text-base text-slate-300 max-w-2xl leading-relaxed mb-12">
              Empower your corporate office, fintech branch, hospital, or data center with WebSurfer’s dedicated leased line infrastructure backed by an uncompromising 99.99% SLA.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {corporatePerks.map((perk) => (
                <div key={perk.num} className="flex flex-col">
                  <div className="text-xl font-mono-num font-extrabold text-[#E5440C] mb-2">
                    {perk.num}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {perk.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => onOpenOrder("Corporate Leased Line")}
                className="inline-flex items-center gap-2 bg-[#E5440C] hover:bg-[#CC3B08] text-white text-sm font-semibold px-6 py-3.5 rounded-full shadow-lg transition-all cursor-pointer"
              >
                <span>Request Enterprise Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:015970222"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all"
              >
                <Phone className="w-4 h-4 text-[#FF7A45]" />
                <span>Call Enterprise Desk: 01-5970222</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
