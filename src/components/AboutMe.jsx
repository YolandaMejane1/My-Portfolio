import React from 'react';
import Section from './Section';
import { about } from '../data/content';

export default function AboutMe() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="grid grid-cols-2 gap-4 self-start">
          {about.facts.map((f) => (
            <div key={f.label} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">{f.label}</dt>
              <dd className="mt-1 font-semibold text-slate-900 dark:text-white">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
