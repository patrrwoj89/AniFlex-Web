"use client";

import { useEffect, useState } from "react";
import { Loader2, Download, AlertCircle, Smartphone } from "lucide-react";
import Link from "next/link";

// WAŻNE: zmień na swoje dane repo Flutter
const GITHUB_REPO_OWNER = "patrrwoj89";
const GITHUB_REPO_NAME = "AniFlex";
const FALLBACK_APK_URL = `https://github.com/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/releases`;

export default function AndroidDownloadPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const run = async () => {
      try {
        let releaseData: any;
        try {
          const res = await fetch(
            `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/releases/latest`
          );
          if (!res.ok) throw new Error(`Status: ${res.status}`);
          releaseData = await res.json();
        } catch {
          const resAll = await fetch(
            `https://api.github.com/repos/${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}/releases`
          );
          if (!resAll.ok) throw new Error("Failed to fetch releases");
          const all = await resAll.json();
          if (!Array.isArray(all) || all.length === 0) throw new Error("No releases found");
          releaseData = all.find((r: any) => !r.prerelease && !r.draft) || all[0];
        }

        if (!releaseData?.assets) throw new Error("Release has no assets");

        const apk = releaseData.assets.find(
          (a: any) => a.name?.toLowerCase().endsWith(".apk")
        );
        if (!apk?.browser_download_url) throw new Error("No APK file found");

        setDownloadUrl(apk.browser_download_url);
        setStatus("success");
        setTimeout(() => { window.location.href = apk.browser_download_url; }, 1500);
      } catch (err) {
        setStatus("error");
        setDownloadUrl(FALLBACK_APK_URL);
        setErrorMsg(err instanceof Error ? err.message : "Unknown error");
        setTimeout(() => { window.location.href = FALLBACK_APK_URL; }, 3000);
      }
    };
    run();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
      style={{ background: "#0f0f0e" }}
    >
      {/* Bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(250,224,0,0.08) 0%, transparent 70%)",
        }}
      />

      <div
        className="relative z-10 rounded-3xl border p-8 max-w-md w-full"
        style={{
          background: "rgba(26,26,25,0.80)",
          borderColor: "rgba(250,224,0,0.12)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Logo */}
        <div className="font-display text-4xl mb-8">
          <span style={{ color: "#FAE000" }}>ANI</span>
          <span style={{ color: "#3F7340" }}>FLEX</span>
        </div>

        {status === "loading" && (
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <div
                className="absolute inset-0 rounded-full blur-xl animate-pulse"
                style={{ background: "rgba(250,224,0,0.15)" }}
              />
              <Loader2 size={48} className="animate-spin relative z-10" style={{ color: "#FAE000" }} />
            </div>
            <h1 className="text-xl font-semibold text-white mb-2">
              Szukam najnowszej wersji…
            </h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.40)" }}>
              Łączę się z GitHub Releases
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="flex flex-col items-center">
            <div
              className="p-4 rounded-full mb-6 border"
              style={{
                background: "rgba(63,115,64,0.12)",
                borderColor: "rgba(63,115,64,0.30)",
                color: "#6ab86b",
              }}
            >
              <Download size={32} />
            </div>
            <h1 className="text-xl font-semibold text-white mb-2">Pobieranie rozpoczęte!</h1>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.40)" }}>
              Jeśli pobieranie nie ruszyło automatycznie, kliknij poniżej.
            </p>
            <a
              href={downloadUrl!}
              className="w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
              style={{ background: "#FAE000", color: "#0f0f0e" }}
            >
              <Smartphone size={18} />
              Pobierz ręcznie
            </a>
          </div>
        )}

        {status === "error" && (
          <div className="flex flex-col items-center">
            <div
              className="p-4 rounded-full mb-6 border"
              style={{
                background: "rgba(226,75,74,0.10)",
                borderColor: "rgba(226,75,74,0.25)",
                color: "#e24b4a",
              }}
            >
              <AlertCircle size={32} />
            </div>
            <h1 className="text-xl font-semibold text-white mb-2">Nie udało się pobrać</h1>
            <p className="text-xs mb-6" style={{ color: "rgba(255,255,255,0.35)" }}>
              {errorMsg || "Nieoczekiwany błąd"}
            </p>
            <a
              href={FALLBACK_APK_URL}
              className="w-full py-3.5 rounded-xl font-semibold border flex items-center justify-center gap-2 transition-colors"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.10)",
                color: "rgba(255,255,255,0.70)",
              }}
            >
              Przejdź do GitHub Releases
            </a>
          </div>
        )}
      </div>

      <Link
        href="/"
        className="mt-10 text-sm transition-colors"
        style={{ color: "rgba(255,255,255,0.25)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#FAE000")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
      >
        ← Wróć na stronę główną
      </Link>
    </div>
  );
}
