"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { modules } from "@/lib/modules";
import { cn } from "@/lib/utils";

function readCompletion(): Record<number, boolean> {
  if (typeof window === "undefined") return {};
  const out: Record<number, boolean> = {};
  for (const m of modules) {
    if (localStorage.getItem(`ikigaicode-module-${m.number}-complete`)) {
      out[m.number] = true;
    }
  }
  return out;
}

export function Sidebar() {
  const pathname = usePathname();
  const [completed, setCompleted] = useState<Record<number, boolean>>({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCompleted(readCompletion());

    // Listen for storage events (cross-tab) and for our own ModuleComplete writes
    // (same-tab) by re-reading on focus.
    const refresh = () => setCompleted(readCompletion());
    window.addEventListener("storage", refresh);
    window.addEventListener("focus", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("focus", refresh);
    };
  }, []);

  // Close drawer on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const completedCount = Object.values(completed).filter(Boolean).length;
  const totalModules = modules.length;

  const nav = (
    <nav className="px-4 pb-8">
      <div className="px-4 mb-3">
        <div className="text-[10px] uppercase tracking-[0.25em] text-stone">
          Start here
        </div>
      </div>
      <Link
        href="/"
        className={cn(
          "block px-4 py-3 mb-1 rounded text-sm transition-colors",
          pathname === "/"
            ? "bg-cream text-forest-muted border-l-2 border-brass pl-[14px]"
            : "text-forest hover:text-forest-muted hover:bg-cream/60"
        )}
      >
        Introduction
      </Link>
      <Link
        href="/the-loop"
        className={cn(
          "block px-4 py-3 mb-6 rounded text-sm transition-colors",
          pathname === "/the-loop"
            ? "bg-cream text-forest-muted border-l-2 border-brass pl-[14px]"
            : "text-forest hover:text-forest-muted hover:bg-cream/60"
        )}
      >
        The Loop{" "}
        <span className="text-stone text-xs">| Run · Catch · Lock</span>
      </Link>

      <div className="px-4 mb-3 flex items-baseline justify-between">
        <div className="text-[10px] uppercase tracking-[0.25em] text-stone">
          The Six Modules
        </div>
        {completedCount > 0 && (
          <div className="text-[10px] tracking-wide text-brass-dark font-medium">
            {completedCount}/{totalModules} ✓
          </div>
        )}
      </div>
      {modules.map((m) => {
        const href = `/modules/${m.slug}`;
        const active = pathname === href;
        const done = completed[m.number];
        return (
          <Link
            key={m.slug}
            href={href}
            className={cn(
              "block px-4 py-3 mb-1 rounded transition-colors group",
              active
                ? "bg-cream border-l-2 border-brass pl-[14px]"
                : "hover:bg-cream/60"
            )}
          >
            <div className="flex items-baseline gap-3">
              <span
                className={cn(
                  "font-display text-xs tracking-wider",
                  active
                    ? "text-brass-dark"
                    : done
                    ? "text-moss"
                    : "text-stone group-hover:text-brass-dark"
                )}
              >
                {done ? "✓" : `0${m.number}`}
              </span>
              <div className="flex-1 min-w-0">
                <div
                  className={cn(
                    "text-sm font-medium",
                    active
                      ? "text-forest-muted"
                      : "text-forest group-hover:text-forest-muted"
                  )}
                >
                  {m.title}
                </div>
                <div className="text-xs text-stone mt-0.5 truncate">
                  {m.subtitle}
                </div>
              </div>
            </div>
          </Link>
        );
      })}

      <div className="px-4 mt-8 mb-3">
        <div className="text-[10px] uppercase tracking-[0.25em] text-stone">
          Resources
        </div>
      </div>
      <Link
        href="/toolkit"
        className={cn(
          "block px-4 py-3 mb-1 rounded text-sm transition-colors",
          pathname === "/toolkit"
            ? "bg-cream text-forest-muted border-l-2 border-brass pl-[14px]"
            : "text-forest hover:text-forest-muted hover:bg-cream/60"
        )}
      >
        Toolkit <span className="text-stone text-xs">| Templates</span>
      </Link>
    </nav>
  );

  const brand = (
    <div className="p-6 md:p-8">
      <Link href="/" className="block group">
        <div className="font-display text-2xl md:text-3xl tracking-tight text-forest-muted group-hover:text-brass-dark transition-colors">
          ikigAI<span className="text-brass-dark">Code</span>
        </div>
        <div className="text-xs text-stone uppercase tracking-[0.2em] mt-1">
          by Mario Paguio
        </div>
      </Link>
    </div>
  );

  return (
    <>
      {/* Mobile top bar | shows below md */}
      <div className="md:hidden sticky top-0 z-30 bg-warm-white/95 backdrop-blur border-b border-brass-light flex items-center justify-between px-5 py-3">
        <Link href="/" className="block group">
          <div className="font-display text-xl tracking-tight text-forest-muted group-hover:text-brass-dark transition-colors">
            ikigAI<span className="text-brass-dark">Code</span>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-forest-muted hover:text-brass-dark transition-colors px-3 py-2 -mr-3 text-[11px] uppercase tracking-[0.2em] font-medium flex items-center gap-2"
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden className="text-base leading-none">
            {open ? "×" : "≡"}
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <aside className="md:hidden fixed inset-0 top-[57px] z-20 bg-parchment overflow-y-auto">
          {nav}
        </aside>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-72 shrink-0 border-r border-brass-light bg-parchment/60 h-screen sticky top-0 overflow-y-auto">
        {brand}
        {nav}
      </aside>
    </>
  );
}
