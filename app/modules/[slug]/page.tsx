import { notFound } from "next/navigation";
import Link from "next/link";
import { modules, getModule } from "@/lib/modules";
import { ModuleHeader } from "@/components/ModuleHeader";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const m = getModule(slug);
  if (!m) return {};
  return {
    title: `Module 0${m.number} | ${m.title} — ikigAI Code`,
    description: m.subtitle,
  };
}

export default async function ModulePage({ params }: { params: Params }) {
  const { slug } = await params;
  const m = getModule(slug);
  if (!m) notFound();

  let Content;
  try {
    Content = (await import(`@/content/modules/${slug}.mdx`)).default;
  } catch {
    Content = null;
  }

  const idx = modules.findIndex((x) => x.slug === slug);
  const prev = idx > 0 ? modules[idx - 1] : null;
  const next = idx < modules.length - 1 ? modules[idx + 1] : null;

  return (
    <article className="max-w-3xl px-6 md:px-12 py-12 md:py-16 mx-auto">
      <ModuleHeader module={m} />

      {Content ? (
        <div className="prose-ikigai">
          <Content />
        </div>
      ) : (
        <InProductionPlaceholder module={m} />
      )}

      {/* Pagination */}
      <nav className="mt-20 pt-10 border-t border-brass-light grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/modules/${prev.slug}`}
            className="group border border-brass-light hover:border-brass bg-cream hover:bg-parchment transition-colors p-5 text-left"
          >
            <div className="text-[10px] uppercase tracking-[0.25em] text-stone mb-2 font-medium">
              ← Previous
            </div>
            <div className="font-display text-xl text-forest-muted group-hover:text-brass-dark">
              0{prev.number} | {prev.title}
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/modules/${next.slug}`}
            className="group border border-brass-light hover:border-brass bg-cream hover:bg-parchment transition-colors p-5 text-right"
          >
            <div className="text-[10px] uppercase tracking-[0.25em] text-stone mb-2 font-medium">
              Next →
            </div>
            <div className="font-display text-xl text-forest-muted group-hover:text-brass-dark">
              0{next.number} | {next.title}
            </div>
          </Link>
        ) : (
          <Link
            href="/"
            className="group border border-brass-light hover:border-brass bg-cream hover:bg-parchment transition-colors p-5 text-right"
          >
            <div className="text-[10px] uppercase tracking-[0.25em] text-stone mb-2 font-medium">
              You&apos;ve completed all six modules
            </div>
            <div className="font-display text-xl text-forest-muted group-hover:text-brass-dark">
              Return to home →
            </div>
          </Link>
        )}
      </nav>
    </article>
  );
}

function InProductionPlaceholder({
  module: m,
}: {
  module: { number: number; title: string; job: string };
}) {
  const homework: Record<number, string[]> = {
    2: [
      "Every time Claude Code drafts something off-brand this week, write down the correction you made. One line, in a note. Don't try to encode it yet — just catch it.",
      "By Friday, you'll have a list of 5–15 corrections. That list is the raw material for Module 02. We'll turn each one into a binding rule together.",
    ],
    3: [
      "Make a one-screen list of every place real data about your business lives. CRM, sheets, docs, your head, Slack channels, that one Notion DB you keep forgetting.",
      "Don't try to organise it yet. Just inventory it. The map happens in Module 03.",
    ],
    4: [
      "Pull 10 pieces of writing that sound unmistakably like you — emails, captions, voice memos transcribed, anything. Paste them into one file. That's your voice corpus for Module 04.",
    ],
    5: [
      "Name the top 3 distinct work-types you use Claude for (e.g. customer replies, strategic thinking, content drafting). Note what each needs that the others don't. That's the input for Module 05.",
    ],
    6: [
      "Notice every time this week you reach for a memory rule, identity standard, or mode and feel the system carry the weight. Note three moments. That's your evidence the discipline is taking. Module 06 turns it into a cadence.",
    ],
  };

  return (
    <div className="space-y-10">
      <div className="bg-cream border border-brass-light p-8 rounded-sm">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark font-medium mb-3">
          In production
        </div>
        <h2 className="font-display text-3xl text-forest-muted mb-4">
          Module 0{m.number} is being built.
        </h2>
        <p className="text-forest leading-relaxed mb-2">
          The structure is locked. The words are being polished against the
          Module 01 calibration target. You&apos;ll get an email the moment
          it&apos;s live.
        </p>
        <p className="text-stone text-sm italic">
          Modules drop one at a time, in sequence. Run · Catch · Lock.
        </p>
      </div>

      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark font-medium mb-3">
          What this module will do
        </div>
        <p className="text-forest leading-relaxed text-lg">{m.job}</p>
      </div>

      {homework[m.number] && (
        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark font-medium mb-3">
            Your homework while you wait
          </div>
          <div className="space-y-4 text-forest leading-relaxed">
            {homework[m.number].map((h, i) => (
              <div
                key={i}
                className="border-l-2 border-brass-light pl-5 py-1"
              >
                {h}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-parchment/40 border border-brass-light p-6 rounded-sm">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark font-medium mb-2">
          Stay in the loop
        </div>
        <p className="text-forest leading-relaxed text-sm">
          The system you&apos;re building in Module 01 doesn&apos;t pause while
          you wait for the next module. Keep noticing the friction. Catch the
          patterns. The next module will give you the tools to lock them.
        </p>
      </div>
    </div>
  );
}
