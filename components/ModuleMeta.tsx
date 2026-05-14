type Props = {
  readTime: string;
  exerciseTime?: string;
  artifact: string;
};

export function ModuleMeta({ readTime, exerciseTime, artifact }: Props) {
  return (
    <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
      <div className="bg-cream border border-brass-light p-4 rounded-sm">
        <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1">
          Read time
        </div>
        <div className="font-display text-lg text-forest-muted">{readTime}</div>
      </div>
      {exerciseTime && (
        <div className="bg-cream border border-brass-light p-4 rounded-sm">
          <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1">
            Exercise
          </div>
          <div className="font-display text-lg text-forest-muted">
            {exerciseTime}
          </div>
        </div>
      )}
      <div className="bg-cream border border-brass-light p-4 rounded-sm col-span-2 md:col-span-1">
        <div className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1">
          Walk-out artifact
        </div>
        <div className="font-display text-lg text-forest-muted">{artifact}</div>
      </div>
    </div>
  );
}
