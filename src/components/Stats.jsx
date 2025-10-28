import React, { useEffect, useState } from 'react';
import { Users, School, Trophy, Briefcase } from 'lucide-react';

const Counter = ({ end, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(progress * end);
      setCount(value);
      if (progress < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [end, duration]);
  return <span>{count.toLocaleString()}</span>;
};

const StatCard = ({ icon: Icon, label, value, suffix = '+' }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md transition hover:shadow-cyan-500/20">
    <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 p-3 text-cyan-200">
      <Icon size={22} />
    </div>
    <div className="text-3xl font-extrabold text-white">
      <Counter end={value} />{suffix}
    </div>
    <p className="mt-1 text-sm text-white/70">{label}</p>
    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-violet-500/10 blur-2xl" />
    </div>
  </div>
);

const Stats = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-blue-900/20 to-transparent py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
            Impact & Achievements
          </h2>
          <p className="mt-2 text-white/70">Real numbers that reflect the journey of teaching, mentoring, and building futures.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={Users} label="Students Trained" value={10000} />
          <StatCard icon={School} label="Colleges" value={100} />
          <StatCard icon={Briefcase} label="Students Placed" value={1000} />
          <StatCard icon={Trophy} label="Years of Experience" value={5} suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
