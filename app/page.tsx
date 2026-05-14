import Link from "next/link";
import { modules } from "@/lib/modules";
import { LoopDiagram } from "@/components/LoopDiagram";

export default function HomePage() {
  return (
    <div className="max-w-4xl px-12 py-20 mx-auto">
      <div className="text-[10px] uppercase tracking-[0.3em] text-brass-dark mb-6 font-medium">
        ikigAI Code | A Mario Paguio program
      </div>

      <h1 className="font-display text-5xl md:text-7xl text-forest-muted leading-[0.95] mb-8">
        Stop using AI<br />
        as a tool.<br />
        <span className="text-brass-dark">Start running it</span><br />
        as infrastructure.
      </h1>

      <p className="text-xl text-forest leading-relaxed mb-10 max-w-3xl font-light">
        Six modules. Six artifacts. One outcome: a working personal AI
        operating system that compounds every week, sounds like you, and
        survives every model upgrade.
      </p>

      <div className="flex gap-4 mb-20">
        <Link
          href="/modules/the-shift"
          className="inline-flex items-center px-7 py-4 bg-forest-muted text-warm-white font-medium tracking-wide uppercase text-sm hover:bg-forest-light transition-colors"
        >
          Start with Module 01 →
        </Link>
        <Link
          href="/the-loop"
          className="inline-flex items-center px-7 py-4 border border-brass-dark text-brass-dark font-medium tracking-wide uppercase text-sm hover:bg-brass/10 transition-colors"
        >
          See the Loop
        </Link>
      </div>

      <hr className="border-brass-light mb-16" />

      {/* The hook */}
      <section className="mb-20">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark mb-4 font-medium">
          The problem you came here with
        </div>
        <div className="font-display text-3xl md:text-4xl text-forest-muted leading-[1.15] tracking-tight mb-8">
          You didn&apos;t come here because Claude doesn&apos;t work for you.
          You came here because deep down, you know you&apos;re using it wrong.
          And you can&apos;t quite name why.
        </div>
        <div className="space-y-5 text-lg text-forest leading-relaxed font-light">
          <p>
            You open a new Claude Code session. Different prompt, different
            tone, different output. You blame the model. You blame the prompt.
            You try the new version. You watch another demo on Twitter.
            Nothing sticks.
          </p>
          <p>
            That&apos;s not Claude failing. That&apos;s you running a
            tool-grade workflow at a moment that demands infrastructure-grade
            discipline. You&apos;re driving an F1 car like it&apos;s an Uber.
          </p>
          <p className="text-brass-dark italic">
            ikigAI Code is the operating layer that goes underneath your
            Claude Code. Once it exists, every model upgrade compounds your
            work instead of resetting it.
          </p>
        </div>
      </section>

      {/* Who this is for */}
      <section className="mb-20">
        <h2 className="font-display text-4xl text-forest-muted mb-8">Who this is for</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-sage mb-2 font-medium">
              You&apos;re in
            </div>
            <ul className="space-y-3 text-forest">
              <li>An operator running a real business who&apos;s tired of Claude Code hallucinating your brand.</li>
              <li>A coach or consultant who wants Claude to sound like you, not a generic assistant.</li>
              <li>A founder whose team can&apos;t inherit your standards because they live in your head.</li>
              <li>A builder who suspects Claude Code can do more than you&apos;re currently getting from it.</li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-rust mb-2 font-medium">
              You&apos;re not in
            </div>
            <ul className="space-y-3 text-forest">
              <li>If you want a list of 100 ChatGPT prompts, this isn&apos;t that.</li>
              <li>If you want shortcuts that bypass discipline, this isn&apos;t that either.</li>
              <li>If you&apos;re looking for the latest AI model debate, you&apos;ll be bored here.</li>
              <li>If you&apos;re unwilling to build, you&apos;ll get nothing from this.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The promise — job to be done */}
      <section className="mb-20">
        <h2 className="font-display text-4xl text-forest-muted mb-3">What you walk away with</h2>
        <p className="text-stone mb-10">
          Six artifacts. Each one does a specific job in your operating system.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              n: "01",
              t: "A signed gap statement",
              j: "So you stop pretending you're further along than you are, and start moving from where you actually stand.",
            },
            {
              n: "02",
              t: "Your first three memory rules",
              j: "So your AI stops repeating the same off-brand mistake. Friction encoded once. Gone forever.",
            },
            {
              n: "03",
              t: "Your Source-of-Truth Map",
              j: "So your AI works from real data, not from plausible-sounding pattern-matching. You know what it knows.",
            },
            {
              n: "04",
              t: "Your voice DNA file",
              j: "So your AI sounds like your business by default. Drafts are 80% there on the first try, not 40%.",
            },
            {
              n: "05",
              t: "Your first custom mode",
              j: "So one word switches the AI's whole operating personality. Different work, different rules, zero context-loading every time.",
            },
            {
              n: "06",
              t: "Your compounding plan",
              j: "So the system gets sharper every week, not staler. The operating layer becomes a flywheel instead of a one-time setup.",
            },
          ].map((a) => (
            <div key={a.n} className="border border-brass-light bg-cream p-6">
              <div className="font-display text-2xl text-brass-dark mb-2">{a.n}</div>
              <div className="font-display text-xl text-forest-muted mb-3">{a.t}</div>
              <div className="text-sm text-forest leading-relaxed">
                {a.j}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Loop — actual diagram */}
      <section className="mb-20">
        <h2 className="font-display text-4xl text-forest-muted mb-3">The Loop</h2>
        <p className="text-stone mb-6">
          The three-verb engine underneath every module. The spine of the method.
        </p>
        <LoopDiagram />
        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-3xl mx-auto">
          <div>
            <div className="font-display text-lg text-forest-muted mb-1">Run</div>
            <p className="text-sm text-forest leading-relaxed">
              Ship the work. Nothing happens until you do.
            </p>
          </div>
          <div>
            <div className="font-display text-lg text-forest-muted mb-1">Catch</div>
            <p className="text-sm text-forest leading-relaxed">
              Grab the pattern the moment friction surfaces. Before it slips.
            </p>
          </div>
          <div>
            <div className="font-display text-lg text-forest-muted mb-1">Lock</div>
            <p className="text-sm text-forest leading-relaxed">
              Encode it as a binding rule. Future-you doesn&apos;t relive the lesson.
            </p>
          </div>
        </div>
        <p className="mt-10 text-brass-dark italic text-center">
          This is the ikigAI feedback loop. Six modules teach you to run it on
          your own Claude Code infrastructure. Then it runs forever.
        </p>
      </section>

      {/* The six modules — job to be done */}
      <section className="mb-20">
        <h2 className="font-display text-4xl text-forest-muted mb-3">The six modules</h2>
        <p className="text-stone mb-10">
          Built in order. Each one does a specific job. Each one earns the next.
        </p>
        <div className="space-y-3">
          {modules.map((m) => (
            <Link
              key={m.slug}
              href={`/modules/${m.slug}`}
              className="block group border border-brass-light hover:border-brass bg-cream hover:bg-parchment transition-colors p-6"
            >
              <div className="flex items-start gap-6">
                <div className="font-display text-4xl text-brass-dark shrink-0 w-16 leading-none pt-1">
                  0{m.number}
                </div>
                <div className="flex-1">
                  <div className="font-display text-2xl text-forest-muted group-hover:text-brass-dark transition-colors">
                    {m.title}
                    <span className="text-stone text-base ml-3 font-body normal-case font-light italic">
                      {m.subtitle}
                    </span>
                  </div>
                  <p className="text-sm text-forest mt-2 leading-relaxed max-w-2xl">
                    {m.job}
                  </p>
                </div>
                <div className="text-brass-dark text-2xl opacity-0 group-hover:opacity-100 transition-opacity self-center">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* A note from Mario */}
      <section className="mb-20 bg-cream border border-brass-light p-10">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark mb-4 font-medium">
          A note from Mario
        </div>
        <div className="space-y-5 text-lg text-forest leading-relaxed font-light">
          <p>
            I built this because I kept watching smart operators give up on AI.
            Not because the model failed them. Because they were running it
            without the operating layer that makes any of this work.
          </p>
          <p>
            I built my own version of this scaffolding over eighteen months of
            small failures and quiet wins. Every rule in my system traces back
            to a specific moment something broke and I refused to let it break
            again. That&apos;s the method. That&apos;s the whole method.
          </p>
          <p>
            What makes this different from another AI tutorial isn&apos;t the
            information. The information is on YouTube for free. The difference
            is the externalised operating pattern of someone who actually runs
            a business on this infrastructure. You leave with the same
            scaffolding I run, calibrated to you.
          </p>
          <p className="text-brass-dark italic">
            If you&apos;re ready, Module 01 starts where every transformation
            does: locating yourself honestly.
          </p>
          <p className="text-forest-muted pt-3 font-display text-2xl">— Mario</p>
        </div>
      </section>

      <div className="text-center pb-10">
        <Link
          href="/modules/the-shift"
          className="inline-flex items-center px-8 py-5 bg-forest-muted text-warm-white font-medium tracking-wide uppercase hover:bg-forest-light transition-colors"
        >
          Begin Module 01 | The Shift →
        </Link>
      </div>
    </div>
  );
}
