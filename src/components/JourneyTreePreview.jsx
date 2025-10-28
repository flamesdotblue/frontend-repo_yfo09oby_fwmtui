import React from 'react';
import { Sparkles, Filter } from 'lucide-react';

const mockJourney = [
  {
    id: 1,
    college: 'IIT Hyderabad',
    state: 'Telangana',
    year: 2023,
    students: 180,
    topics: ['Web Dev', 'AI Basics'],
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    college: 'NIT Warangal',
    state: 'Telangana',
    year: 2022,
    students: 220,
    topics: ['DSA', 'System Design'],
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    college: 'Anna University',
    state: 'Tamil Nadu',
    year: 2021,
    students: 150,
    topics: ['Python', 'ML'],
    image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE1MDAxMzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

const JourneyTreePreview = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-transparent to-blue-900/20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Journey Tree
            </h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A living map of colleges, workshops, and events across India. Hover cards glow and expand to reveal key stats.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10">
              <Filter size={16} /> Filter
            </button>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
              <Sparkles size={14} /> Interactive Preview
            </span>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative grid gap-6 md:grid-cols-3">
          {mockJourney.map((item, idx) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md transition hover:shadow-cyan-500/20"
            >
              <img
                src={item.image}
                alt={item.college}
                className="h-44 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{item.college}</h3>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{item.year}</span>
                </div>
                <p className="mt-2 text-sm text-white/70">{item.state}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-white/70">
                  <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-cyan-200/90">{item.students}+ students</span>
                  {item.topics.map((t) => (
                    <span key={t} className="rounded-full bg-violet-400/10 px-2 py-1 text-violet-200/90">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-violet-500/10" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:shadow-violet-600/30">
            Explore Full Journey
          </button>
        </div>
      </div>
    </section>
  );
});

export default JourneyTreePreview;
