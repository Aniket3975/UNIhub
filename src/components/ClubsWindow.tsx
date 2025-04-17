import React from 'react';
import { X, Users, Star } from 'lucide-react';

interface ClubsWindowProps {
  onClose: () => void;
}

const ClubsWindow = ({ onClose }: ClubsWindowProps) => {
  const clubs = [
    {
      id: 1,
      name: "Tech Innovators",
      members: 234,
      description: "A community of tech enthusiasts working on innovative projects",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Creative Arts Society",
      members: 189,
      description: "Express yourself through various forms of art and creativity",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Debate Club",
      members: 156,
      description: "Enhance your public speaking and critical thinking skills",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white neon-text">College Clubs</h2>
          <button onClick={onClose} className="text-white hover:text-[#FFD700]">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <div key={club.id} className="bg-black/30 backdrop-blur-md rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all">
              <img src={club.image} alt={club.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{club.name}</h3>
                <div className="flex items-center text-[#FFD700] mb-3">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{club.members} members</span>
                </div>
                <p className="text-gray-300">{club.description}</p>
                <div className="mt-4 flex space-x-3">
                  <button className="flex-1 bg-transparent border border-[#FFD700] text-[#FFD700] py-2 rounded-full hover:shadow-[0_0_15px_#FFD700] transition-all">
                    Join Club
                  </button>
                  <button className="p-2 border border-[#FFD700] text-[#FFD700] rounded-full hover:shadow-[0_0_15px_#FFD700] transition-all">
                    <Star className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClubsWindow;