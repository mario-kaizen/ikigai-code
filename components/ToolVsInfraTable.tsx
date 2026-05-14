const rows = [
  {
    dimension: "Memory",
    tool: "Starts from zero every session.",
    infra: "Persistent rules load before every prompt.",
  },
  {
    dimension: "Voice",
    tool: "Generic assistant default.",
    infra: "Your business voice, encoded.",
  },
  {
    dimension: "Corrections",
    tool: "Made inline, then forgotten.",
    infra: "Captured as binding rules that fire next time.",
  },
  {
    dimension: "Model upgrades",
    tool: "Reset your trust. Start over.",
    infra: "Scaffolding transfers. Recalibrate in an afternoon.",
  },
  {
    dimension: "Team",
    tool: "Standards live in your head.",
    infra: "Team inherits your operating layer by default.",
  },
  {
    dimension: "Growth pattern",
    tool: "Resets every Monday.",
    infra: "Compounds every week.",
  },
];

export function ToolVsInfraTable() {
  return (
    <div className="my-12 border border-brass-light rounded-lg overflow-hidden bg-cream shadow-sm">
      <div className="grid grid-cols-[160px_1fr_1fr]">
        {/* Top-left | "From → To" directional cell */}
        <div className="p-6 border-b-2 border-brass-light bg-parchment/60 flex flex-col items-center justify-center text-center">
          <div className="text-[9px] uppercase tracking-[0.3em] text-stone font-medium mb-2">
            The shift
          </div>
          <div className="text-brass-dark text-2xl leading-none">→</div>
        </div>

        {/* Tool-grade header */}
        <div className="p-6 pb-7 border-b-2 border-r border-brass-light bg-parchment/30">
          <div className="text-[10px] uppercase tracking-[0.25em] text-rust font-semibold mb-3">
            Default mode
          </div>
          <div className="font-display text-3xl text-forest-muted uppercase tracking-tight leading-none">
            Tool-grade
          </div>
        </div>

        {/* Infrastructure-grade header */}
        <div className="p-6 pb-7 border-b-2 border-brass-light bg-cream relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-brass" />
          <div className="text-[10px] uppercase tracking-[0.25em] text-sage font-semibold mb-3">
            Where compounding happens
          </div>
          <div className="font-display text-3xl text-forest-muted uppercase tracking-tight leading-none">
            Infrastructure-grade
          </div>
        </div>

        {/* Rows */}
        {rows.map((r, i) => {
          const last = i === rows.length - 1;
          return (
            <div key={r.dimension} className="contents">
              <div
                className={`px-6 py-5 ${
                  last ? "" : "border-b border-brass-light"
                } bg-parchment/40 flex items-center`}
              >
                <div className="text-xs uppercase tracking-[0.18em] text-brass-dark font-semibold leading-tight">
                  {r.dimension}
                </div>
              </div>
              <div
                className={`px-6 py-5 ${
                  last ? "" : "border-b"
                } border-r border-brass-light text-[15px] text-stone leading-relaxed`}
              >
                {r.tool}
              </div>
              <div
                className={`px-6 py-5 ${
                  last ? "" : "border-b border-brass-light"
                } text-[15px] text-forest leading-relaxed font-medium`}
              >
                {r.infra}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
