"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "ikigaicode-compounding-plan";

const fields = [
  {
    key: "daily" as const,
    label: "Daily | Catch",
    sub: "What you do at the end of each day (5 minutes)",
    accent: "text-rust",
    placeholder:
      "End of day — scan today's AI work for corrections I had to make. Write each one as a one-liner in catches.md. No encoding yet. Just capture.",
  },
  {
    key: "weekly" as const,
    label: "Weekly | Lock",
    sub: "What you do once a week (20–30 minutes)",
    accent: "text-brass-dark",
    placeholder:
      "Friday afternoon — pick the 1 to 3 repeat-offender catches from this week. Convert each into a memory rule (Module 02 shape). Save where the AI loads it.",
  },
  {
    key: "monthly" as const,
    label: "Monthly | Audit",
    sub: "What you do once a month (30–45 minutes)",
    accent: "text-moss",
    placeholder:
      "First Monday of the month — open every feedback_*.md file. Tag each: still firing / never fired / outdated. Prune what never fired. Update what's outdated.",
  },
  {
    key: "quarterly" as const,
    label: "Quarterly | Compress",
    sub: "What you do once a quarter (1 hour)",
    accent: "text-sage",
    placeholder:
      "First Monday of the quarter — read every memory rule in one sitting. Look for overlap. Merge two-into-one where two rules say the same thing differently. Retire what no longer reflects how I work.",
  },
];

type FormState = {
  daily: string;
  weekly: string;
  monthly: string;
  quarterly: string;
};

export function CompoundingPlan() {
  const [state, setState] = useState<FormState>({
    daily: "",
    weekly: "",
    monthly: "",
    quarterly: "",
  });
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const p = JSON.parse(saved);
        setState({
          daily: p.daily || "",
          weekly: p.weekly || "",
          monthly: p.monthly || "",
          quarterly: p.quarterly || "",
        });
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (Object.values(state).some(Boolean)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const filled = Object.values(state).every((v) => v.trim().length > 0);

  const handleDownload = () => {
    const today = new Date().toISOString().split("T")[0];
    const md = `# Compounding Plan\n\n*ikigAI Code | Module 06 | Discipline*\n\nThe cadence that keeps the operating system alive.\n\n---\n\n## Daily | Catch\n\n${state.daily}\n\n## Weekly | Lock\n\n${state.weekly}\n\n## Monthly | Audit\n\n${state.monthly}\n\n## Quarterly | Compress\n\n${state.quarterly}\n\n---\n\nSigned: ${today}\n\nThe loop runs forever now.\n`;
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "compounding-plan.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="my-10">
      <div className="border-2 border-brass border-dashed bg-cream p-7 rounded-sm">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark font-medium mb-5">
          Your compounding plan
        </div>

        <div className="space-y-5">
          {fields.map((f) => (
            <div
              key={f.key}
              className="bg-warm-white border border-brass-light rounded-sm p-5"
            >
              <div className="flex items-baseline gap-3 mb-1">
                <span
                  className={`font-display text-lg ${f.accent} uppercase tracking-tight`}
                >
                  {f.label}
                </span>
              </div>
              <div className="text-xs text-stone italic mb-3">{f.sub}</div>
              <textarea
                id={`comp-${f.key}`}
                value={state[f.key]}
                onChange={(e) =>
                  setState((s) => ({ ...s, [f.key]: e.target.value }))
                }
                placeholder={f.placeholder}
                className="w-full bg-cream border border-brass-light p-3 rounded-sm text-forest leading-relaxed text-base h-24 resize-none focus:outline-none focus:border-brass"
              />
            </div>
          ))}

          <button
            type="button"
            disabled={!filled}
            onClick={handleDownload}
            className={`w-full py-3 px-4 font-medium tracking-wide uppercase text-sm transition-colors ${
              filled
                ? "bg-forest-muted text-warm-white hover:bg-forest-light cursor-pointer"
                : "bg-parchment text-stone cursor-not-allowed"
            }`}
          >
            {downloaded
              ? "✓ Downloaded as compounding-plan.md"
              : filled
              ? "Download compounding plan ↓"
              : "Fill all four cadences to download"}
          </button>

          <div className="text-xs text-stone italic">
            Saves locally as you type. The plan should fit on one page — if
            yours is sprawling, it&apos;ll never actually run.
          </div>
        </div>
      </div>

      <details className="mt-6 group">
        <summary className="cursor-pointer text-sm text-brass-dark hover:text-forest-muted transition-colors font-medium flex items-center gap-2">
          <span className="text-lg">+</span>
          See my compounding plan
        </summary>
        <div className="mt-4 border border-brass-light bg-parchment/40 rounded-sm p-6 space-y-5 text-sm">
          <div>
            <div className="font-display text-base text-rust uppercase tracking-tight mb-1">
              Daily | Catch
            </div>
            <div className="text-forest leading-relaxed">
              Every Claude Code session ends with `/brain-update` — logs the
              work and runs a self-audit on quality. The audit step surfaces
              corrections I made during the session. Anything that smells like
              a repeat-offender goes into the next morning&apos;s catch pile.
            </div>
          </div>
          <div>
            <div className="font-display text-base text-brass-dark uppercase tracking-tight mb-1">
              Weekly | Lock
            </div>
            <div className="text-forest leading-relaxed">
              Friday close — pick the 1 to 3 sharpest corrections from the
              week. Write each as a `feedback_*.md` file. Save in the memory
              directory. Add a line to MEMORY.md index. Done by end of day.
            </div>
          </div>
          <div>
            <div className="font-display text-base text-moss uppercase tracking-tight mb-1">
              Monthly | Audit
            </div>
            <div className="text-forest leading-relaxed">
              First Monday of the month — sweep every `feedback_*.md` file.
              Mark each: still firing / never fired / outdated. Prune the
              never-fired ruthlessly. The rule library should shrink as often
              as it grows.
            </div>
          </div>
          <div>
            <div className="font-display text-base text-sage uppercase tracking-tight mb-1">
              Quarterly | Compress
            </div>
            <div className="text-forest leading-relaxed">
              First Monday of the quarter — read every rule in one sitting.
              Three rules saying the same thing in different words become one
              rule. Modes that overlap get narrowed or merged. The map gets
              re-checked for sources that have changed or died. The system
              gets sharper, not bigger.
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}
