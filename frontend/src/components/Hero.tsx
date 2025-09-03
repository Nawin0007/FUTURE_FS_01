import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <img
            src="/photo.jpeg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl object-cover"
          />
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                Kethavath Naveen
              </h1>
              <p className="text-xl md:text-2xl text-cyan-100 mb-6">
                Student & Aspiring Software Developer
              </p>
            </div>
            <div className="hidden md:flex flex-col items-end text-sm text-cyan-100">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4" />
                <span>14 Aug 2005</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-cyan-100 mb-8 opacity-90">
            Welcome to my portfolio — scroll to explore ✨
          </p>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto">
              <div className="w-1 h-3 bg-white/60 rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;