import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center py-8 bg-white border-t border-gray-200">
      <div className="flex items-center justify-center space-x-7">
        <a
          href="https://github.com/hollyabrams"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-500 hover:text-gray-900"
        >
          <FaGithub className="w-6 h-6" />
        </a>

        <a
          href="mailto:holly.d.abrams@gmail.com"
          aria-label="Email Holly Abrams"
          className="text-gray-500 hover:text-gray-900"
        >
          <FiMail className="w-6 h-6" />
        </a>

        <a
          href="https://www.linkedin.com/in/hollyabrams/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-500 hover:text-gray-900"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
      </div>

      <p className="mt-5 text-sm text-gray-500">
        © {new Date().getFullYear()} Holly Abrams
      </p>
    </footer>
  );
}
