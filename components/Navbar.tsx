"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-xl shadow-md border-gray-100 dark:border-[#3a3a3a]"
          : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#51197e]">
            <span className="font-bold text-white text-base" style={{ fontFamily: "'Neue Machina', sans-serif" }}>R</span>
          </div>
          <span className="font-bold text-gray-900 dark:text-white text-lg" style={{ fontFamily: "'Neue Machina', sans-serif" }}>
            Reevup&apos;Avis<span className="text-[#51197e] dark:text-[#c4b0e0]">*</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#51197e] dark:text-[#c4b0e0] transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a href="#" className="px-5 py-2.5 text-sm rounded-full border-2 border-[#51197e]/20 dark:border-[#9371d1]/30 text-[#51197e] dark:text-[#c4b0e0] hover:bg-[#51197e]/5 transition-all font-semibold">
            Se connecter
          </a>
          <a href="#tarifs" className="px-5 py-2.5 text-sm rounded-full bg-[#51197e] text-white font-semibold hover:bg-[#6B21A8] transition-all shadow-lg shadow-[#51197e]/25">
            Essai gratuit
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button className="flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-[#2a2a2a] border-b border-gray-100 dark:border-[#3a3a3a] shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-gray-700 dark:text-gray-200 hover:text-[#51197e] dark:text-[#c4b0e0] py-2 font-medium" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 dark:border-[#3a3a3a]">
                <a href="#" className="text-center py-2.5 rounded-full border-2 border-[#51197e]/20 dark:border-[#9371d1]/30 text-[#51197e] dark:text-[#c4b0e0] text-sm font-semibold">Se connecter</a>
                <a href="#tarifs" className="text-center py-2.5 rounded-full bg-[#51197e] text-white text-sm font-semibold">Essai gratuit</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
