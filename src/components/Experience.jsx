import React from 'react';
import Section from './Section';
import { experience } from '../data/content';

const chip =
  'rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="relative space-y-8 border-l-2 border-slate-200 pl-8 dark:border-slate-800">
        {experience.map((job) => (
          <li key={job.company} className="relative">
            <span aria-hidden="true" className="absolute -left-[2.55rem] top-2 h-4 w-4 rounded-full border-4 border-white bg-indigo-600 dark:border-slate-950" />
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {job.role} <span className="font-medium text-slate-500 dark:text-slate-400">· {job.company}</span>
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{job.period}</p>
              </div>
              {job.location && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{job.location}</p>}

              {job.highlights.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className={chip}>{tag}</span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
