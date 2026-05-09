"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Czy AniFlex jest darmowy?",
    answer:
      "Tak - aplikacja jest w 100% darmowa i tworzona przez spolecznosc. Bez reklam, bez subskrypcji, bez ukrytych oplat.",
  },
  {
    question: "Skad pochodza tresci?",
    answer:
      "AniFlex agreguje linki z publicznych serwisow: animezone.pl, shinden.pl, ogladajanime.pl i desu-online.pl. Aplikacja nie hostuje zadnych plikow wideo - dziala jak wyszukiwarka tresci dostepnych w sieci.",
  },
  {
    question: "Jak zainstalowac na Android TV?",
    answer:
      "Pobierz plik .apk z naszej strony, klikajac przycisk Pobierz na Androida. Nastepnie przeslij go na telewizor przez aplikacje Wyslij pliki do TV dostepna w Google Play i uruchom instalator.",
  },
  {
    question: "Czy jeden APK dziala zarowno na telefonie jak i Android TV?",
    answer:
      "Tak. AniFlex automatycznie wykrywa typ urzadzenia i dostosowuje interfejs - mobilny uklad na smartfonie, TV-friendly na telewizorze.",
  },
  {
    question: "Czy aplikacja jest bezpieczna?",
    answer:
      "Aplikacja nie zbiera zadnych danych osobowych, nie wymaga rejestracji ani logowania. Kod zrodlowy jest dostepny publicznie na GitHubie.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-24 relative scroll-mt-20"
      style={{ borderTop: "0.5px solid rgba(63,115,64,0.08)" }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span
            className="font-mono text-xs uppercase tracking-[0.2em] mb-3 block"
            style={{ color: "#3F7340" }}
          >
            Pytania &amp; Odpowiedzi
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white">
            Masz <span style={{ color: "#3F7340" }}>pytania?</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border overflow-hidden transition-all duration-200"
              style={{
                background: "rgba(26,26,25,0.60)",
                borderColor:
                  open === i
                    ? "rgba(250,224,0,0.20)"
                    : "rgba(255,255,255,0.05)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors"
                style={{
                  background: open === i ? "rgba(250,224,0,0.03)" : "transparent",
                }}
              >
                <span className="font-medium text-white pr-4">{faq.question}</span>
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-colors"
                  style={{
                    borderColor:
                      open === i
                        ? "rgba(250,224,0,0.35)"
                        : "rgba(255,255,255,0.10)",
                    background:
                      open === i ? "rgba(250,224,0,0.10)" : "transparent",
                    color: open === i ? "#FAE000" : "rgba(255,255,255,0.40)",
                  }}
                >
                  {open === i ? <Minus size={13} /> : <Plus size={13} />}
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-5 pb-5 text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.50)" }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
