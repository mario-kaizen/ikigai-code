const levels = [
  {
    n: 1,
    label: "Chat user",
    desc: "Open chat. Ask thing. Close chat. No persistence.",
    you: "You start every session from a blank slate. Most people stop here forever.",
  },
  {
    n: 2,
    label: "Prompted user",
    desc: "Saved prompts. A doc of templates. Better — but still resets.",
    you: "You have saved prompts somewhere, but no persistent memory across sessions.",
  },
  {
    n: 3,
    label: "Memory user",
    desc: "Persistent rules. The AI actually reads them before responding.",
    you: "You have an active file the AI loads, not just a doc you wish it read.",
  },
  {
    n: 4,
    label: "Modes user",
    desc: "Specialised personas for different work, each with its own standards.",
    you: "You can switch the AI's whole operating personality with one named invocation.",
  },
  {
    n: 5,
    label: "Infrastructure operator",
    desc: "The full stack running. Memory + identity + sources + modes + discipline.",
    you: "A new team member could sit down at your setup and produce work that sounds like you on day one.",
  },
];

const offsetClasses = [
  "md:ml-0",
  "md:ml-8",
  "md:ml-16",
  "md:ml-24",
  "md:ml-32",
];

export function MaturityLadder() {
  return (
    <div className="my-12">
      <div className="flex flex-col-reverse gap-3">
        {levels.map((l, i) => (
          <div
            key={l.n}
            className={`grid grid-cols-[70px_1fr] gap-4 items-stretch ${offsetClasses[i]}`}
          >
            <div className="bg-forest-muted text-warm-white rounded-sm p-4 flex flex-col items-center justify-center">
              <div className="text-[9px] uppercase tracking-[0.2em] text-brass-light mb-1">
                Lvl
              </div>
              <div className="font-display text-3xl text-warm-white leading-none">
                0{l.n}
              </div>
            </div>
            <div className="bg-cream border border-brass-light p-5 rounded-sm">
              <div className="font-display text-xl text-forest-muted mb-1">
                {l.label}
              </div>
              <div className="text-sm text-forest leading-relaxed mb-3">
                {l.desc}
              </div>
              <div className="text-xs text-brass-dark italic flex gap-2 items-baseline">
                <span className="text-stone uppercase tracking-[0.15em] not-italic shrink-0">
                  You&apos;re here if:
                </span>
                <span>{l.you}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center text-xs text-stone uppercase tracking-[0.2em]">
        ↑ where this program takes you
      </div>
    </div>
  );
}
