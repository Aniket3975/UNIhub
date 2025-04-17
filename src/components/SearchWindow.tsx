import React from 'react';
import { X, Mail, Phone, MapPin } from 'lucide-react';

interface SearchWindowProps {
  onClose: () => void;
}

const SearchWindow = ({ onClose }: SearchWindowProps) => {
  // Mock student data - in a real app, this would come from your backend
  const student = {
    id: "RA2011003010",
    name: "Alex Johnson",
    department: "Computer Science",
    year: "3rd Year",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    email: "alex.j@university.edu",
    phone: "+1 234 567 8900",
    location: "Building A, Room 304",
    interests: ["Programming", "AI", "Robotics"],
    clubs: ["Tech Innovators", "Robotics Club"]
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white neon-text">Student Profile</h2>
          <button onClick={onClose} className="text-white hover:text-[#FFD700]">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="bg-black/30 backdrop-blur-md rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="flex items-center space-x-6">
              <img src={student.image} alt={student.name} className="w-32 h-32 rounded-full object-cover border-4 border-[#FFD700]" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{student.name}</h3>
                <p className="text-[#FFD700] mb-1">{student.id}</p>
                <p className="text-gray-300">{student.department} • {student.year}</p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-[#FFD700]" />
                  <span>{student.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-[#FFD700]" />
                  <span>{student.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-[#FFD700]" />
                  <span>{student.location}</span>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {student.interests.map((interest, index) => (
                    <span key={index} className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>

                <h4 className="text-white font-semibold mt-4 mb-3">Clubs</h4>
                <div className="flex flex-wrap gap-2">
                  {student.clubs.map((club, index) => (
                    <span key={index} className="px-3 py-1 bg-[#FFD700]/20 text-[#FFD700] rounded-full text-sm">
                      {club}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <button className="flex-1 bg-[#FFD700] text-black font-semibold py-2 rounded-full hover:shadow-[0_0_15px_#FFD700] transition-all">
                Send Message
              </button>
              <button className="flex-1 bg-transparent border border-[#FFD700] text-[#FFD700] py-2 rounded-full hover:shadow-[0_0_15px_#FFD700] transition-all">
                Add to Friends
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWindow;