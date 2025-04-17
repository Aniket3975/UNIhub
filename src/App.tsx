import React, { useState } from 'react';
import { MessageSquare, Bell, Search, User, Home, Compass, Settings } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import EventsWindow from './components/EventsWindow';
import InterestsWindow from './components/InterestsWindow';
import ClubsWindow from './components/ClubsWindow';
import SearchWindow from './components/SearchWindow';

function App() {
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  const closeWindow = () => setActiveWindow(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5D2F99] via-[#D53A74] to-[#1C89E7] animate-gradient">
      <Header onWindowChange={setActiveWindow} />
      {activeWindow === null && <Hero />}
      {activeWindow === 'events' && <EventsWindow onClose={closeWindow} />}
      {activeWindow === 'interests' && <InterestsWindow onClose={closeWindow} />}
      {activeWindow === 'clubs' && <ClubsWindow onClose={closeWindow} />}
      {activeWindow === 'search' && <SearchWindow onClose={closeWindow} />}
    </div>
  );
}

export default App