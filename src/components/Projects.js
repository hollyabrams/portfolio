import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { useTheme } from '../ThemeContext';

export default function Projects() {
  const { theme } = useTheme();
  return (
    <section id="projects" className={theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-900'}>
      <div className="container px-1 py-5 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-500'}`}>
            Apps I've Built
          </h1>
          <p className={`mb-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300 lg:w-2/3 mx-auto leading-relaxed text-base' : 'text-gray-600 lg:w-2/3 mx-auto leading-relaxed text-base'}`}>
          These apps range from games to productivity tools, demonstrating my ability to build software for various purposes and audiences.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-full p-4">
              <div className="flex relative h-84">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-contain object-center rounded-lg border-2 border-gray-800 bg-gray-800"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 rounded-lg border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className={`leading-relaxed ${theme === 'dark' ? 'text-gray-300 lg:w-2/3 mx-auto text-base' : 'text-gray-300 lg:w-2/3 mx-auto text-base'}`}>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}