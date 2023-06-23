import React from "react";
import { useEffect } from "react";
import { useTheme } from '../ThemeContext';
// import Typing from 'react-typing-effect';
import Typed from 'typed.js';

export default function About() {
  const { theme } = useTheme();

  useEffect(() => {
    const options = {
      strings: ['I love to build amazing apps.', 'I also enjoy long walks on the beach.', 'Just kidding, I prefer coding.'],
      typeSpeed: 25,
      backSpeed: 10,
      loop: true,
      loopCount: Infinity,
      startDelay: 1000,
    };
  
    const typed = new Typed('#description', options);
  
    // Destroy Typed instance on unmounting to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);
  
  return (
      <section id="about" className={theme === 'dark' ? 'bg-gray-900 pt-24' : 'bg-white text-gray-500 pt-24'}>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className={`title-font sm:text-4xl text-3xl mb-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-500'}`}>
              Hi there, I'm Holly.</h1>
              <h2 className="hidden lg:inline-block">
                  <span id="description" className={`sm:text-3xl text-2xl mb-4 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-500'}`}></span>
              </h2>
            <p className={`mb-8 mt-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              I strive to add value by using technology to solve problems, create innovative solutions, and have a little fun while doing it.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-300 bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See My Past Work
              </a>
            </div>
            <div className="mt-8">
            </div>
          </div>
          <div className="lg:max-w-xs lg:w-full md:w-1/2 w-5/6 mx-auto">
            <img
              className="object-cover object-center rounded-lg border-2 border-gray-900"
              alt="hero"
              src="./myProfile.jpg"
            />
          </div>
        </div>
      </section>
  );
}
