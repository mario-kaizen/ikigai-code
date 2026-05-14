"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "ikigaicode-source-of-truth-map";

type AccessState =
  | ""
  | "has-the-path"
  | "doesnt-know"
  | "pattern-matches";

const accessOptions: { value: AccessState; label: string; color: string }[] = [
  { value: "", label: "Choose state…", color: "text-stone" },
  {
    value: "has-the-path",
    label: "AI has the path",
    color: "text-moss",
  },
  {
    value: "doesnt-know",
    label: "AI doesn't know it exists",
    color: "text-stone",
  },
  {
    value: "pattern-matches",
    label: "AI pattern-matches without it",
    color: "text-rust",
  },
];

type Row = {
  source: string;
  contains: string;
  access: AccessState;
  nextMove: string;
};

const emptyRow = (): Row => ({
  source: "",
  contains: "",
  access: "",
  nextMove: "",
});

export function SourceOfTruthMap() {
  const [rows, setRows] = useState<Row[]>([
    emptyRow(),
    emptyRow(),
    emptyRow(),
  ]);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setRows(parsed);
        }
      } catch {
        // ignore
      }
    }
  }, []);

  useEffect(() => {
    if (rows.some((r) => r.source || r.contains || r.access || r.nextMove)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(rows));
    }
  }, [rows]);

  const updateRow = (i: number, patch: Partial<Row>) => {
    setRows((rs) => rs.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  };

  const addRow = () => setRows((rs) => [...rs, emptyRow()]);
  const removeRow = (i: number) =>
    setRows((rs) => (rs.length > 1 ? rs.filter((_, idx) => idx !== i) : rs));

  const filledRows = rows.filter(
    (r) => r.source.trim() && r.contains.trim() && r.access
  );
  const canDownload = filledRows.length >= 3;

  const handleDownload = () => {
    const today = new Date().toISOString().split("T")[0];
    const accessLabel = (a: AccessState) =>
      accessOptions.find((o) => o.value === a)?.label || "Unknown";

    const sections = filledRows
      .map(
        (r, i) =>
          `## ${i + 1}. ${r.source}\n\n**What lives there:** ${r.contains}\n\n**AI access state:** ${accessLabel(r.access)}\n\n**Next move:** ${r.nextMove || "—"}\n`
      )
      .join("\n");

    const md = `# Source-of-Truth Map\n\n*ikigAI Code | Module 03 | Source of Truth*\n\n*${filledRows.length} sources mapped*\n\n---\n\n${sections}\n---\n\nSigned: ${today}\n`;

    const blob = new Blob([md], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "source-of-truth-map.md";
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
        <div className="flex items-baseline justify-between mb-5">
          <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark font-medium">
            Your source-of-truth map
          </div>
          <div className="text-xs text-stone italic">
            {filledRows.length} of {rows.length} rows filled · 3 minimum
          </div>
        </div>

        <div className="space-y-5">
          {rows.map((row, i) => (
            <div
              key={i}
              className="bg-warm-white border border-brass-light rounded-sm p-5 relative"
            >
              <div className="flex items-baseline justify-between mb-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-brass-dark font-semibold">
                  Source 0{i + 1}
                </div>
                {rows.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeRow(i)}
                    className="text-xs text-stone hover:text-rust transition-colors"
                    aria-label={`Remove source ${i + 1}`}
                  >
                    remove
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor={`src-name-${i}`}
                    className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
                  >
                    Source name
                  </label>
                  <input
                    id={`src-name-${i}`}
                    type="text"
                    value={row.source}
                    onChange={(e) => updateRow(i, { source: e.target.value })}
                    placeholder="Lighthouse DB (Postgres)"
                    className="w-full bg-cream border border-brass-light p-2.5 rounded-sm text-forest-muted font-display text-base focus:outline-none focus:border-brass"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`src-contains-${i}`}
                    className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
                  >
                    What lives there
                  </label>
                  <textarea
                    id={`src-contains-${i}`}
                    value={row.contains}
                    onChange={(e) =>
                      updateRow(i, { contains: e.target.value })
                    }
                    placeholder="Client roster, call transcripts, ad metrics, action items"
                    className="w-full bg-cream border border-brass-light p-2.5 rounded-sm text-forest leading-relaxed text-sm h-16 resize-none focus:outline-none focus:border-brass"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor={`src-access-${i}`}
                      className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
                    >
                      AI access state
                    </label>
                    <select
                      id={`src-access-${i}`}
                      value={row.access}
                      onChange={(e) =>
                        updateRow(i, {
                          access: e.target.value as AccessState,
                        })
                      }
                      className="w-full bg-cream border border-brass-light p-2.5 rounded-sm text-forest-muted text-sm focus:outline-none focus:border-brass"
                    >
                      {accessOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor={`src-next-${i}`}
                      className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 block"
                    >
                      Next move
                    </label>
                    <input
                      id={`src-next-${i}`}
                      type="text"
                      value={row.nextMove}
                      onChange={(e) =>
                        updateRow(i, { nextMove: e.target.value })
                      }
                      placeholder="Add path to CLAUDE.md"
                      className="w-full bg-cream border border-brass-light p-2.5 rounded-sm text-forest text-sm focus:outline-none focus:border-brass"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3 items-center">
          <button
            type="button"
            onClick={addRow}
            className="px-4 py-2 border border-brass-light text-brass-dark text-sm font-medium tracking-wide uppercase hover:bg-parchment transition-colors"
          >
            + Add source
          </button>
          <button
            type="button"
            disabled={!canDownload}
            onClick={handleDownload}
            className={`flex-1 min-w-[200px] py-3 px-4 font-medium tracking-wide uppercase text-sm transition-colors ${
              canDownload
                ? "bg-forest-muted text-warm-white hover:bg-forest-light cursor-pointer"
                : "bg-parchment text-stone cursor-not-allowed"
            }`}
          >
            {downloaded
              ? "✓ Downloaded as source-of-truth-map.md"
              : canDownload
              ? `Download map (${filledRows.length} sources) ↓`
              : `Fill at least 3 sources to download`}
          </button>
        </div>

        <div className="mt-4 text-xs text-stone italic">
          Saves locally as you type. Aim for 3 to 7 sources — fewer than 3 is
          incomplete, more than 7 usually means you&apos;re mapping noise.
        </div>
      </div>

      {/* Mario's actual map | abbreviated */}
      <details className="mt-6 group">
        <summary className="cursor-pointer text-sm text-brass-dark hover:text-forest-muted transition-colors font-medium flex items-center gap-2">
          <span className="text-lg">+</span>
          See my actual source-of-truth map (abbreviated)
        </summary>
        <div className="mt-4 border border-brass-light bg-parchment/40 rounded-sm p-6 space-y-4 text-sm">
          <div>
            <div className="font-display text-base text-forest-muted">
              Lighthouse DB (Postgres on Coolify droplet)
            </div>
            <div className="text-forest leading-relaxed mt-1">
              Client roster, call transcripts (ReadAiMeeting), action items,
              attendance. The canonical client list.
            </div>
            <div className="text-xs text-moss italic mt-1">
              AI has the path | connection string in CLAUDE.md
            </div>
          </div>
          <div>
            <div className="font-display text-base text-forest-muted">
              StrongLocation table (inside Lighthouse DB)
            </div>
            <div className="text-forest leading-relaxed mt-1">
              GHL credentials for STRONG locations: growLocationId, PIT,
              coreLocationId. The Client table looks similar but carries stale
              PITs — locked rule.
            </div>
            <div className="text-xs text-moss italic mt-1">
              AI has the path | hard rule in CLAUDE.md after a wrong-PIT deploy
            </div>
          </div>
          <div>
            <div className="font-display text-base text-forest-muted">
              Slack workspace routing (Hub vs Internal vs STRONG x Kaizen)
            </div>
            <div className="text-forest leading-relaxed mt-1">
              Three workspaces, channel-name → workspace mapping by prefix.
              `kc-*` = Internal, `strong-*` and bare client names = Hub.
            </div>
            <div className="text-xs text-moss italic mt-1">
              AI has the path | hard rule in CLAUDE.md after multiple
              wrong-workspace pulls
            </div>
          </div>
          <div>
            <div className="font-display text-base text-forest-muted">
              Strong Ads SQLite database
            </div>
            <div className="text-forest leading-relaxed mt-1">
              30 STRONG ad accounts, 9293 ads, creative + targeting + insights.
              FTS-enabled.
            </div>
            <div className="text-xs text-moss italic mt-1">
              AI has the path | file path in CLAUDE.md
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}
