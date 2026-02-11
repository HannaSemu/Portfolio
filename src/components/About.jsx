import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Professional Summary
            </h3>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4">
              <p>
                I am an IT Officer responsible for managing and supporting an 
                organization's technology infrastructure. I serve as the main 
                point of contact for system maintenance, troubleshooting, and 
                technical support, ensuring the smooth operation of hardware,
                software, and networks. In addition, I have hands-on
                experience working with Odoo, where I currently support users,
                manage access rights, and assist in system configuration to 
                meet business needs efficiently.
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My role involves overseeing day-to-day IT operations, maintaining computer systems, 
              and providing technical solutions that support overall business objectives. I take 
              pride in keeping IT resources reliable, secure, and operational.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Strengths</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Strong technical knowledge</li>
                  <li>• Problem-solving ability</li>
                  <li>• High responsibility level</li>
                  <li>• Independent work ethic</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Core Values</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Prompt response time</li>
                  <li>• Task prioritization</li>
                  <li>• Minimal disruption</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                Professional Approach
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Efficient Issue Resolution</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Handle system-related issues efficiently with minimal downtime
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Proactive Maintenance</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Ensure proper functioning of hardware and software systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Technical Support</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Provide comprehensive technical solutions to support business operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
