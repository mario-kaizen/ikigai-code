"use client";

import { useState } from "react";

export function ClaudeCodePath({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="my-10 border border-brass-light rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full px-6 py-5 flex items-center justify-between bg-cream hover:bg-parchment transition-colors text-left"
        aria-expanded={open}
      >
        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark mb-1 font-medium">
            For Claude Code users
          </div>
          <div className="font-display text-xl text-forest-muted tracking-tight">
            The Claude Code Path
          </div>
          <div className="text-sm text-stone mt-1">
            Technical implementation. Beginners can skip — you won&apos;t lose the lesson.
          </div>
        </div>
        <span
          className={`text-brass-dark text-2xl transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 py-6 bg-warm-white border-t border-brass-light">
          {children}
        </div>
      )}
    </section>
  );
}
