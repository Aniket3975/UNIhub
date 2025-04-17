import React from 'react';
import { X, Heart, Code, Music, Camera, Book, Palette, FolderRoot as Football, Coffee } from 'lucide-react';

interface InterestsWindowProps {
  onClose: () => void;
}

const InterestsWindow = ({ onClose }: InterestsWindowProps) => {
  const interests = [
    { id: 1, name: "Programming", icon: Code, color: "#FF6B6B" },
    { id: 2, name: "Music", icon: Music, color: "#4ECDC4" },
    { id: 3, name: "Photography", icon: Camera, color: "#45B7D1" },
    { id: 4, name: "Literature", icon: Book, color: "#96CEB4" },
    { id: 5, name: "Art", icon: Palette, color: "#D4A5A5" },
    { id: 6, name: "Sports", icon: Football, color: "#FFE66D" },
    { id: 7, name: "Coffee", icon: Coffee, color: "#A8E6CF" },
    { id: 8, name: "Gaming", icon: Heart, color: "#FF9A8B" }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white neon-text">Your Interests</h2>
          <button onClick={onClose} className="text-white hover:text-[#FFD700]">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {interests.map((interest) => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.id}
                className="bg-black/30 backdrop-blur-md rounded-lg p-6 flex flex-col items-center hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all cursor-pointer"
                style={{ borderTop: `3px solid ${interest.color}` }}
              >
                <Icon className="w-12 h-12 mb-4" style={{ color: interest.color }} />
                <h3 className="text-white text-lg font-semibold text-center">{interest.name}</h3>
                <button className="mt-4 px-4 py-2 text-sm bg-transparent border border-[#FFD700] text-[#FFD700] rounded-full hover:shadow-[0_0_15px_#FFD700] transition-all">
                  Follow
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InterestsWindow;