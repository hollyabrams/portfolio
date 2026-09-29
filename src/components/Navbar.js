import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-20 w-full text-gray-900 bg-white border-b border-gray-200">
      <div className="container flex flex-col flex-wrap items-center px-6 py-4 mx-auto md:flex-row">
        <a
          href="#about"
          className="text-lg font-semibold tracking-tight text-gray-900"
        >
          Holly Abrams
        </a>

        <nav className="flex flex-wrap items-center justify-center text-sm md:mr-auto md:ml-6 md:pl-6 md:border-l md:border-gray-200">
          <a
            href="#projects"
            className="mr-6 text-gray-600 hover:text-gray-900"
          >
            Work
          </a>

          <a
            href="#skills"
            className="mr-6 text-gray-600 hover:text-gray-900"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="mr-6 text-gray-600 hover:text-gray-900"
          >
            Experience
          </a>

          <a
            href="https://drive.google.com/file/d/1Sxbnqkwq-79Z8_h4KhJmsITYpho4eMwv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            Resume
          </a>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white bg-gray-900 rounded-md md:mt-0 hover:bg-gray-700"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
