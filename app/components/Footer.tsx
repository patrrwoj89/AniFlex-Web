"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldAlert, Github } from "lucide-react";

export default function Footer() {
  const [dmca, setDmca] = useState(false);

  return (
    <>
      <footer
        className="py-10 relative"
        style={{ borderTop: "0.5px solid rgba(250,224,0,0.08)" }}
      >
        {/* Yellow top accent line */}
        <div
          className="absolute top-0 left-0 w-24 h-[1px]"
          style={{ background: "linear-gradient(to right, #FAE000, transparent)" }}
        />

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <div className="font-display text-2xl mb-1">
              <span style={{ color: "#FAE000" }}>ANI</span>
              <span style={{ color: "#3F7340" }}>FLEX</span>
            </div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.30)" }}>
              © {new Date().getFullYear()} AniFlex. Community driven project.
            </p>
            <p className="text-xs mt-1 max-w-sm" style={{ color: "rgba(255,255,255,0.20)" }}>
              Agregator treści. Aplikacja nie hostuje żadnych plików wideo.
              Materiały pochodzą z zewnętrznych serwisów.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/patrrwoj89/AniFlex"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.40)",
                background: "rgba(255,255,255,0.03)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(250,224,0,0.25)";
                e.currentTarget.style.color = "#FAE000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "rgba(255,255,255,0.40)";
              }}
            >
              <Github size={18} />
            </a>

            <button
              onClick={() => setDmca(true)}
              className="text-xs transition-colors"
              style={{ color: "rgba(255,255,255,0.25)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
            >
              DMCA / Copyright
            </button>
          </div>
        </div>
      </footer>

      {/* DMCA Modal */}
      <AnimatePresence>
        {dmca && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.80)", backdropFilter: "blur(8px)" }}
              onClick={() => setDmca(false)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 rounded-2xl border max-w-lg w-full p-8"
              style={{
                background: "#1a1a19",
                borderColor: "rgba(250,224,0,0.12)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3" style={{ color: "#FAE000" }}>
                  <ShieldAlert size={22} />
                  <h3 className="text-lg font-semibold text-white">DMCA & Prawa Autorskie</h3>
                </div>
                <button
                  onClick={() => setDmca(false)}
                  className="p-1.5 rounded-lg transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.50)",
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                <p>
                  AniFlex działa jako wyszukiwarka i agregator treści dostępnych publicznie
                  w Internecie. Nie przechowujemy, nie wgrywamy ani nie udostępniamy
                  żadnych plików wideo na własnych serwerach.
                </p>
                <p>
                  Właściciele praw autorskich powinni kierować roszczenia do serwisów
                  hostujących pliki. W sprawie samej aplikacji prosimy o kontakt
                  przez GitHub Issues.
                </p>
                <div
                  className="p-4 rounded-xl text-xs mt-2"
                  style={{
                    background: "rgba(250,224,0,0.04)",
                    borderLeft: "2px solid rgba(250,224,0,0.25)",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  Zgłoszenia: GitHub Issues → AniFlex
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
