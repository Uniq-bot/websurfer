import React from "react";
import { ArrowRight, Phone } from "lucide-react";

interface FinalCTAProps {
  onOpenOrder: (planName?: string) => void;
}

export default function FinalCTA({ onOpenOrder }: FinalCTAProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-[#E5440C] text-white p-8 sm:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-[#E5440C]/25">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-3">
              <span className="font-sans font-bold">Upgrade to Pure Optical Fiber</span>{" "}
              <span className="font-serif italic text-[#FFF3EE]">Today</span>
            </h2>
            <p className="text-base text-white/90 leading-relaxed">
              Join thousands of satisfied homes and modern businesses experiencing Nepal’s pioneer broadband network.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenOrder()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#E5440C] hover:bg-[#FFF3EE] font-bold text-sm px-8 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get Connected Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:015970222"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 text-sm font-semibold px-6 py-4 rounded-full transition-all"
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
