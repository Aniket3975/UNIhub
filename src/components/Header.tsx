import React, { useState } from 'react';
import { MessageSquare, Bell, Search, User, Home, Compass, Settings, Calendar, Users, Heart } from 'lucide-react';

interface HeaderProps {
  onWindowChange: (window: string | null) => void;
}

const Header = ({ onWindowChange }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.startsWith('RA') && searchQuery.length === 12) {
      onWindowChange('search');
    }
  };

  return (
    <header className="bg-black/20 backdrop-blur-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white mr-8 neon-text">UniHUB</h1>
            <nav className="hidden md:flex space-x-8">
              <NavLink icon={<Home className="w-5 h-5" />} text="Home" onClick={() => onWindowChange(null)} />
              <NavLink icon={<Calendar className="w-5 h-5" />} text="Events" onClick={() => onWindowChange('events')} />
              <NavLink icon={<Heart className="w-5 h-5" />} text="Interests" onClick={() => onWindowChange('interests')} />
              <NavLink icon={<Users className="w-5 h-5" />} text="Clubs" onClick={() => onWindowChange('clubs')} />
              <NavLink icon={<MessageSquare className="w-5 h-5" />} text="Messages" onClick={() => onWindowChange('messages')} />
              <NavLink icon={<User className="w-5 h-5" />} text="Profile" onClick={() => onWindowChange('profile')} />
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search by RA number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFD700] w-48"
                pattern="RA\d{10}"
                title="Please enter a valid RA number (12 digits starting with RA)"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-300" />
              </button>
            </form>
            <button className="relative p-2 text-gray-200 hover:text-white transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#FFD700] rounded-full"></span>
            </button>
            <button className="bg-[#FFD700] text-black font-semibold px-6 py-2 rounded-full hover:shadow-[0_0_15px_#FFD700] transition-all transform hover:scale-105">
              Join UniHUB
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ icon, text, onClick }: { icon: React.ReactNode; text: string; onClick: () => void }) => (
  <a
    href="#"
    onClick={(e) => { e.preventDefault(); onClick(); }}
    className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
  >
    {icon}
    <span className="group-hover:text-[#FFD700]">{text}</span>
  </a>
);

export default Header;