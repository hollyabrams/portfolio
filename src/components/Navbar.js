import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { useTheme } from '../ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header
  className={
    theme === 'dark'
      ? 'bg-gray-800 text-gray-300 fixed top-0 left-0 w-full z-20' : 'bg-white text-gray-900 border border-gray-300 shadow-md rounded-none fixed top-0 left-0 w-full z-20'
    }>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="#about" className={theme === 'dark' ? "title-font font-medium text-white md:mb-0" : 'bg-white font-medium text-gray-900 ml-3 text-xl'}>
            Holly Abrams
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-gray-400">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-gray-400">
            Skills
          </a>
          <a href="#experience" className="mr-5 hover:text-gray-400">
            Experience
          </a>
          <a href="https://docs.google.com/document/d/186cq8h48gETLCb1tB0TFdPxcYbkwF09C96D7kgIipT4/edit?usp=sharing" target='_blank' rel="noopener noreferrer" className="mr-5 hover:text-gray-400">
            Resume
          </a>
        </nav>
        <button
        className="focus:outline-none px-6"
        onClick={toggleTheme}
        >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      <a
  href="#contact"
  className={
    theme === 'dark'
          ? 'inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0'
          : 'inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'
        }
        >
        Contact Me
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </a>
      </div>
    </header>
  );
}
