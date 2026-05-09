"use client";

import { motion } from "framer-motion";
import { Globe, Star, Zap, BookOpen } from "lucide-react";

const sources = [
  {
    name: "animezone.pl",
    icon: <Globe size={22} />,
    desc: "Duża baza anime z polskimi napisami i lektorem.",
    tag: "Napisy / Lektor",
    color: "#FAE000",
  },
  {
    name: "shinden.pl",
    icon: <Star size={22} />,
    desc: "Katalog z ocenami, recenzjami i pełną bazą tytułów.",
    tag: "Katalog",
    color: "#3F7340",
  },
  {
    name: "ogladajanime.pl",
    icon: <Zap size={22} />,
    desc: "Szybki streaming bez reklam, nowe odcinki na bieżąco.",
    tag: "Streaming",
    color: "#FAE000",
  },
  {
    name: "desu-online.pl",
    icon: <BookOpen size={22} />,
    desc: "Szeroki wybór seriali z dubbing i polskimi napisami.",
    tag: "Dubbing / PL",
    color: "#3F7340",
  },
];

export default function Sources() {
  return (
    <section
      id="sources"
      className="py-24 relative scroll-mt-20"
      style={{ borderTop: "0.5px solid rgba(250,224,0,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span
            className="font-mono text-xs uppercase tracking-[0.2em] mb-3 block"
            style={{ color: "#FAE000" }}
          >
            Zintegrowane źródła
          </span>
          <h2 className="font-display text-5xl md:text-6xl" style={{ color: "#fff" }}>
            Cztery serwisy.{" "}
            <span style={{ color: "#3F7340" }}>Jedna aplikacja.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sources.map((src, i) => (
            <motion.div
              key={src.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.10 }}
              className="group relative rounded-2xl p-6 border transition-all duration-300 cursor-default overflow-hidden"
              style={{
                background: "rgba(26,26,25,0.60)",
                borderColor: "rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  src.color === "#FAE000"
                    ? "rgba(250,224,0,0.25)"
                    : "rgba(63,115,64,0.35)";
                e.currentTarget.style.background = "rgba(34,34,33,0.80)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.background = "rgba(26,26,25,0.60)";
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top left, ${src.color}10 0%, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 border"
                style={{
                  color: src.color,
                  background:
                    src.color === "#FAE000"
                      ? "rgba(250,224,0,0.08)"
                      : "rgba(63,115,64,0.12)",
                  borderColor:
                    src.color === "#FAE000"
                      ? "rgba(250,224,0,0.15)"
                      : "rgba(63,115,64,0.20)",
                }}
              >
                {src.icon}
              </div>

              {/* Name */}
              <div className="font-mono text-sm font-semibold mb-2" style={{ color: src.color }}>
                {src.name}
              </div>

              {/* Desc */}
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
                {src.desc}
              </p>

              {/* Tag */}
              <span
                className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-semibold border"
                style={{
                  color: src.color,
                  background:
                    src.color === "#FAE000"
                      ? "rgba(250,224,0,0.06)"
                      : "rgba(63,115,64,0.08)",
                  borderColor:
                    src.color === "#FAE000"
                      ? "rgba(250,224,0,0.18)"
                      : "rgba(63,115,64,0.25)",
                }}
              >
                {src.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
