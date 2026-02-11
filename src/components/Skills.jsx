import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "System Administration",
      items: ["Windows Server", "Linux Administration", "Network Configuration", "Active Directory"],
      icon: "🖥️"
    },
    {
      category: "Technical Support",
      items: ["Hardware Troubleshooting", "Software Installation", "Remote Desktop Support", "User Training"],
      icon: "🔧"
    },
    {
      category: "Infrastructure Management",
      items: ["System Monitoring", "Backup Solutions", "Security Management", "Performance Optimization"],
      icon: "🏗️"
    },
    {
      category: "IT Operations",
      items: ["Incident Management", "Change Management", "Documentation", "Vendor Management"],
      icon: "⚙️"
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Comprehensive technical expertise spanning system administration, support, and infrastructure management
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 text-center">{skillGroup.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
            Professional Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Problem Solving</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Efficient diagnosis and resolution of complex technical issues
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Time Management</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Effective prioritization and prompt response to technical challenges
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Communication</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Clear technical communication and user training capabilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
