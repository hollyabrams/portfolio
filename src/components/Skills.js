import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import { useTheme } from '../ThemeContext';

export default function Skills() {
  const { theme } = useTheme();
  return (
    <section id="skills" className={theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-900'}>
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-500'}`}>
            Skills &amp; Technologies
          </h1>
          <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300 lg:w-2/3 mx-auto leading-relaxed text-base' : 'text-gray-600 lg:w-2/3 mx-auto leading-relaxed text-base'}`}>
          These skills enable me to design and develop robust and efficient software applications that meet the needs of clients and end-users. 
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded-lg flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}