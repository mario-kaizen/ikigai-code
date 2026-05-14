"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "ikigaicode-rule-builder";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 50) || "rule";
}

export function RuleBuilder() {
  const [name, setName] = useState("");
  const [rule, setRule] = useState("");
  const [why, setWhy] = useState("");
  const [trigger, setTrigger] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const p = JSON.parse(saved);
        setName(p.name || "");
        setRule(p.rule || "");
        setWhy(p.why || "");
        setTrigger(p.trigger || "");
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (name || rule || why || trigger) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ name, rule, why, trigger })
      );
    }
  }, [name, rule, why, trigger]);

  const filled = Boolean(
    name.trim() && rule.trim() && why.trim() && trigger.trim()
  );

  const handleDownload = () => {
    const today = new Date().toISOString().split("T")[0];
    const slug = slugify(name);
    const md = `---
name: ${name}
description: ${rule}
type: feedback
---

RULE: ${rule}

WHY: ${why}

WHEN IT FIRES: ${trigger}

---

Signed: ${today}
`;
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `feedback_${slug}.md`;
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
          Your rule
        </div>
        <div className="space-y-5">
          <div>
            <label
              htmlFor="rule-name"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Rule name (short, imperative)
            </label>
            <input
              id="rule-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Never offer my time in support replies"
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest-muted font-display text-lg focus:outline-none focus:border-brass"
            />
          </div>
          <div>
            <label
              htmlFor="rule-text"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              The rule (one sentence, imperative voice)
            </label>
            <textarea
              id="rule-text"
              value={rule}
              onChange={(e) => setRule(e.target.value)}
              placeholder="Never end a client email with 'happy to jump on a call' or any variant that commits my calendar."
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest leading-relaxed text-base h-20 resize-none focus:outline-none focus:border-brass"
            />
          </div>
          <div>
            <label
              htmlFor="rule-why"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Why (the incident — be specific, date it)
            </label>
            <textarea
              id="rule-why"
              value={why}
              onChange={(e) => setWhy(e.target.value)}
              placeholder="2026-05-05. WhatsApp escalation reply ended with 'I can walk you through it on a quick call.' Client took me up. Burned a day I didn't have."
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest leading-relaxed text-base h-28 resize-none focus:outline-none focus:border-brass"
            />
          </div>
          <div>
            <label
              htmlFor="rule-trigger"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              When it fires (the trigger condition)
            </label>
            <textarea
              id="rule-trigger"
              value={trigger}
              onChange={(e) => setTrigger(e.target.value)}
              placeholder="Before any client email, escalation reply, or support draft. Self-audit: scan for 'happy to', 'jump on a call', 'walk you through'."
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest leading-relaxed text-base h-24 resize-none focus:outline-none focus:border-brass"
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
              ? `✓ Downloaded as feedback_${slugify(name)}.md`
              : filled
              ? "Download rule ↓"
              : "Fill all four fields to download"}
          </button>
          <div className="text-xs text-stone italic">
            Your answers save locally as you type. Build all three rules in one
            sitting or come back to them.
          </div>
        </div>
      </div>

      {/* Mario's example | from his actual rule library */}
      <div className="border border-brass-light bg-parchment/40 p-7 rounded-sm">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark font-medium mb-5">
          From my rule library
        </div>
        <div className="space-y-5">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              Name
            </div>
            <div className="font-display text-lg text-forest-muted leading-tight">
              Never fabricate personal experience
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              The rule
            </div>
            <div className="text-base text-forest leading-relaxed">
              Never claim personal use, ownership, or lived experience with any
              product, app, or service. No first-person testimonial.
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              Why
            </div>
            <div className="text-base text-forest leading-relaxed">
              2026-04-09. Claude wrote &quot;I run Jump Desktop on my iPad to
              control servers all the time — it&apos;s genuinely the best
              remote desktop app on iPadOS and has been for a decade.&quot;
              Pure fabrication. Trust gone on the whole response.
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              When it fires
            </div>
            <div className="text-base text-forest leading-relaxed">
              Before any response recommending a product. Self-audit: scan for
              &quot;I use,&quot; &quot;I run,&quot; &quot;I&apos;ve tried,&quot;
              &quot;in my experience.&quot; Any hit = rewrite.
            </div>
          </div>
          <div className="pt-3 border-t border-brass-light flex justify-between text-xs text-stone">
            <span>Saved: feedback_no-fabricated-experience.md</span>
          </div>
        </div>
      </div>
    </div>
  );
}
