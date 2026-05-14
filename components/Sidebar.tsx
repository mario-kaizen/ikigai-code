"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { modules } from "@/lib/modules";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 shrink-0 border-r border-brass-light bg-parchment/60 h-screen sticky top-0 overflow-y-auto">
      <div className="p-8">
        <Link href="/" className="block group">
          <div className="font-display text-3xl tracking-tight text-forest-muted group-hover:text-brass-dark transition-colors">
            ikigAI<span className="text-brass-dark">Code</span>
          </div>
          <div className="text-xs text-stone uppercase tracking-[0.2em] mt-1">
            by Mario Paguio
          </div>
        </Link>
      </div>

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
          The Loop <span className="text-stone text-xs">| Run · Catch · Lock</span>
        </Link>

        <div className="px-4 mb-3">
          <div className="text-[10px] uppercase tracking-[0.25em] text-stone">
            The Six Modules
          </div>
        </div>
        {modules.map((m) => {
          const href = `/modules/${m.slug}`;
          const active = pathname === href;
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
                    active ? "text-brass-dark" : "text-stone group-hover:text-brass-dark"
                  )}
                >
                  0{m.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div
                    className={cn(
                      "text-sm font-medium",
                      active ? "text-forest-muted" : "text-forest group-hover:text-forest-muted"
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
    </aside>
  );
}
