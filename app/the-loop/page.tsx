import { LoopDiagram } from "@/components/LoopDiagram";

export default function TheLoopPage() {
  return (
    <div className="max-w-4xl px-6 md:px-12 py-14 md:py-20 mx-auto">
      <div className="text-[10px] uppercase tracking-[0.3em] text-brass-dark mb-4 font-medium">
        The Method
      </div>
      <h1 className="font-display text-5xl md:text-7xl text-forest-muted leading-[0.95] mb-6">
        The ikigAI<br />feedback loop
      </h1>
      <p className="text-xl text-brass-dark italic mb-12">
        Run · Catch · Lock
      </p>

      <LoopDiagram />

      <p className="text-lg text-forest leading-relaxed my-16 max-w-3xl">
        Three verbs. One operating cycle. The thing every module in this
        program teaches you to run on your own Claude Code infrastructure.
        Most people stop at &quot;Run.&quot; Some get to &quot;Catch.&quot;
        Almost no one closes the loop with &quot;Lock.&quot; That&apos;s the
        gap this program closes.
      </p>

      <div className="space-y-12">
        {[
          {
            v: "Run",
            n: "01",
            title: "Ship the work.",
            d: "Execute. Put it in the world. Build the email, draft the SMS, write the report. Don't theorise. The loop never starts until something real is in motion. This is where most people are already doing fine — they do the work. The problem comes after.",
            cap: "Most people stop here. They run, they ship, and they move on. The pattern they could have caught slips by.",
          },
          {
            v: "Catch",
            n: "02",
            title: "Grab the pattern before it slips.",
            d: "Friction surfaced. Something compounded. The AI gave you the same off-brand draft for the third time. You noticed. Most people feel the moment and let it pass — they think it's a one-off. It isn't. The third occurrence is data. The catch is the discipline of recognising a pattern in real time, not three months later when you finally lose patience.",
            cap: "This is the move almost no one runs consciously. The whole program teaches you to install it as a reflex.",
          },
          {
            v: "Lock",
            n: "03",
            title: "Encode it so future-you doesn't repeat the lesson.",
            d: "Turn the pattern into a binding rule with a date, a why, and a trigger. Save it where your Claude Code session will see it next time. The friction becomes operating logic. The lesson stops being your problem and starts being the system's job. Future-you doesn't relive the breakdown — the rule fires before it happens.",
            cap: "Locking is what makes the loop compound. Without it, you're just an attentive person with no leverage.",
          },
        ].map((s) => (
          <section
            key={s.v}
            className="border-l-2 border-brass pl-8 py-2"
          >
            <div className="flex items-baseline gap-4 mb-3">
              <span className="font-display text-sm tracking-[0.2em] text-brass-dark">
                STEP {s.n}
              </span>
            </div>
            <h2 className="font-display text-6xl text-forest-muted mb-3 leading-none">
              {s.v}
            </h2>
            <div className="font-display text-2xl text-brass-dark italic mb-4">
              {s.title}
            </div>
            <p className="text-forest leading-relaxed text-lg mb-5">{s.d}</p>
            <div className="text-sm text-stone italic border-t border-brass-light pt-4">
              {s.cap}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-20 p-10 bg-cream border border-brass/40 rounded">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark mb-3 font-medium">
          Why &quot;ikigAI&quot; feedback loop
        </div>
        <p className="text-forest leading-relaxed">
          The ikigAI methodology is the foundation of Mario&apos;s coaching
          work — it&apos;s how he helps founders find the work they&apos;re built
          for. At its heart, ikigAI is a feedback loop: live, notice what
          energises you, encode it into the shape of your business.
        </p>
        <p className="text-forest leading-relaxed mt-4">
          The same loop, pointed at Claude Code infrastructure, becomes Run ·
          Catch · Lock. Same shape, different domain. You&apos;re not learning
          a new framework — you&apos;re applying a framework you already know
          to a tool you already use. That&apos;s why it compounds so fast.
        </p>
      </section>
    </div>
  );
}
