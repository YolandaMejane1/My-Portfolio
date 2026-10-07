import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight } from 'react-icons/fa';
import { profile } from '../data/content';
import profilePhoto from '../assets/profile.webp';

const iconLink =
  'rounded-full border border-slate-300 p-3 text-slate-600 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400';

export default function Homepage() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* soft background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/20" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-500/10" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1.3fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-300">
            Based in {profile.location}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Hi, I&apos;m {profile.name.split(' ')[0]}.
          </h1>
          <p className="mt-3 bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">{profile.intro}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700">
              View my work <FaArrowRight className="text-sm" />
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-indigo-400 dark:hover:text-indigo-400">
              Download CV <FaDownload className="text-sm" />
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={iconLink}><FaGithub /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={iconLink}><FaLinkedin /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className={iconLink}><FaEnvelope /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto"
        >
          <div className="rounded-[2rem] bg-gradient-to-br from-indigo-500 to-violet-500 p-1.5 shadow-2xl shadow-indigo-500/20">
            <img
              src={profilePhoto}
              alt={`Portrait of ${profile.name}`}
              className="h-72 w-64 rounded-[1.7rem] object-cover object-[50%_30%] sm:h-96 sm:w-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
