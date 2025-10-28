import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react';

const Hero = ({ onViewJourney }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-cyan-500/10 via-blue-700/10 to-violet-800/10">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          <p className="text-sm text-white/80">TRIAD Academy • CEO • Mentor</p>
        </div>

        <h1 className="text-balance bg-gradient-to-r from-cyan-300 via-blue-200 to-violet-300 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl">
          Naga Sai
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
          Educator • Technologist • CEO — Inspiring the Next Gen Coders.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onViewJourney}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:shadow-violet-600/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          >
            View My Journey <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
          </button>

          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <Download size={18} /> Download Resume
          </a>

          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@triadacademy.co"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition hover:bg-white/10"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
