import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "IT Officer",
      company: "Telekey Trading P.L.C",
      period: "November 2024 - January 2026",
      type: "Full-time",
      description: "Responsible for overseeing and managing day-to-day IT operations, maintaining company computer systems, and providing technical solutions to support business operations. Hands-on experience with Odoo ERP system, supporting users, managing access rights, and assisting in system configuration to meet business needs efficiently.",
      achievements: [
        "Troubleshoot and Fix Technical Issues",
        "Maintain Security and Data Protection",
        "Set Up and Manage Systems",
        "Maintained company computer systems and ensured proper functioning of hardware and software",
        "Diagnosed and resolved technical issues efficiently with minimal disruption to staff productivity",
        "Provided technical solutions to support overall business operations",
        "Played a key role in keeping the company's IT resources reliable and operational",
        "Demonstrated strong technical knowledge and problem-solving abilities",
        "Handled system-related issues independently and prioritized tasks effectively"
      ]
    },
    {
      title: "Customer service",
      company: "Telekey PLC",
      period: "Augest 2024 - October 2024",
      type: "Full-time",
      description: "Handle customer inquiries and support, record and report customer feedback.",
      achievements: [
        "Handle Customer Inquiries and Support",
        "Record and Report Customer Feedback",
        "Provide Instant Customer Support",
        "Increase Customer Engagement",
        "Collect Customer Data and Feedback"
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional journey and key accomplishments in IT management and technical support
          </p>
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg card-hover animate-slide-up">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {exp.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                    {exp.type}
                  </span>
                </div>
                <div className="text-gray-600 dark:text-gray-400 mb-4">
                  <p className="font-medium">{exp.company}</p>
                  <p className="text-sm">{exp.period}</p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-lg card-hover animate-slide-up">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {exp.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 mb-4">
                      <p className="font-medium">{exp.company}</p>
                      <p className="text-sm">{exp.period}</p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1 text-left">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-gray-600 dark:text-gray-400 text-sm">
                            <div className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                            <span className="text-left">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Professional Recommendation
            </h3>
            <blockquote className="text-gray-600 dark:text-gray-400 italic max-w-3xl mx-auto">
              "Based on her experience, technical competence, and professional work ethic as an IT Officer, 
              I believe Hanna Semu would be a valuable asset to any organization. I confidently recommend her 
              for IT Officer or related roles and wish her continued success in her professional career."
            </blockquote>
            <div className="mt-6 text-gray-500 dark:text-gray-500 text-sm">
              — Former Management, Telekey Trading P.L.C
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
