import React from 'react';
import { X, Calendar } from 'lucide-react';

interface EventsWindowProps {
  onClose: () => void;
}

const EventsWindow = ({ onClose }: EventsWindowProps) => {
  const events = [
    {
      id: 1,
      title: "Tech Fest 2025",
      date: "March 15, 2025",
      description: "Annual technology festival featuring coding competitions, robotics workshops, and tech talks.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Cultural Night",
      date: "April 5, 2025",
      description: "A celebration of diverse cultures through music, dance, and traditional performances.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Sports Meet",
      date: "May 10, 2025",
      description: "Inter-college sports competition featuring various athletic events and team sports.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white neon-text">Upcoming Events</h2>
          <button onClick={onClose} className="text-white hover:text-[#FFD700]">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-black/30 backdrop-blur-md rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                <div className="flex items-center text-[#FFD700] mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <p className="text-gray-300">{event.description}</p>
                <button className="mt-4 w-full bg-transparent border border-[#FFD700] text-[#FFD700] py-2 rounded-full hover:shadow-[0_0_15px_#FFD700] transition-all">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsWindow;