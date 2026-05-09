"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Start", href: "/" },
  { label: "Źródła", href: "#sources" },
  { label: "Funkcje", href: "#features" },
  { label: "Zmiany", href: "#changelog" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(15,15,14,0.92)"
          : "rgba(15,15,14,0.60)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "0.5px solid rgba(250,224,0,0.10)"
          : "0.5px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span
            className="font-display text-3xl tracking-wider"
            style={{ color: "#FAE000" }}
          >
            ANI
          </span>
          <span
            className="font-display text-3xl tracking-wider"
            style={{ color: "#3F7340" }}
          >
            FLEX
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium transition-colors relative group"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FAE000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-[1.5px] transition-all group-hover:w-full"
                style={{ background: "#FAE000" }}
              />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="https://github.com/patrrwoj89/AniFlex"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg border transition-colors"
            style={{
              color: "rgba(255,255,255,0.55)",
              borderColor: "rgba(250,224,0,0.12)",
              background: "rgba(250,224,0,0.04)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="/android"
            className="flex items-center gap-2 px-5 py-2 rounded-xl font-semibold text-sm transition-all"
            style={{
              background: "#FAE000",
              color: "#0f0f0e",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Pobierz APK
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 transition-colors"
          style={{ color: open ? "#FAE000" : "rgba(255,255,255,0.7)" }}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-[68px] flex flex-col items-center"
            style={{ background: "rgba(15,15,14,0.98)", backdropFilter: "blur(24px)" }}
          >
            <div className="flex flex-col gap-6 mt-12 w-full max-w-sm text-center px-6">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-3xl font-display tracking-wider transition-colors"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                  onClick={() => setOpen(false)}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FAE000")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto pb-12 w-full max-w-sm px-6">
              <a
                href="/android"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-bold text-lg"
                style={{ background: "#FAE000", color: "#0f0f0e" }}
                onClick={() => setOpen(false)}
              >
                Pobierz APK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
