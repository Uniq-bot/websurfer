"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  initialPlan?: string;
  onClose: () => void;
}

export default function OrderModal({
  isOpen,
  initialPlan = "Surfer 150 + TV",
  onClose,
}: OrderModalProps) {
  const [plan, setPlan] = useState(initialPlan);
  const [prevInitialPlan, setPrevInitialPlan] = useState(initialPlan);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Kathmandu");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Sync plan if initialPlan prop changes during render
  if (initialPlan !== prevInitialPlan) {
    setPrevInitialPlan(initialPlan);
    setPlan(initialPlan);
  }

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setAddress("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-slate-100">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-[#E5440C] mb-2">
              RAPID FIBER DISPATCH
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
              Get Connected to WebSurfer
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Complete this quick form and our Kathmandu optical engineering team will verify your local node within 30 minutes.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Selected Package
                </label>
                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full text-sm rounded-xl border border-slate-200 p-3 bg-white focus:border-[#E5440C] outline-none transition-colors"
                >
                  <option value="Surfer 150 + TV">Surfer 150 + Sky TV HD (Flagship)</option>
                  <option value="Surfer 80">Surfer 80 - Essential Home</option>
                  <option value="Surfer 300 Pro">Surfer 300 Pro - Wi-Fi 6 Gaming</option>
                  <option value="Corporate Leased Line">Enterprise Dedicated Leased Line</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-sm rounded-xl border border-slate-200 p-3 focus:border-[#E5440C] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9801XXXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-sm rounded-xl border border-slate-200 p-3 focus:border-[#E5440C] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    City / District
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full text-sm rounded-xl border border-slate-200 p-3 bg-white focus:border-[#E5440C] outline-none transition-colors"
                  >
                    <option value="Kathmandu">Kathmandu</option>
                    <option value="Lalitpur">Lalitpur</option>
                    <option value="Bhaktapur">Bhaktapur</option>
                    <option value="Pokhara">Pokhara</option>
                    <option value="Biratnagar">Biratnagar</option>
                    <option value="Chitwan">Chitwan</option>
                    <option value="Other">Other Region</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Neighborhood / Area
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Baneshwor, Thamel"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full text-sm rounded-xl border border-slate-200 p-3 focus:border-[#E5440C] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#E5440C] hover:bg-[#CC3B08] text-white font-semibold text-sm shadow-lg shadow-[#E5440C]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm & Request Optical Connection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2.5">
                  🔒 We respect your privacy. A certified technician will call to verify fiber drop feasibility.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#FFF3EE] text-[#E5440C] flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              Request Received!
            </h3>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong>{name}</strong>! Your optical fiber request for{" "}
              <strong className="text-[#E5440C]">{plan}</strong> in {city} has been queued.
            </p>
            <p className="text-xs text-slate-500 mb-8">
              A WebSurfer representative will contact you at <strong>{phone}</strong> shortly to schedule your installation.
            </p>
            <button
              onClick={handleReset}
              className="w-full py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
