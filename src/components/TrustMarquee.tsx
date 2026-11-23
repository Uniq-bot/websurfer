"use client";

import React from "react";
import { Zap, ShieldCheck } from "lucide-react";

export default function TrustMarquee() {
  const peers = [
    { name: "Sky TV HD Direct", ping: "0 ms", type: "Optical VLAN" },
    { name: "Google Edge Cache", ping: "1.1 ms", type: "Direct Peer" },
    { name: "Netflix OpenConnect", ping: "0.9 ms", type: "In-Country CDN" },
    { name: "NPIX Nepal IX", ping: "0.7 ms", type: "Core Peering" },
    { name: "Cloudflare Tier-1", ping: "1.4 ms", type: "Global Transit" },
    { name: "Steam / Valve CDN", ping: "1.8 ms", type: "Gaming FastPath" },
    { name: "Amazon AWS Edge", ping: "2.1 ms", type: "Cloud Direct" },
  ];

  return (
    <section className="py-8 border-y border-slate-100 bg-slate-50/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#E5440C]" />
          <span className="text-xs font-black tracking-widest text-slate-800 uppercase">
            DIRECT CARRIER-GRADE PEERING
          </span>
        </div>
        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Over 120,000+ Active Endpoints Across Nepal
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none sm:grid sm:grid-cols-4 lg:grid-cols-7 sm:overflow-visible">
          {peers.map((peer) => (
            <div
              key={peer.name}
              className="flex-shrink-0 bg-white border border-slate-200/80 rounded-xl px-3.5 py-2.5 shadow-sm hover:border-[#E5440C]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="text-xs font-black text-slate-900 truncate mb-1">
                {peer.name}
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono-num font-bold">
                <span className="text-slate-400">{peer.type}</span>
                <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  {peer.ping}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
