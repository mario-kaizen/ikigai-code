"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "ikigaicode-mode-builder";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "mode";
}

export function ModeBuilder() {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [loaded, setLoaded] = useState("");
  const [rules, setRules] = useState("");
  const [trigger, setTrigger] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const p = JSON.parse(saved);
        setName(p.name || "");
        setPurpose(p.purpose || "");
        setLoaded(p.loaded || "");
        setRules(p.rules || "");
        setTrigger(p.trigger || "");
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (name || purpose || loaded || rules || trigger) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ name, purpose, loaded, rules, trigger })
      );
    }
  }, [name, purpose, loaded, rules, trigger]);

  const filled = Boolean(
    name.trim() &&
      purpose.trim() &&
      loaded.trim() &&
      rules.trim() &&
      trigger.trim()
  );

  const handleDownload = () => {
    const today = new Date().toISOString().split("T")[0];
    const slug = slugify(name);
    const md = `---
mode: ${name}
description: ${purpose}
type: mode
---

# Mode | ${name}

## Purpose

${purpose}

## Loaded context (what fires when this mode is active)

${loaded}

## Behavioral rules (layered on top of base voice)

${rules}

## Trigger (when this mode is invoked)

${trigger}

---

Signed: ${today}
`;
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mode_${slug}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="my-10 space-y-5">
      <div className="border-2 border-brass border-dashed bg-cream p-7 rounded-sm">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark font-medium mb-5">
          Your mode
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="mode-name"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Mode name (one word — the invocation handle)
            </label>
            <input
              id="mode-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="customer-support"
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest-muted font-display text-lg focus:outline-none focus:border-brass"
            />
          </div>

          <div>
            <label
              htmlFor="mode-purpose"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Purpose (one sentence — what this mode is for)
            </label>
            <textarea
              id="mode-purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              placeholder="Reply to client support messages with calm, specific, professional tone. Never offer time. End at the answer."
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest leading-relaxed text-base h-20 resize-none focus:outline-none focus:border-brass"
            />
          </div>

          <div>
            <label
              htmlFor="mode-loaded"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Loaded context (which files fire when this mode is active)
            </label>
            <textarea
              id="mode-loaded"
              value={loaded}
              onChange={(e) => setLoaded(e.target.value)}
              placeholder={`memory/voice-dna.md\nmemory/feedback_no-jump-on-a-call.md\nmemory/feedback_zendesk-reply-voice.md\nreference: support ticket data`}
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest leading-relaxed text-base h-24 resize-none focus:outline-none focus:border-brass font-mono"
            />
          </div>

          <div>
            <label
              htmlFor="mode-rules"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Mode-specific rules (layered on top of base voice)
            </label>
            <textarea
              id="mode-rules"
              value={rules}
              onChange={(e) => setRules(e.target.value)}
              placeholder={`Never offer "happy to jump on a call" or any availability.\nProfessional, not confident.\nFull location name with region in the opener.\nSign with first name only, no title.\nEnd at the ask, no appended commentary.`}
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest leading-relaxed text-base h-28 resize-none focus:outline-none focus:border-brass font-mono"
            />
          </div>

          <div>
            <label
              htmlFor="mode-trigger"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Trigger (when this mode should be invoked)
            </label>
            <textarea
              id="mode-trigger"
              value={trigger}
              onChange={(e) => setTrigger(e.target.value)}
              placeholder={`When I say "draft a support reply" or "respond to this ticket".\nWhen working in the support inbox or any client-facing reply context.\nFires automatically on any inbound support email.`}
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
              ? `✓ Downloaded as mode_${slugify(name)}.md`
              : filled
              ? "Download mode ↓"
              : "Fill all five fields to download"}
          </button>

          <div className="text-xs text-stone italic">
            Saves locally as you type. Build your highest-volume mode first —
            usually customer-facing reply. Add more modes as the need shows up.
          </div>
        </div>
      </div>

      <details className="group">
        <summary className="cursor-pointer text-sm text-brass-dark hover:text-forest-muted transition-colors font-medium flex items-center gap-2">
          <span className="text-lg">+</span>
          See three real modes from my system
        </summary>
        <div className="mt-4 space-y-5">
          {[
            {
              name: "The Oracle",
              purpose:
                "System architect mode. Deep, evidence-led, no pumping up. Build the right thing the first time. No shortcuts.",
              rules:
                "Lead with evidence; retract immediately when wrong; show the working in plain order (context → evidence → analysis → conclusion); match Mario's depth; no narrating difficulty; never suggest wrapping up.",
              trigger:
                "When I say 'Oracle' or invoke architectural / infrastructure / debug / system-build work.",
            },
            {
              name: "Donna (EA)",
              purpose:
                "Executive assistant mode. Proactive morning briefings, scan inboxes, surface what matters, draft replies for approval before sending.",
              rules:
                "Warm conversational tone; always draft for approval before any client-visible send; cross-reference Slack, Calendar, Notion before reporting; surface only load-bearing items.",
              trigger:
                "Cron 7:30am AEST (morning brief); or explicit 'Donna, run X' / 'check on Y'.",
            },
            {
              name: "Support-reply",
              purpose:
                "Reply to client support messages with calm, specific, professional tone. End at the answer.",
              rules:
                "Never offer my time or availability; professional not confident; full location name with region in the opener; sign with first name; end at the ask, no appended commentary.",
              trigger:
                "Any inbound support email, escalation reply, or 'draft a support response' invocation.",
            },
          ].map((m) => (
            <div
              key={m.name}
              className="border border-brass-light bg-parchment/40 rounded-sm p-5 text-sm"
            >
              <div className="font-display text-lg text-forest-muted mb-2">
                {m.name}
              </div>
              <div className="space-y-2 text-forest leading-relaxed">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone block mb-0.5">
                    Purpose
                  </span>
                  {m.purpose}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone block mb-0.5">
                    Mode rules
                  </span>
                  {m.rules}
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone block mb-0.5">
                    Trigger
                  </span>
                  {m.trigger}
                </div>
              </div>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}
