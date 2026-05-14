export function WalkOut({ children }: { children: React.ReactNode }) {
  return (
    <section className="my-12 p-8 bg-cream border border-brass/40 rounded-lg">
      <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark mb-3 font-medium">
        Walk-out artifact
      </div>
      <div className="text-forest leading-relaxed">{children}</div>
    </section>
  );
}
