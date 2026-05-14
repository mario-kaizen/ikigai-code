"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Props = {
  moduleNumber: string;
  moduleTitle: string;
  nextSlug?: string;
  nextTitle?: string;
};

export function ModuleComplete({
  moduleNumber,
  moduleTitle,
  nextSlug,
  nextTitle,
}: Props) {
  const [completed, setCompleted] = useState(false);
  const [completedAt, setCompletedAt] = useState<string | null>(null);
  const storageKey = `ikigaicode-module-${moduleNumber}-complete`;

  useEffect(() => {
    const c = localStorage.getItem(storageKey);
    if (c) {
      setCompleted(true);
      setCompletedAt(c);
    }
  }, [storageKey]);

  const markComplete = () => {
    const now = new Date().toISOString();
    localStorage.setItem(storageKey, now);
    setCompleted(true);
    setCompletedAt(now);
  };

  const undoComplete = () => {
    localStorage.removeItem(storageKey);
    setCompleted(false);
    setCompletedAt(null);
  };

  if (completed) {
    return (
      <section className="my-16 p-10 bg-forest-muted text-warm-white rounded-sm border border-brass relative">
        <div className="text-[10px] uppercase tracking-[0.25em] text-brass-light font-medium mb-3">
          ✓ Module 0{moduleNumber} complete
        </div>
        <h3 className="font-display text-4xl mb-4 text-warm-white">
          You closed the loop.
        </h3>
        <p className="text-parchment leading-relaxed mb-6 max-w-2xl">
          You ran the work, caught the pattern you&apos;ve been living with for
          months, and locked the first piece of your operating system into
          place. That&apos;s the ikigAI feedback loop. From here, it compounds.
        </p>
        {completedAt && (
          <p className="text-xs text-brass-light italic mb-6">
            Completed {new Date(completedAt).toLocaleDateString()}
          </p>
        )}
        {nextSlug && nextTitle ? (
          <Link
            href={`/modules/${nextSlug}`}
            className="inline-flex items-center px-6 py-3 bg-brass text-forest-muted font-medium tracking-wide uppercase text-sm hover:bg-brass-light transition-colors"
          >
            Continue to Module 0{parseInt(moduleNumber, 10) + 1} | {nextTitle} →
          </Link>
        ) : (
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-brass text-forest-muted font-medium tracking-wide uppercase text-sm hover:bg-brass-light transition-colors"
          >
            Return home →
          </Link>
        )}
        <button
          type="button"
          onClick={undoComplete}
          className="absolute top-4 right-5 text-xs text-brass-light/70 hover:text-brass-light underline-offset-2 hover:underline transition-colors"
          title={`Mark Module 0${moduleNumber} as incomplete`}
        >
          unmark
        </button>
      </section>
    );
  }

  return (
    <section className="my-16 p-10 bg-cream border border-brass rounded-sm">
      <div className="text-[10px] uppercase tracking-[0.25em] text-brass-dark font-medium mb-3">
        Mark Module 0{moduleNumber} complete
      </div>
      <h3 className="font-display text-3xl text-forest-muted mb-4">
        Have you signed your {moduleTitle.toLowerCase()} artifact and shared it?
      </h3>
      <p className="text-forest leading-relaxed mb-6 max-w-2xl">
        Don&apos;t click this until you actually have. The accountability is
        the work. Lying to a button cheats yourself, not the program.
      </p>
      <button
        type="button"
        onClick={markComplete}
        className="inline-flex items-center px-6 py-3 bg-forest-muted text-warm-white font-medium tracking-wide uppercase text-sm hover:bg-forest-light transition-colors"
      >
        I&apos;ve signed and shared. Lock it in.
      </button>
    </section>
  );
}
