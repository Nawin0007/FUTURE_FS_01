import React from 'react';
import { Briefcase } from 'lucide-react';

const Internships: React.FC = () => {
  const internships = [
    {
      company: "AICTE Internship:",
      description: "Completed AICTE-certified internship in Machine Learning, gaining hands-on experience in building and applying ML models."
    },
    
    {
      company: "Future:",
      description: "Participated in full-stack web development, building a mini e-commerce site and cloning modern interfaces."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-teal-500 rounded-full"></div>
            <Briefcase className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-900">Internships</h2>
          </div>
          
          <div className="space-y-8">
            {internships.map((internship, index) => (
              <div key={index} className="group hover:bg-gray-50 rounded-lg p-6 transition-all duration-200 border-l-4 border-transparent hover:border-teal-500">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{internship.company}</h3>
                <p className="text-gray-700 leading-relaxed">{internship.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;