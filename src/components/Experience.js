import React from 'react';
import { useTheme } from '../ThemeContext';
import { experiences } from "../data";


export default function Experience() {
  const { theme } = useTheme();
  return (
    <section id="experience" className={theme === 'dark' ? 'bg-gray-900' : 'bg-white text-gray-500'}>
      <div className="container mx-auto px-10 py-20 md:flex-row flex-col items-center">
        <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-center ${theme === 'dark' ? 'text-white' : 'text-gray-500'}`}>
          My Experience
        </h1>
        <div className="w-full mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className={`mb-8 ${index !== 0 ? 'border-t border-gray-300 pt-8' : ''}`}>
              <h2 className={`title-font sm:text-2xl text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                {experience.title}
              </h2>
              <h3 className={`sm:text-xl text-lg font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {experience.company}
              </h3>
              <h4 className={`sm:text-lg text-base font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {experience.duration}
              </h4>
              <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
