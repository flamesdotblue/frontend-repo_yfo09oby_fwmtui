import React, { useRef } from 'react';
import Hero from './components/Hero';
import JourneyTreePreview from './components/JourneyTreePreview';
import Stats from './components/Stats';
import ContactSocial from './components/ContactSocial';

function App() {
  const journeyRef = useRef(null);
  const handleViewJourney = () => {
    journeyRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen w-full bg-[#05060a] text-white">
      <Hero onViewJourney={handleViewJourney} />
      <main>
        <JourneyTreePreview ref={journeyRef} />
        <Stats />
        <ContactSocial />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Naga Sai • TRIAD Academy. Built with love for the next gen coders.
      </footer>
    </div>
  );
}

export default App;
