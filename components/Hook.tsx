export function Hook({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 py-8 px-2">
      <div className="font-display text-2xl md:text-4xl text-forest-muted leading-[1.15] tracking-tight">
        {children}
      </div>
    </div>
  );
}
