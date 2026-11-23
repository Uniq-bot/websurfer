import React from "react";

export default function TrustMarquee() {
  const partners = [
    "Sky TV HD Direct",
    "Nepal Telecom Peering",
    "Google Direct Edge Cache",
    "Akamai Technologies CDN",
    "Netflix Open Connect",
    "NPIX Kathmandu Exchange",
    "Cloudflare Tier-1",
    "Amazon AWS Edge",
  ];

  return (
    <section className="py-7 border-y border-slate-100 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-4">
          TRUSTED BY 120,000+ HOMES & ENTERPRISES ACROSS NEPAL
        </p>
        <div className="flex items-center justify-center gap-6 sm:gap-8 flex-wrap text-xs sm:text-sm font-semibold text-slate-600">
          {partners.map((partner, idx) => (
            <React.Fragment key={partner}>
              <span className="hover:text-[#E5440C] transition-colors cursor-default whitespace-nowrap">
                {partner}
              </span>
              {idx < partners.length - 1 && (
                <span className="text-[#E5440C] opacity-40 select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
