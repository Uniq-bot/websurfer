import React from "react";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0D14] text-slate-400 pt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="relative h-10 w-36 mb-6 brightness-0 invert">
              <Image
                src="/assets/websurfer-logo.png"
                alt="WebSurfer Broadband"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              Websurfer Nepal Pvt. Ltd. is one of the nation’s pioneer Internet Service Providers, licensed by Nepal Telecommunications Authority (NTA). Delivering uncompromising optical connectivity since 1999.
            </p>

            <div className="space-y-2 text-xs">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                24/7 CUSTOMER CARE & NOC
              </div>
              <a
                href="tel:015970222"
                className="text-xl font-mono-num font-bold text-[#E5440C] hover:text-white transition-colors block"
              >
                01-5970222
              </a>
              <div className="text-slate-400">Toll Free: 1660-01-70222</div>
              <div className="text-slate-400">
                WhatsApp:{" "}
                <a
                  href="https://wa.me/9779801170093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  +977-9801170093
                </a>
              </div>
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="#plans" className="hover:text-[#E5440C] transition-colors">
                  Fiber to the Home (FTTH)
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#E5440C] transition-colors">
                  Sky TV HD Bundles
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[#E5440C] transition-colors">
                  Wi-Fi 6 GigaMesh
                </a>
              </li>
              <li>
                <a href="#enterprise" className="hover:text-[#E5440C] transition-colors">
                  SOHO High-Speed Fiber
                </a>
              </li>
              <li>
                <a href="#enterprise" className="hover:text-[#E5440C] transition-colors">
                  Corporate Leased Lines
                </a>
              </li>
              <li>
                <a href="#enterprise" className="hover:text-[#E5440C] transition-colors">
                  Data Center Colocation
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Self-Care & Help
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="https://websurfer.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5440C] transition-colors"
                >
                  Customer Self-Care Portal
                </a>
              </li>
              <li>
                <a href="#speed-lab" className="hover:text-[#E5440C] transition-colors">
                  Broadband Speed Test
                </a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-[#E5440C] transition-colors">
                  Coverage Availability
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#E5440C] transition-colors">
                  Installation Guidelines
                </a>
              </li>
              <li>
                <a
                  href="https://websurfer.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5440C] transition-colors"
                >
                  Online Bill Payment Guide
                </a>
              </li>
              <li>
                <a
                  href="https://websurfer.com.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E5440C] transition-colors"
                >
                  Webmail Access
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 3: Payment Partners */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Head Office
            </h4>
            <div className="space-y-3 text-xs mb-6">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E5440C] flex-shrink-0 mt-0.5" />
                <span>WebSurfer Tower, Kathmandu, Bagmati Province, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E5440C] flex-shrink-0" />
                <span>support@websurfer.com.np</span>
              </div>
            </div>

            <div className="text-[11px] font-bold uppercase tracking-wider text-white mb-3">
              Digital Payment Partners
            </div>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                eSewa
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                Khalti
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                ConnectIPS
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                Fonepay
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            &copy; 1999&ndash;2026 Websurfer Nepal Pvt. Ltd. All rights reserved. NTA Licensed ISP.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Fair Usage Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
