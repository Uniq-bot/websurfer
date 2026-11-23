"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
interface NavbarProps {
  onOpenOrder: (planName?: string) => void;
}

export default function Navbar({ onOpenOrder }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const headerRef = useRef<HTMLElement>(null);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const header = headerRef.current;
  if (!header) return;

  const ctx = gsap.context(() => {
    gsap.set(header, {
      yPercent: 0,
      autoAlpha: 1,
    });

    let isHidden = false;

    const showNavbar = () => {
      if (!isHidden) return;
      isHidden = false;

      gsap.to(header, {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.4,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const hideNavbar = () => {
      if (isHidden || mobileMenuOpen) return;
      isHidden = true;

      gsap.to(header, {
        yPercent: -150,
        autoAlpha: 0,
        duration: 0.35,
        ease: "power3.inOut",
        overwrite: "auto",
      });
    };

    ScrollTrigger.create({
      start: 100,

      onUpdate: (self) => {
        if (self.scroll() <= 100) {
          showNavbar();
          return;
        }

        if (self.direction === 1) {
          hideNavbar();
        } else if (self.direction === -1) {
          showNavbar();
        }
      },

      onLeaveBack: showNavbar,
    });
  }, header);

  return () => ctx.revert();
}, [mobileMenuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     

    <header
  ref={headerRef}
  className={`sticky top-5 max-w-360 mx-auto rounded-md z-40
    
    ${
      scrolled
        ? "bg-white/65 border-white/60  backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
        : "bg-white/25 border-white/30"
    }`}
>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative h-11 w-36">
              <Image
                src="/assets/websurfer-logo.png"
                alt="WebSurfer Broadband"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#plans"
              className="text-sm font-medium text-slate-600 hover:text-[#E5440C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5440C] hover:after:w-full after:transition-all"
            >
              Plans & Pricing
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 hover:text-[#E5440C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5440C] hover:after:w-full after:transition-all"
            >
              Why WebSurfer
            </a>
            <a
              href="#speed-lab"
              className="text-sm font-medium text-slate-600 hover:text-[#E5440C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5440C] hover:after:w-full after:transition-all"
            >
              Speed Lab
            </a>
            <a
              href="#coverage"
              className="text-sm font-medium text-slate-600 hover:text-[#E5440C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5440C] hover:after:w-full after:transition-all"
            >
              Coverage
            </a>
            <a
              href="#enterprise"
              className="text-sm font-medium text-slate-600 hover:text-[#E5440C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5440C] hover:after:w-full after:transition-all"
            >
              Enterprise
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-600 hover:text-[#E5440C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E5440C] hover:after:w-full after:transition-all"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:015970222"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 bg-slate-50 text-xs font-mono font-semibold text-slate-700 hover:border-[#E5440C]/30 hover:text-[#E5440C] transition-all"
              title="24/7 NOC Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5440C]" />
              <span>01-5970222</span>
            </a>

            <button
              onClick={() => onOpenOrder()}
              className="inline-flex items-center gap-2 bg-[#E5440C] hover:bg-[#CC3B08] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg shadow-[#E5440C]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get Connected</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-5 shadow-xl animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              <a
                href="#plans"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#E5440C] py-2 border-b border-slate-100"
              >
                Plans & Pricing
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#E5440C] py-2 border-b border-slate-100"
              >
                Why WebSurfer
              </a>
              <a
                href="#speed-lab"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#E5440C] py-2 border-b border-slate-100"
              >
                Speed Lab
              </a>
              <a
                href="#coverage"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#E5440C] py-2 border-b border-slate-100"
              >
                Coverage Map
              </a>
              <a
                href="#enterprise"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#E5440C] py-2 border-b border-slate-100"
              >
                Corporate Solutions
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-[#E5440C] py-2 border-b border-slate-100"
              >
                FAQ
              </a>

              <div className="pt-3 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrder();
                  }}
                  className="w-full bg-[#E5440C] text-white py-3 rounded-full font-semibold text-sm shadow-md"
                >
                  Get Connected Now
                </button>
                <div className="text-center text-xs text-slate-500">
                  24/7 Support Hotline:{" "}
                  <a href="tel:015970222" className="text-[#E5440C] font-semibold">
                    01-5970222
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
