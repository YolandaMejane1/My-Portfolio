import React from 'react';
import Section from './Section';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="My toolkit" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => (
          <div key={s.group} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-white">{s.group}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
