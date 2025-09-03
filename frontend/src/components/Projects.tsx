import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Personal Portfolio Website:",
      description: "Built using Tailwind CSS with fade-in animations, responsive layout, CV section, and contact form."
    },
    {
      title: "Mini E-Commerce Web Page:",
      description: "Designed product cards and shopping cart features using HTML/CSS/JS. View Project"
    },
    {
      title: "ATM Simulation System:",
      description: "Developed an ATM Simulation System implementing queue-based customer management and data structures (queues, linked lists) to efficiently handle cash withdrawals, deposits, fund transfers, and mini statements."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-cyan-400 rounded-full"></div>
            <Code className="w-6 h-6 text-cyan-400" />
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="group hover:bg-white/5 rounded-lg p-6 transition-all duration-300 border border-transparent hover:border-cyan-400/30">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-3">{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer hover:scale-110 transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;