type CalloutVariant = "take" | "truth" | "try";

const variants: Record<
  CalloutVariant,
  { label: string; border: string; accent: string; bg: string }
> = {
  take: {
    label: "Mario's take",
    border: "border-brass",
    accent: "text-brass-dark",
    bg: "bg-cream",
  },
  truth: {
    label: "The truth nobody told me",
    border: "border-rust",
    accent: "text-rust",
    bg: "bg-cream",
  },
  try: {
    label: "Try this when you're stuck",
    border: "border-sage",
    accent: "text-sage",
    bg: "bg-cream",
  },
};

type CalloutProps = {
  variant: CalloutVariant;
  children: React.ReactNode;
};

export function Callout({ variant, children }: CalloutProps) {
  const v = variants[variant];
  return (
    <aside
      className={`my-8 border-l-2 ${v.border} ${v.bg} pl-6 pr-5 py-5 rounded-r`}
    >
      <div
        className={`text-[10px] uppercase tracking-[0.25em] ${v.accent} font-medium mb-2`}
      >
        {v.label}
      </div>
      <div className="text-forest leading-relaxed italic">{children}</div>
    </aside>
  );
}
