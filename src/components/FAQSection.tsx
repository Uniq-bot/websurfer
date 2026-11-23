"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How fast is the installation process once I place an order?",
      a: "In most covered neighborhoods across Kathmandu, Lalitpur, Bhaktapur, and Pokhara, we complete optical fiber installation within 24 to 48 hours. Our certified technicians pull direct pure drop cable, configure your dual-band/Wi-Fi 6 router, and activate your Sky TV HD setup during the same visit.",
    },
    {
      q: "What is included with the Sky TV connection?",
      a: "Our Sky TV integration delivers 175+ live channels including high-definition sports, movies, documentaries, and national news. It operates on a dedicated optical VLAN, guaranteeing that watching 4K television will never throttle or interfere with your home internet speed.",
    },
    {
      q: "Is WebSurfer broadband truly unlimited with no FUP throttling?",
      a: "Yes. All WebSurfer residential and SOHO packages are built for genuine broadband freedom. We do not throttle 4K streaming, cloud storage backups, video conferencing, or large file downloads for normal household usage.",
    },
    {
      q: "How can I pay my monthly or annual subscription online?",
      a: "You can renew instantly through all major digital payment partners in Nepal: eSewa, Khalti, ConnectIPS, and Mobile Banking apps. Simply select WebSurfer in the ISP bill payment section, input your Customer ID, and your connection renews automatically.",
    },
    {
      q: "Can I transfer or shift my connection if I move houses?",
      a: "Yes. Simply notify our customer support hotline (01-5970222) or message us on WhatsApp with your new address. As long as the location is within our optical fiber grid, our technicians will shift and recalibrate your connection seamlessly.",
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-bold tracking-widest text-[#E5440C] uppercase mb-3">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 mb-4">
            <span className="font-sans font-bold">Everything You</span>{" "}
            <span className="font-serif italic text-[#E5440C]">Need to Know</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Clear, transparent answers about our optical fiber connection, installation, and services.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#E5440C]/30 shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 flex-shrink-0 ${
                      isOpen
                        ? "bg-[#FFF3EE] text-[#E5440C] rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-50">
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
