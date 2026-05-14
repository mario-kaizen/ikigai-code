export function GapStatement() {
  return (
    <div className="my-10 grid md:grid-cols-2 gap-5">
      {/* Your template */}
      <div className="border-2 border-brass border-dashed bg-cream p-7 rounded-sm">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark font-medium mb-5">
          Your template
        </div>
        <div className="space-y-5">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              Where I am
            </div>
            <div className="font-display text-lg text-forest-muted italic">
              [your current level]
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              Where I&apos;m going
            </div>
            <div className="font-display text-lg text-forest-muted italic">
              [target level]
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5">
              The cost of staying
            </div>
            <div className="font-display text-lg text-forest-muted italic">
              [your real number + unit]
            </div>
          </div>
          <div className="pt-3 border-t border-brass-light flex justify-between text-xs text-stone">
            <span>Signed:</span>
            <span>Date:</span>
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
