export type Module = {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  diltsLevel: string;
  job: string;
};

export const modules: Module[] = [
  {
    slug: "the-shift",
    number: 1,
    title: "The Shift",
    subtitle: "Tool vs infrastructure",
    diltsLevel: "Purpose",
    job: "Stop arguing about which model is better. Locate yourself honestly on the maturity ladder and commit to where you're going — so the rest of the build has a real starting point.",
  },
  {
    slug: "memory",
    number: 2,
    title: "Memory",
    subtitle: "Failure as archaeology",
    diltsLevel: "Capability",
    job: "Stop re-explaining the same context to your AI every session. Encode every correction as a rule that fires automatically next time — so friction becomes leverage instead of repetition.",
  },
  {
    slug: "source-of-truth",
    number: 3,
    title: "Source of Truth",
    subtitle: "Where data lives",
    diltsLevel: "Environment",
    job: "Stop letting your AI pattern-match plausible-sounding answers. Map every data source your business runs on — so the AI knows where to look and what to trust before it opens its mouth.",
  },
  {
    slug: "identity",
    number: 4,
    title: "Identity",
    subtitle: "Voice as infrastructure",
    diltsLevel: "Identity",
    job: "Stop editing off-brand drafts. Encode your voice — phrases, structures, banned words, hard rules — so your AI sounds like your business by default, not like a generic assistant talking about it.",
  },
  {
    slug: "modes",
    number: 5,
    title: "Modes",
    subtitle: "Personas for different work",
    diltsLevel: "Identity",
    job: "Stop using one AI personality for every job. Build specialised modes so customer-service Claude and strategic-thinking Claude operate under different rules — and your team can invoke them by name.",
  },
  {
    slug: "discipline",
    number: 6,
    title: "Discipline",
    subtitle: "Making it compound",
    diltsLevel: "Beliefs",
    job: "Stop watching the system decay back to chaos. Build the daily, weekly, monthly cadence that keeps your AI infrastructure alive — so the operating layer gets sharper instead of staler.",
  },
];

export const getModule = (slug: string): Module | undefined =>
  modules.find((m) => m.slug === slug);
