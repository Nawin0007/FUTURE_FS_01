import React from 'react';
import { Award } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "NPTEL Python Certification",
      description: "Completed foundational programming course focused on Python."
    },
    {
      title: "Salesforce Agentforce Specialist",
      description:"Earned Salesforce Agent Force Specialist Certification, demonstrating proficiency in Salesforce tools and customer relationship management solutions."
    },
    {
      title: "Portfolio Design",
      description: "Built and deployed a personal site with Tailwind CSS, animations, and contact integration."
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 shadow-2xl text-white">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-amber-400 rounded-full"></div>
            <Award className="w-6 h-6 text-amber-400" />
            <h2 className="text-2xl font-bold">Achievements</h2>
          </div>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="group hover:bg-white/10 rounded-lg p-6 transition-all duration-300 border border-transparent hover:border-amber-400/30">
                <h3 className="font-bold text-white text-lg mb-2">{achievement.title}</h3>
                <p className="text-purple-100 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
