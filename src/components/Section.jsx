import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ id, eyebrow, title, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-16 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {title}
          </h2>
          <div className="mt-10">{children}</div>
        </motion.div>
      </div>
    </section>
  );
}
