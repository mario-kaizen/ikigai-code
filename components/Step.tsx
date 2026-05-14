type StepProps = {
  number: string;
  title: string;
  children: React.ReactNode;
};

export function Step({ number, title, children }: StepProps) {
  return (
    <section className="my-10 grid grid-cols-[auto_1fr] gap-6 items-start">
      <div className="bg-forest-muted text-warm-white w-14 h-14 rounded-sm flex items-center justify-center">
        <div className="font-display text-2xl leading-none">{number}</div>
      </div>
      <div className="min-w-0">
        <h3 className="font-display text-2xl text-forest-muted mb-4 mt-2">
          {title}
        </h3>
        <div className="space-y-4 text-forest">{children}</div>
      </div>
    </section>
  );
}
