import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Information System",
      university: "Wolkite University",
      period: "2021 - 2024",
      description: "Completed comprehensive studies in Information Systems with focus on network administration, database management, and software development.",
      icon: "🎓"
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Academic background and qualifications in Information Systems
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg card-hover animate-slide-up">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">{edu.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {edu.university}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    {edu.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
