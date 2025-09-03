import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "B.Tech in IT",
      institution: "Chaitanya Bharathi Institute of Technology, Hyderabad",
      period: "2023-2027"
    },
    {
      degree: "Higher Secondary",
      institution: "Telangana State Model School & Junior College, Neredugommu",
      period: "2021-2023"
    },
    {
      degree: "Secondary",
      institution: "Telangana State Model School & Junior College, Neredugommu",
      period: "2021"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
            <GraduationCap className="w-6 h-6 text-gray-700" />
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          </div>
          
          <div className="space-y-6">
            {educationData.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group hover:bg-white rounded-lg p-4 transition-all duration-200">
                <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{item.degree}</h3>
                  <p className="text-gray-600">{item.institution}</p>
                  <p className="text-sm text-gray-500 mt-1">({item.period})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
