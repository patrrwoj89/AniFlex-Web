"use client";

import { motion } from "framer-motion";
import { Tv, Smartphone, History, Heart, Languages, Zap } from "lucide-react";

const features = [
  {
    icon: <Tv size={20} />,
    title: "Android TV",
    desc: "Jeden plik APK – działa na telefonie i telewizorze. Interfejs dopasowuje się automatycznie.",
    accent: "#FAE000",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Mobilny interfejs",
    desc: "Zaprojektowany z myślą o wygodzie na małym ekranie. Nawigacja jedną ręką.",
    accent: "#3F7340",
  },
  {
    icon: <History size={20} />,
    title: "Historia oglądania",
    desc: "Zacznij na telefonie, dokończ na TV. Postęp zapisywany lokalnie.",
    accent: "#FAE000",
  },
  {
    icon: <Heart size={20} />,
    title: "Ulubione",
    desc: "Twórz własne listy. Dodawaj tytuły do kolejki i śledź postęp serii.",
    accent: "#3F7340",
  },
  {
    icon: <Languages size={20} />,
    title: "PL Napisy & Dubbing",
    desc: "Polska wersja językowa – napisy i dubbing tam gdzie dostępne.",
    accent: "#FAE000",
  },
  {
    icon: <Zap size={20} />,
    title: "Bez reklam",
    desc: "Zero reklam, zero opłat, zero rejestracji. Czyste oglądanie.",
    accent: "#3F7340",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 relative scroll-mt-20"
      style={{ borderTop: "0.5px solid rgba(63,115,64,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span
            className="font-mono text-xs uppercase tracking-[0.2em] mb-3 block"
            style={{ color: "#3F7340" }}
          >
            Możliwości
          </span>
          <h2 className="font-display text-5xl md:text-6xl" style={{ color: "#fff" }}>
            Wszystko czego{" "}
            <span style={{ color: "#FAE000" }}>potrzebujesz.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden"
              style={{
                background: "rgba(26,26,25,0.50)",
                borderColor: "rgba(255,255,255,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  f.accent === "#FAE000"
                    ? "rgba(250,224,0,0.20)"
                    : "rgba(63,115,64,0.28)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
              }}
            >
              <div
                className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    f.accent === "#FAE000"
                      ? "linear-gradient(to right, #FAE000, transparent)"
                      : "linear-gradient(to right, #3F7340, transparent)",
                }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 border"
                style={{
                  color: f.accent,
                  background:
                    f.accent === "#FAE000"
                      ? "rgba(250,224,0,0.08)"
                      : "rgba(63,115,64,0.12)",
                  borderColor:
                    f.accent === "#FAE000"
                      ? "rgba(250,224,0,0.15)"
                      : "rgba(63,115,64,0.20)",
                }}
              >
                {f.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
