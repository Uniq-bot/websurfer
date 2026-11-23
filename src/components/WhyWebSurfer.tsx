import React from "react";
import { Globe, Tv, Wifi, ShieldCheck, ArrowRight } from "lucide-react";

interface WhyWebSurferProps {
  onOpenOrder: (planName?: string) => void;
}

export default function WhyWebSurfer({ onOpenOrder }: WhyWebSurferProps) {
  const features = [
    {
      icon: Globe,
      tag: "Pure Fiber",
      title: "100% Pure Optical FTTH",
      desc: "Direct fiber glass cabling to your premises with zero copper degradation. Experience equal download and upload speeds without latency spikes.",
      metric: "Zero Copper",
      cta: "Learn more",
    },
    {
      icon: Tv,
      tag: "Entertainment",
      title: "Sky TV HD Integration",
      desc: "Stream 175+ live crystal-clear television channels, full HD sports, and on-demand movies over dedicated optical IP without choking internet bandwidth.",
      metric: "175+ Channels",
      cta: "View channel lineup",
    },
    {
      icon: Wifi,
      tag: "Hardware",
      title: "Wi-Fi 6 GigaMesh Equipment",
      desc: "Engineered with latest OFDMA & beamforming to penetrate solid concrete walls easily, supporting 40+ concurrent devices without lag.",
      metric: "5GHz + 2.4GHz",
      cta: "Hardware specs",
    },
    {
      icon: ShieldCheck,
      tag: "Reliability",
      title: "24/7 Dedicated NOC Support",
      desc: "Around-the-clock monitoring by certified network engineers in Kathmandu with direct hotline access, WhatsApp support, and rapid field dispatch.",
      metric: "99.98% SLA",
      cta: "Customer care",
    },
  ];

  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-[#E5440C] uppercase mb-3">
            ENGINEERED FOR EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 mb-4">
            <span className="font-sans font-bold">Why Leading Users Choose</span>{" "}
            <span className="font-serif italic text-[#E5440C]">WebSurfer</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed font-sans">
            An internet service provider built on architectural clarity, unthrottled bandwidth, and dedicated customer care.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-8 rounded-2xl border border-slate-200/90 hover:border-[#E5440C]/35 bg-white hover:shadow-xl hover:shadow-[#E5440C]/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 rounded-xl bg-[#FFF3EE] text-[#E5440C] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E5440C] block mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#E5440C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-mono-num font-bold text-slate-800">
                    {item.metric}
                  </span>
                  <button
                    onClick={() => onOpenOrder(item.title)}
                    className="inline-flex items-center gap-1 font-semibold text-[#E5440C] hover:text-[#CC3B08] cursor-pointer"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
