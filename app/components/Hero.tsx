"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Smartphone, Monitor, Play } from "lucide-react";

const SOURCES = ["animezone.pl", "shinden.pl", "ogladajanime.pl", "desu-online.pl"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[68px] overflow-hidden">
      {/* Decorative corner accent – top left */}
      <div
        className="absolute top-[68px] left-0 w-1 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #FAE000, transparent)" }}
      />
      <div
        className="absolute top-[68px] left-0 h-1 w-32 pointer-events-none"
        style={{ background: "linear-gradient(to right, #FAE000, transparent)" }}
      />

      {/* Decorative corner accent – bottom right */}
      <div
        className="absolute bottom-0 right-0 w-1 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to top, #3F7340, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-1 w-32 pointer-events-none"
        style={{ background: "linear-gradient(to left, #3F7340, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-8 border"
              style={{
                background: "rgba(63,115,64,0.12)",
                borderColor: "rgba(63,115,64,0.30)",
                color: "#6ab86b",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab86b] animate-pulse" />
              Dostępne na Android & Android TV
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-[clamp(4rem,10vw,8rem)] leading-[0.92] mb-6">
              <span style={{ color: "#FAE000" }}>ANI</span>
              <span style={{ color: "#3F7340" }}>FLEX</span>
              <br />
              <span
                className="text-[clamp(1.4rem,3.5vw,2.8rem)] font-sans font-light tracking-wide"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Anime wszędzie,
              </span>
              <br />
              <span
                className="text-[clamp(1.4rem,3.5vw,2.8rem)] font-sans font-light tracking-wide"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                zawsze za darmo.
              </span>
            </h1>

            {/* Sources ticker */}
            <div className="flex flex-wrap gap-2 mb-10">
              {SOURCES.map((src) => (
                <span
                  key={src}
                  className="px-3 py-1 rounded-full text-xs font-mono border"
                  style={{
                    background: "rgba(250,224,0,0.05)",
                    borderColor: "rgba(250,224,0,0.15)",
                    color: "rgba(250,224,0,0.70)",
                  }}
                >
                  {src}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/android">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-base w-full sm:w-auto"
                  style={{
                    background: "#FAE000",
                    color: "#0f0f0e",
                    boxShadow: "0 0 32px -8px rgba(250,224,0,0.40)",
                  }}
                >
                  <Smartphone size={20} />
                  Pobierz na Androida
                </motion.button>
              </Link>

              <Link href="/windows">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-semibold text-base w-full sm:w-auto border relative overflow-hidden"
                  style={{
                    background: "rgba(63,115,64,0.10)",
                    borderColor: "rgba(63,115,64,0.35)",
                    color: "#6ab86b",
                  }}
                >
                  <Monitor size={20} />
                  Pobierz na Windows
                  <span
                    className="absolute -top-2 right-2 text-[10px] px-2 py-0.5 rounded-full font-bold"
                    style={{ background: "#3F7340", color: "#fff" }}
                  >
                    Nowe
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT – mock player card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            {/* Stats badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="hidden lg:flex absolute -top-6 -left-6 z-20 items-center gap-4 p-4 rounded-2xl border"
              style={{
                background: "rgba(34,34,33,0.90)",
                backdropFilter: "blur(16px)",
                borderColor: "rgba(250,224,0,0.15)",
              }}
            >
              <div
                className="p-3 rounded-xl"
                style={{ background: "rgba(250,224,0,0.10)", color: "#FAE000" }}
              >
                <Play size={24} fill="#FAE000" />
              </div>
              <div>
                <div className="text-2xl font-display" style={{ color: "#FAE000" }}>4 źródła</div>
                <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
                  w jednej aplikacji
                </div>
              </div>
            </motion.div>

            {/* Player mockup card */}
            <div
              className="relative rounded-3xl overflow-hidden border"
              style={{
                background: "rgba(26,26,25,0.80)",
                borderColor: "rgba(250,224,0,0.10)",
                boxShadow: "0 0 80px -20px rgba(250,224,0,0.15), 0 40px 80px -20px rgba(0,0,0,0.6)",
              }}
            >
              {/* Fake video area */}
              <div
                className="aspect-video w-full flex items-center justify-center relative"
                style={{ background: "#111110" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(63,115,64,0.08) 0%, transparent 50%, rgba(250,224,0,0.05) 100%)",
                  }}
                />
                {/* Fake episode title bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: "#FAE000", color: "#0f0f0e" }}
                  >
                    HD
                  </span>
                  <span className="text-xs truncate" style={{ color: "rgba(255,255,255,0.50)" }}>
                    Odcinek 1 – Nowy świat
                  </span>
                </div>
                {/* Play button */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2"
                  style={{
                    background: "rgba(250,224,0,0.12)",
                    borderColor: "rgba(250,224,0,0.35)",
                  }}
                >
                  <Play size={28} fill="#FAE000" style={{ color: "#FAE000", marginLeft: 3 }} />
                </div>
                {/* Fake progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div className="h-full w-[35%]" style={{ background: "#FAE000" }} />
                </div>
              </div>

              {/* Meta row */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm text-white">Sezon 1 – Odcinek 1</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.40)" }}>
                    via desu-online.pl
                  </div>
                </div>
                <div className="flex gap-2">
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] border"
                    style={{
                      borderColor: "rgba(63,115,64,0.40)",
                      color: "#6ab86b",
                      background: "rgba(63,115,64,0.10)",
                    }}
                  >
                    PL Napisy
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-full text-[10px] border"
                    style={{
                      borderColor: "rgba(250,224,0,0.20)",
                      color: "#FAE000",
                      background: "rgba(250,224,0,0.06)",
                    }}
                  >
                    1080p
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
