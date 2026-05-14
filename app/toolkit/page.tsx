import Link from "next/link";
import { ToolkitDownload } from "@/components/ToolkitDownload";

const templates = [
  {
    moduleNumber: "01",
    moduleSlug: "the-shift",
    moduleTitle: "The Shift",
    filename: "gap-statement.md",
    artifact: "Gap statement",
    description:
      "Where you are on the maturity ladder, where you're going, and the cost of staying.",
    content: `# Gap Statement

*ikigAI Code | Module 01 | The Shift*

**Where I am:** [chat user | prompted user | memory user | modes user | infrastructure operator]

**Where I'm going:** [target level]

**The cost of staying:**
[Real number + unit. e.g. 5 hours/week × 50 weeks = 250 hours editing AI drafts.]

---

Signed:
Date:
`,
  },
  {
    moduleNumber: "02",
    moduleSlug: "memory",
    moduleTitle: "Memory",
    filename: "feedback_template.md",
    artifact: "Memory rule",
    description:
      "Friction encoded as a binding rule that fires before every response.",
    content: `---
name: One-line rule name
description: One sentence explaining what the rule enforces.
type: feedback
---

RULE: [The rule itself, one sentence, imperative voice]

WHY: [The actual incident. Specific. Dated. What broke and how.]

WHEN IT FIRES: [The trigger condition — before what kind of output, with what self-audit check.]

---

Signed:
Date:
`,
  },
  {
    moduleNumber: "03",
    moduleSlug: "source-of-truth",
    moduleTitle: "Source of Truth",
    filename: "source-of-truth-map.md",
    artifact: "Source-of-truth map",
    description:
      "Every place real data about your business lives, with AI access state per source.",
    content: `# Source-of-Truth Map

*ikigAI Code | Module 03 | Source of Truth*

---

## 1. [Source name — e.g. Customer database]

**What lives there:** [One sentence — what data, what state]

**AI access state:** [AI has the path | AI doesn't know it exists | AI pattern-matches without it]

**Next move:** [Add path to CLAUDE.md | Build connection | None — wired]

---

## 2. [Source name]

**What lives there:**

**AI access state:**

**Next move:**

---

## 3. [Source name]

**What lives there:**

**AI access state:**

**Next move:**

---

Signed:
Date:
`,
  },
  {
    moduleNumber: "04",
    moduleSlug: "identity",
    moduleTitle: "Identity",
    filename: "voice-dna.md",
    artifact: "Voice DNA",
    description:
      "Your tone, your banned phrases, your required moves, your sentence rhythm.",
    content: `# Voice DNA

*ikigAI Code | Module 04 | Identity*

---

## Tone north star

[One paragraph in plain English describing the dial. Where you sit on warm-to-blunt, conversational-to-formal, the line you don't want crossed in either direction.]

## Banned phrases and patterns

- [Phrase or pattern that should never appear]
- [Another]
- [Another]

## Required moves

- [Structural move your writing always makes]
- [Another]
- [Another]

## Sentence rhythm | samples

[Paste 2–3 sentences from your real writing. The AI pattern-matches shape better than instructions about shape.]

---

Signed:
Date:
`,
  },
  {
    moduleNumber: "05",
    moduleSlug: "modes",
    moduleTitle: "Modes",
    filename: "mode_template.md",
    artifact: "Custom mode",
    description:
      "A named persona for a specific job. Inherits your voice, adds mode-specific rules.",
    content: `---
mode: [mode-name]
description: One-sentence purpose.
type: mode
---

# Mode | [mode-name]

## Purpose

[One sentence — what this mode exists for. Concrete. Not abstract.]

## Loaded context (what fires when this mode is active)

- memory/voice-dna.md
- [Other specific files that fire only in this mode]
- [Reference data this mode needs]

## Behavioral rules (layered on top of base voice)

- [Mode-specific rule 1]
- [Mode-specific rule 2]
- [Mode-specific rule 3]

## Trigger (when this mode is invoked)

[The phrase, context, or schedule that activates this mode.]

---

Signed:
Date:
`,
  },
  {
    moduleNumber: "06",
    moduleSlug: "discipline",
    moduleTitle: "Discipline",
    filename: "compounding-plan.md",
    artifact: "Compounding plan",
    description:
      "The four-beat cadence — daily, weekly, monthly, quarterly — that keeps the system alive.",
    content: `# Compounding Plan

*ikigAI Code | Module 06 | Discipline*

The cadence that keeps the operating system alive.

---

## Daily | Catch

[5 minutes at end of day. Scan today's AI work for corrections. Write each as a one-liner in catches.md. No encoding yet.]

## Weekly | Lock

[20–30 minutes once a week. Pick the 1–3 repeat-offender catches. Convert each into a memory rule (Module 02 shape). Save where the AI loads it.]

## Monthly | Audit

[30–45 minutes first Monday of the month. Sweep every feedback_*.md file. Tag each: still-firing / never-fired / outdated. Prune.]

## Quarterly | Compress

[1 hour first Monday of the quarter. Read every rule, mode, source in one sitting. Merge overlap. Retire dead. Update changed.]

---

Signed:
Date:

The loop runs forever now.
`,
  },
];

const starterCLAUDEmd = `# CLAUDE.md | Your AI operating system

This file is loaded before every response. It points the AI to the memory
layer, the source-of-truth map, the voice DNA, and the modes you've built
across the ikigAI Code program.

---

## Memory layer | Always firing

Load all \`feedback_*.md\` files from the memory directory before responding.
Cite the rule filename when applying it.

## Voice DNA | Always firing

Load \`voice-dna.md\` before drafting any output. Run the banned-phrase scan
before sending. Match the rhythm samples for length, cadence, and emphasis.

## Source-of-truth map | Lookup-only

When the session needs current data, query the canonical source. Never cite
numbers from memory. See \`source-of-truth-map.md\` for the full list.

## Modes | Named personas

Available modes (load on invocation by name):
- \`mode_oracle.md\` — system architect, deep work
- \`mode_support-reply.md\` — client support, calm professional
- [Add your own as Module 05 modes get built]

When I invoke a mode by name, load that file and apply its rules on top of
the base voice.

## Compounding cadence | Maintenance layer

- Daily | scan for catches at session end
- Weekly | Friday close — convert catches to rules
- Monthly | first Monday — audit + prune
- Quarterly | first Monday of quarter — compress + retire

---

This file is the entry point. Every layer underneath sharpens over time.
`;

export default function ToolkitPage() {
  return (
    <div className="max-w-5xl px-6 md:px-12 py-16 md:py-20 mx-auto">
      <div className="text-[10px] uppercase tracking-[0.3em] text-brass-dark mb-4 font-medium">
        Resources
      </div>
      <h1 className="font-display text-5xl md:text-7xl text-forest-muted leading-[0.95] mb-6">
        The Toolkit
      </h1>
      <p className="text-xl text-forest leading-relaxed mb-12 max-w-2xl font-light">
        One template per module. Blank starting points for each layer of the
        operating system. Grab what you need; the full teaching lives in the
        modules.
      </p>

      <div className="grid md:grid-cols-2 gap-5 mb-16">
        {templates.map((t) => (
          <div
            key={t.moduleNumber}
            className="border border-brass-light bg-cream p-6 flex flex-col"
          >
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-display text-2xl text-brass-dark">
                {t.moduleNumber}
              </span>
              <Link
                href={`/modules/${t.moduleSlug}`}
                className="text-[10px] uppercase tracking-[0.2em] text-stone hover:text-brass-dark transition-colors"
              >
                Module 0{parseInt(t.moduleNumber, 10)} | {t.moduleTitle} →
              </Link>
            </div>
            <div className="font-display text-2xl text-forest-muted mb-2">
              {t.artifact}
            </div>
            <p className="text-sm text-forest leading-relaxed mb-2 flex-1">
              {t.description}
            </p>
            <div className="text-xs text-stone font-mono">{t.filename}</div>
            <ToolkitDownload
              filename={t.filename}
              content={t.content}
              label={`Download ${t.filename}`}
            />
          </div>
        ))}
      </div>

      {/* Starter CLAUDE.md */}
      <section className="mb-20 bg-forest-muted text-warm-white p-10 rounded-sm">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-light mb-4 font-medium">
          Bonus
        </div>
        <h2 className="font-display text-4xl text-warm-white mb-4 leading-tight">
          Starter CLAUDE.md
        </h2>
        <p className="text-parchment leading-relaxed mb-6 max-w-2xl">
          The entry-point file that loads on every Claude Code session. Points
          the AI at every artifact you build across the program. Drop this in
          <span className="font-mono text-brass-light"> ~/.claude/CLAUDE.md</span> or your project root and edit
          as your library grows.
        </p>
        <ToolkitDownload
          filename="CLAUDE.md"
          content={starterCLAUDEmd}
          label="Download CLAUDE.md starter"
        />
      </section>

      {/* How to use */}
      <section className="mb-12">
        <h2 className="font-display text-3xl text-forest-muted mb-6">
          How to use the toolkit
        </h2>
        <div className="space-y-4 text-forest leading-relaxed max-w-3xl">
          <p>
            Each template is a blank version of the artifact a module produces.
            Use them to bootstrap your own files without going through the full
            module exercise. The teaching still lives in the module — the
            template only gives you the shape.
          </p>
          <p>
            Save the downloaded files in one place — a memory directory inside
            your AI tool of choice. For Claude Code, the convention is{" "}
            <span className="font-mono text-brass-dark">
              ~/.claude/projects/&lt;your-project&gt;/memory/
            </span>
            . For ChatGPT, paste the contents into Custom Instructions or use
            the Memory feature. For other tools, find the equivalent &quot;always
            loaded&quot; field.
          </p>
          <p>
            Then point your <span className="font-mono text-brass-dark">CLAUDE.md</span> or
            equivalent at the directory so the files load before every response.
            The bonus starter is a working example.
          </p>
        </div>
      </section>
    </div>
  );
}
