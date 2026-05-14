const panels = [
  {
    label: "Friction",
    sub: "The moment something breaks",
    accent: "text-rust",
    border: "border-rust/40",
    bg: "bg-cream",
    body: "Your AI produces an output. Something is off — wrong day, off-brand phrase, fabricated detail. You correct it. You ship.",
    fossil: "The correction is the fossil. Real. Specific. Dated.",
  },
  {
    label: "Rule",
    sub: "The friction, encoded",
    accent: "text-brass-dark",
    border: "border-brass",
    bg: "bg-cream",
    body: "Three parts: the rule itself, the incident that earned it, the trigger that fires it. Saved where your AI reads before every response.",
    fossil: "The fossil becomes operating logic.",
  },
  {
    label: "Fires next time",
    sub: "Future-you doesn't relive the lesson",
    accent: "text-moss",
    border: "border-moss/40",
    bg: "bg-cream",
    body: "Next session, the rule loads before the AI speaks. The same friction never reaches your eyes a second time. The correction stopped being your job.",
    fossil: "This is what compounding actually looks like.",
  },
];

export function FrictionToRule() {
  return (
    <div className="my-12">
      <div className="grid md:grid-cols-3 gap-4 md:gap-3">
        {panels.map((p, i) => (
          <div key={p.label} className="relative">
            <div
              className={`h-full border-l-2 ${p.border} ${p.bg} border border-brass-light p-6 rounded-sm flex flex-col`}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span
                  className={`text-[9px] uppercase tracking-[0.25em] ${p.accent} font-semibold`}
                >
                  Step 0{i + 1}
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-stone">
                  ·
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-stone font-medium">
                  {p.sub}
                </span>
              </div>
              <div className="font-display text-3xl text-forest-muted mb-4 leading-none uppercase tracking-tight">
                {p.label}
              </div>
              <p className="text-[15px] text-forest leading-relaxed mb-5 flex-1">
                {p.body}
              </p>
              <p
                className={`text-xs italic ${p.accent} pt-3 border-t border-brass-light/60`}
              >
                {p.fossil}
              </p>
            </div>
            {i < panels.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center text-brass-dark text-2xl bg-warm-white rounded-full">
                →
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-xs text-stone uppercase tracking-[0.2em]">
        every rule in your memory layer has a fossil underneath it
      </div>
    </div>
  );
}
