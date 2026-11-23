"use client";

import React from "react";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";

interface FinalCTAProps {
  onOpenOrder: (planName?: string) => void;
}

export default function FinalCTA({ onOpenOrder }: FinalCTAProps) {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-[#E5440C] text-white p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl shadow-[#E5440C]/30 relative overflow-hidden">
          
          {/* Subtle Ambient Shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl text-center lg:text-left relative z-10">
            {/* Quick Attraction Perks */}
            <div className="flex items-center gap-3 flex-wrap justify-center lg:justify-start text-xs font-black uppercase tracking-wider mb-4 text-[#FFF3EE]">
              <span className="flex items-center gap-1.5 bg-black/15 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Free Installation
              </span>
              <span className="flex items-center gap-1.5 bg-black/15 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Wi-Fi 6 Router Included
              </span>
              <span className="flex items-center gap-1.5 bg-black/15 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                175+ TV Channels
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.98] mb-4">
              EXPERIENCE REAL <br />
              <span className="font-serif italic text-[#FFF3EE] font-normal">
                OPTICAL FIBER.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-medium max-w-lg">
              Join 120,000+ homes enjoying pure optical speeds with zero buffering.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto relative z-10">
            <button
              onClick={() => onOpenOrder()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-[#E5440C] hover:bg-[#FFF3EE] font-black text-base px-8 py-4 rounded-full shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get Connected Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="tel:015970222"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border-2 border-white/40 text-white hover:bg-white/10 text-sm font-bold px-6 py-4 rounded-full transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>01-5970222</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
