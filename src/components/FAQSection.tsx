"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      tag: "⚡ 24-hr Setup",
      q: "How fast is installation after ordering?",
      a: "Optical installation is typically completed within 24 to 48 hours. Our certified field crew pulls pure drop cable and sets up your dual-band / Wi-Fi 6 router during a single visit.",
    },
    {
      tag: "📺 175+ HD Channels",
      q: "What is included with Sky TV?",
      a: "175+ live channels including high-definition sports and movies, running on a dedicated optical VLAN with zero impact on your internet bandwidth.",
    },
    {
      tag: "🚫 Zero Throttling",
      q: "Is data truly unlimited with zero FUP cap?",
      a: "Yes. All WebSurfer packages offer unconditional broadband freedom with zero throttling on downloads, cloud backups, or 4K streams.",
    },
    {
      tag: "💳 Instant Online Pay",
      q: "How can I renew my subscription?",
      a: "Instantly renew through eSewa, Khalti, ConnectIPS, or your mobile banking app using your Customer ID.",
    },
    {
      tag: "🚚 Free Relocation",
      q: "Can I transfer my connection if I move houses?",
      a: "Yes. Notify our 24/7 helpline (01-5970222) and our field engineers will transfer and recalibrate your connection at your new address seamlessly.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FFF3EE] text-[#E5440C] text-xs font-black uppercase tracking-wider mb-3">
            <span>QUICK ANSWERS</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.05] mb-4">
            FREQUENTLY <br />
            <span className="font-serif italic text-[#E5440C] font-normal">
              ASKED QUESTIONS.
            </span>
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Clear, honest answers about optical installation, speed, and TV service.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#E5440C]/40 shadow-lg"
                    : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 flex-shrink-0">
                      {faq.tag}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-950">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 flex-shrink-0 ${
                      isOpen
                        ? "bg-[#E5440C] text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 mt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
