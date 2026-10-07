import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Section from './Section';
import { profile } from '../data/content';

const EMAILJS = { service: 'service_rd2qs5r', template: 'template_kop0ssl', publicKey: '_nRNo9ahj9MMlt-dR' };

const field =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white';
const contactLink = 'inline-flex items-center gap-3 hover:text-indigo-600 dark:hover:text-indigo-400';

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm(EMAILJS.service, EMAILJS.template, formRef.current, EMAILJS.publicKey)
      .then(() => {
        setStatus('sent');
        formRef.current.reset();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I&apos;m always happy to talk about roles, projects or ideas. Send a message and I&apos;ll get back to you.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">
            <li>
              <a href={`mailto:${profile.email}`} className={contactLink}>
                <FaEnvelope /> {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={contactLink}>
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={contactLink}>
                <FaGithub /> GitHub
              </a>
            </li>
          </ul>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">Your name</label>
            <input id="name" name="name" type="text" placeholder="Jane Smith" required className={field} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">Your email</label>
            <input id="email" name="email" type="email" placeholder="jane@company.com" required className={field} />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="How can I help?" required className={field} />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 disabled:opacity-60 sm:w-auto"
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            <p role="status" aria-live="polite" className="mt-3 text-sm">
              {status === 'sent' && <span className="text-green-600 dark:text-green-400">Thanks! Your message was sent.</span>}
              {status === 'error' && <span className="text-red-600 dark:text-red-400">Sorry, that didn&apos;t send. Please try again or email me directly.</span>}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
}
