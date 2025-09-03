import React from 'react';
import { Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const skillsData = [
    "Java, Python, HTML/CSS, C, JavaScript",
    "Tailwind CSS & UI Layout Optimization",
    "Frontend Development & Responsive Design",
    "Problem Solving & Team Collaboration"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-amber-500 rounded-full"></div>
            <Lightbulb className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillsData.map((skill, index) => (
              <div key={index} className="flex items-start gap-4 group hover:bg-gray-50 rounded-lg p-4 transition-all duration-200">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 group-hover:scale-150 transition-transform duration-200"></div>
                <p className="text-gray-700 flex-1">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;