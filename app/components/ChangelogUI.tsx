"use client";

import { motion } from "framer-motion";
import { Clock, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type GitHubRelease = {
  tag_name: string;
  published_at: string;
  body: string;
  html_url: string;
};

interface ChangelogUIProps {
  release: GitHubRelease;
  date: string;
}

export default function ChangelogUI({ release, date }: ChangelogUIProps) {
  return (
    <section
      id="changelog"
      className="py-24 relative scroll-mt-20"
      style={{ borderTop: "0.5px solid rgba(250,224,0,0.06)" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span
            className="font-mono text-xs uppercase tracking-[0.2em] mb-3 block"
            style={{ color: "#FAE000" }}
          >
            Historia wersji
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white">
            Ostatnia <span style={{ color: "#FAE000" }}>aktualizacja</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl border overflow-hidden"
          style={{
            background: "rgba(26,26,25,0.70)",
            borderColor: "rgba(250,224,0,0.12)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Header bar */}
          <div
            className="px-6 py-4 flex flex-wrap gap-3 items-center justify-between"
            style={{
              borderBottom: "0.5px solid rgba(250,224,0,0.08)",
              background: "rgba(250,224,0,0.03)",
            }}
          >
            <div className="flex items-center gap-3">
              <span
                className="flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs border"
                style={{
                  background: "rgba(250,224,0,0.08)",
                  borderColor: "rgba(250,224,0,0.20)",
                  color: "#FAE000",
                }}
              >
                <Tag size={12} />
                {release.tag_name}
              </span>
              <span
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "rgba(255,255,255,0.40)" }}
              >
                <Clock size={12} />
                {date}
              </span>
            </div>
            <a
              href={release.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold transition-colors"
              style={{ color: "rgba(250,224,0,0.60)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FAE000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(250,224,0,0.60)")}
            >
              GitHub Releases →
            </a>
          </div>

          {/* Markdown body */}
          <div className="p-6 md:p-8">
            <div
              className="prose prose-invert prose-sm max-w-none
                prose-headings:text-white prose-headings:font-semibold
                prose-a:text-[#FAE000] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white
                prose-li:text-zinc-400 prose-li:my-1
                prose-p:text-zinc-400
                prose-code:bg-white/8 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-code:text-[#FAE000] prose-code:before:content-none prose-code:after:content-none
                prose-code:font-mono prose-code:font-normal"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {release.body}
              </ReactMarkdown>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
