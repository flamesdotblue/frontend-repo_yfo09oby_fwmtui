import React from 'react';
import { Mail, Linkedin, Calendar, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav K.',
    text: 'Naga sir transformed the way I think about programming. His sessions are practical, inspiring, and industry-ready.',
  },
  {
    name: 'Meera S.',
    text: 'From zero to internship-ready in 10 weeks. The mentorship and roadmap were spot on!',
  },
];

const ContactSocial = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-transparent to-violet-900/20 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Contact & Booking */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white">Invite for Workshops or Talks</h3>
            <p className="mt-2 text-sm text-white/70">Book a session for your college or org. Get a custom curriculum + hands-on projects.</p>
            <form className="mt-6 grid gap-3">
              <input className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Your Name" />
              <input className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" type="email" />
              <textarea className="min-h-[120px] rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Message / Event details" />
              <button type="button" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]">
                <Calendar size={18} className="mr-2" /> Send Request
              </button>
            </form>
            <div className="mt-4 flex items-center gap-3 text-white/80">
              <a href="mailto:hello@triadacademy.co" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"><Mail size={16} /> Email</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"><Linkedin size={16} /> LinkedIn</a>
            </div>
          </div>

          {/* Social Proof */}
          <div className="grid gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="mb-3 inline-flex items-center gap-2 text-cyan-200"><Quote size={18} /> Testimonial</div>
                <p className="text-white/90">“{t.text}”</p>
                <p className="mt-3 text-sm text-white/60">— {t.name}</p>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10 opacity-0 transition hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSocial;
