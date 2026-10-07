import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { profile } from '../data/content';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.</p>
        <div className="flex gap-4 text-lg">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-indigo-600 dark:hover:text-indigo-400"><FaGithub /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-indigo-600 dark:hover:text-indigo-400"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}
