import type { Module } from "@/lib/modules";

export function ModuleHeader({ module: m }: { module: Module }) {
  return (
    <header className="mb-12 pb-10 border-b border-brass-light">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-display text-sm tracking-[0.2em] text-brass-dark">
          MODULE 0{m.number}
        </span>
        <span className="w-1 h-1 rounded-full bg-stone" />
        <span className="text-xs uppercase tracking-[0.2em] text-stone">
          {m.diltsLevel} layer
        </span>
      </div>
      <h1 className="font-display text-5xl md:text-7xl text-forest-muted leading-[0.95] mb-3">
        {m.title}
      </h1>
      <p className="text-xl text-brass-dark font-light italic">
        {m.subtitle}
      </p>
    </header>
  );
}
