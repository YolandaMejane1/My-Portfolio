import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Section from './Section';
import { projects } from '../data/content';

const chip =
  'rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300';
const primaryBtn =
  'inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700';
const ghostBtn =
  'inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-400';

function Links({ project }) {
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      <a href={project.live} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
        Live demo <FaExternalLinkAlt className="text-xs" />
      </a>
      <a href={project.code} target="_blank" rel="noopener noreferrer" className={ghostBtn}>
        <FaGithub /> Code
      </a>
    </div>
  );
}

function Tags({ tags }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className={chip}>{t}</span>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      {featured && (
        <article className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 md:grid-cols-2">
          <img src={featured.image} alt={`${featured.title} preview`} className="h-full max-h-80 w-full object-cover md:max-h-none" loading="lazy" />
          <div className="p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Featured project</p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{featured.title}</h3>
            <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{featured.description}</p>
            <Tags tags={featured.tags} />
            <Links project={featured} />
          </div>
        </article>
      )}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <article key={p.title} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <img src={p.image} alt={`${p.title} preview`} className="aspect-[16/10] w-full object-cover object-top" loading="lazy" />
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.description}</p>
              {p.note && <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{p.note}</p>}
              <Tags tags={p.tags} />
              <Links project={p} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
