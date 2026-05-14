type Quadrant = {
  label: string;
  question: string;
  bullets: string[];
};

type FourMATProps = {
  why: Quadrant;
  what: Quadrant;
  how: Quadrant;
  whatIf: Quadrant;
};

export function FourMAT({ why, what, how, whatIf }: FourMATProps) {
  const quadrants = [
    { ...why, accent: "text-rust" },
    { ...what, accent: "text-brass-dark" },
    { ...how, accent: "text-moss" },
    { ...whatIf, accent: "text-sage" },
  ];

  return (
    <div className="my-12 border border-brass-light rounded-lg overflow-hidden bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-brass-light">
        {quadrants.map((q, i) => (
          <div
            key={i}
            className={`p-7 ${i < 2 ? "md:border-b md:border-brass-light" : ""}`}
          >
            <div className={`text-[10px] uppercase tracking-[0.25em] ${q.accent} mb-2 font-medium`}>
              {q.label}
            </div>
            <div className="font-display text-2xl text-forest-muted mb-4 leading-tight">
              {q.question}
            </div>
            <ul className="space-y-2">
              {q.bullets.map((b, j) => (
                <li
                  key={j}
                  className="text-sm text-forest leading-relaxed pl-4 relative"
                >
                  <span className={`absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-current ${q.accent} opacity-70`} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
