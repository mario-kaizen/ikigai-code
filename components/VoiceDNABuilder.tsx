"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "ikigaicode-voice-dna";

export function VoiceDNABuilder() {
  const [banned, setBanned] = useState("");
  const [required, setRequired] = useState("");
  const [rhythm, setRhythm] = useState("");
  const [tone, setTone] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const p = JSON.parse(saved);
        setBanned(p.banned || "");
        setRequired(p.required || "");
        setRhythm(p.rhythm || "");
        setTone(p.tone || "");
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (banned || required || rhythm || tone) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ banned, required, rhythm, tone })
      );
    }
  }, [banned, required, rhythm, tone]);

  const filled = Boolean(
    banned.trim() && required.trim() && rhythm.trim() && tone.trim()
  );

  const handleDownload = () => {
    const today = new Date().toISOString().split("T")[0];
    const md = `# Voice DNA\n\n*ikigAI Code | Module 04 | Identity*\n\n---\n\n## Tone north star\n\n${tone}\n\n## Banned phrases and patterns\n\n${banned}\n\n## Required moves\n\n${required}\n\n## Sentence rhythm — samples\n\n${rhythm}\n\n---\n\nSigned: ${today}\n`;
    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "voice-dna.md";
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
          Your voice DNA
        </div>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="vdna-tone"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Tone north star (one paragraph — the dial in plain English)
            </label>
            <textarea
              id="vdna-tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              placeholder="Warm by default, never cheerleading. Conversational acknowledgment first, then data. Direct without being cold. The bar is 'a thoughtful friend who knows the answer,' not 'an assistant performing helpfulness.'"
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest leading-relaxed text-base h-28 resize-none focus:outline-none focus:border-brass"
            />
          </div>

          <div>
            <label
              htmlFor="vdna-banned"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Banned phrases and patterns (one per line)
            </label>
            <textarea
              id="vdna-banned"
              value={banned}
              onChange={(e) => setBanned(e.target.value)}
              placeholder={`great question\namazing\nbrilliant\nem-dash as separator (use pipe instead)\n"happy to jump on a call"\nopening with "I "`}
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest leading-relaxed text-base h-32 resize-none focus:outline-none focus:border-brass font-mono"
            />
          </div>

          <div>
            <label
              htmlFor="vdna-required"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Required moves (one per line)
            </label>
            <textarea
              id="vdna-required"
              value={required}
              onChange={(e) => setRequired(e.target.value)}
              placeholder={`pipe separator in titles, never em-dash\nconversational acknowledgment before data\nshow the work: context → evidence → analysis → conclusion\nretract immediately when wrong, never quietly adjust\nend at the answer, no appended commentary sections`}
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest leading-relaxed text-base h-32 resize-none focus:outline-none focus:border-brass font-mono"
            />
          </div>

          <div>
            <label
              htmlFor="vdna-rhythm"
              className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
            >
              Sentence rhythm | 2-3 sentences from real writing of yours
            </label>
            <textarea
              id="vdna-rhythm"
              value={rhythm}
              onChange={(e) => setRhythm(e.target.value)}
              placeholder="Paste two or three sentences you've actually written that sound unmistakably like you. The AI will pattern-match the shape, not the topic. Length, rhythm, where the emphasis lands."
              className="w-full bg-warm-white border border-brass-light p-3 rounded-sm text-forest leading-relaxed text-base h-32 resize-none focus:outline-none focus:border-brass"
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
              ? "✓ Downloaded as voice-dna.md"
              : filled
              ? "Download voice DNA ↓"
              : "Fill all four fields to download"}
          </button>

          <div className="text-xs text-stone italic">
            Saves locally as you type. Your voice is layered — first pass is
            never the last word. Come back as you catch more patterns.
          </div>
        </div>
      </div>

      <details className="group">
        <summary className="cursor-pointer text-sm text-brass-dark hover:text-forest-muted transition-colors font-medium flex items-center gap-2">
          <span className="text-lg">+</span>
          See my voice DNA (abbreviated)
        </summary>
        <div className="mt-4 border border-brass-light bg-parchment/40 rounded-sm p-6 space-y-5 text-sm">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              Tone north star
            </div>
            <div className="text-forest leading-relaxed">
              Warm by default, never cheerleading. Both extremes fail —
              cheerleading kills trust, cold-blunt kills collaboration.
              Conversational acknowledgment first, then data. Match Mario&apos;s
              depth. Lead with evidence, retract when wrong, never quietly
              adjust.
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              Banned (zero tolerance)
            </div>
            <ul className="text-forest leading-relaxed list-disc pl-5 space-y-1">
              <li>&quot;great question,&quot; &quot;amazing,&quot; &quot;brilliant&quot;</li>
              <li>Em-dash as separator in titles — use pipe instead</li>
              <li>&quot;happy to jump on a call&quot; / any time-offer in client replies</li>
              <li>First-person product testimonial — never &quot;I use,&quot; &quot;I run&quot;</li>
              <li>&quot;Worth flagging&quot; / &quot;worth noting&quot; / appended commentary sections</li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              Required moves
            </div>
            <ul className="text-forest leading-relaxed list-disc pl-5 space-y-1">
              <li>Pipe separator in titles and headings</li>
              <li>Acknowledgment before data, especially in fire-drill mode</li>
              <li>Show the working: context → evidence → analysis → conclusion</li>
              <li>Verify day-of-week programmatically before any day+date pairing</li>
              <li>One question per turn in design mode (max ~6 lines)</li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              Sentence rhythm sample
            </div>
            <div className="text-forest leading-relaxed italic">
              &quot;The model isn&apos;t the layer that&apos;s broken. You&apos;re running a
              tool-grade workflow at a moment that demands infrastructure-grade
              discipline.&quot;
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}
