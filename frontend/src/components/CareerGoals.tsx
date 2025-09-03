import React from 'react';
import { Target } from 'lucide-react';

const CareerGoals: React.FC = () => {
  const goals = [
    "Master frontend technologies and UI frameworks",
    "Apply AI/ML in software development",
    "Lead impactful tech projects across industries"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg border border-orange-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-rose-500 rounded-full"></div>
            <Target className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-900">Career Goals</h2>
          </div>
          
          <div className="space-y-4">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-start gap-4 group hover:bg-white/70 rounded-lg p-4 transition-all duration-200">
                <div className="w-2 h-2 bg-rose-500 rounded-full mt-3 group-hover:scale-150 transition-transform duration-200"></div>
                <p className="text-gray-700 flex-1">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerGoals;
