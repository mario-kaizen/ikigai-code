"use client";

import { useState, useEffect } from "react";

const levels = [
  "Chat user",
  "Prompted user",
  "Memory user",
  "Modes user",
  "Infrastructure operator",
];

const STORAGE_KEY = "ikigaicode-gap-statement";

export function InteractiveGapStatement() {
  const [current, setCurrent] = useState("");
  const [target, setTarget] = useState("");
  const [cost, setCost] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCurrent(parsed.current || "");
        setTarget(parsed.target || "");
        setCost(parsed.cost || "");
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (current || target || cost) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ current, target, cost })
      );
    }
  }, [current, target, cost]);

  const filled = Boolean(current && target && cost.trim().length > 0);

  const handleDownload = () => {
    const today = new Date().toISOString().split("T")[0];
    const md = `# Gap Statement\n\n*ikigAI Code | Module 01 | The Shift*\n\n**Where I am:** ${current}\n\n**Where I'm going:** ${target}\n\n**The cost of staying:**  \n${cost}\n\n---\n\nSigned: ${today}\n`;
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "gap-statement.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="my-10 grid md:grid-cols-2 gap-5">
      {/* Interactive template */}
      <div className="border-2 border-brass border-dashed bg-cream p-7 rounded-sm">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark font-medium mb-5">
          Your gap statement
        </div>
        <div className="space-y-5">
          <div>
            <label
              htmlFor="gap-current"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Where I am
            </label>
            <select
              id="gap-current"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest-muted font-display text-lg focus:outline-none focus:border-brass"
            >
              <option value="">Choose your level…</option>
              {levels.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="gap-target"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Where I&apos;m going
            </label>
            <select
              id="gap-target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest-muted font-display text-lg focus:outline-none focus:border-brass"
            >
              <option value="">Choose your target…</option>
              {levels.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="gap-cost"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              The cost of staying
            </label>
            <textarea
              id="gap-cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="Real number + unit. (e.g. 5 hours/week × 50 weeks = 250 hours editing AI drafts)"
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest leading-relaxed text-base h-28 resize-none focus:outline-none focus:border-brass"
            />
          </div>
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
              ? "✓ Downloaded — save it where you'll see it weekly"
              : filled
              ? "Download as gap-statement.md ↓"
              : "Fill all three fields to download"}
          </button>
          <div className="text-xs text-stone italic">
            Your answers save locally as you type. Come back anytime.
          </div>
        </div>
      </div>

      {/* Mario's example */}
      <div className="border border-brass-light bg-parchment/40 p-7 rounded-sm">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark font-medium mb-5">
          Mario&apos;s example
        </div>
        <div className="space-y-5">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              Where I was
            </div>
            <div className="font-display text-lg text-forest-muted">
              Prompted user
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              Where I was going
            </div>
            <div className="font-display text-lg text-forest-muted">
              Infrastructure operator
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              The cost of staying
            </div>
            <div className="text-base text-forest leading-relaxed">
              5 hours per week editing AI drafts. 250 hours per year. Six full
              work weeks of my life, gone to a category problem.
            </div>
          </div>
          <div className="pt-3 border-t border-brass-light flex justify-between text-xs text-stone">
            <span>Signed: Mario</span>
            <span>Date: 18 months ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
