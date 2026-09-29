import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { featuredProject, projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-white text-gray-900">
      <div className="container px-6 py-16 mx-auto lg:px-40">
        <header className="max-w-3xl mx-auto mb-10 text-center">
          <CodeIcon className="inline-block w-9 mb-3 text-gray-700" />

          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Featured Work
          </h2>

          <p className="text-base leading-relaxed text-gray-600">
            Documentation engineering and software development projects that
            demonstrate how I combine technical writing with hands-on
            engineering.
          </p>
        </header>

        <article className="overflow-hidden border border-gray-200 rounded-xl bg-gray-50">
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center justify-center p-6 lg:p-10">
              <img
                src={featuredProject.image}
                alt="DocOps documentation engineering application"
                className="w-full border border-gray-300 rounded-lg shadow-sm"
              />
            </div>

            <div className="flex flex-col justify-center p-8 text-left lg:p-12">
              <p className="mb-3 text-sm font-semibold tracking-widest text-blue-700 uppercase">
                Featured Project
              </p>

              <h3 className="mb-2 text-4xl font-semibold tracking-tight text-gray-900">
                {featuredProject.title}
              </h3>

              <p className="mb-6 text-xl text-gray-600">
                {featuredProject.tagline}
              </p>

              <p className="mb-6 leading-relaxed text-gray-600">
                {featuredProject.description}
              </p>

              <ul className="flex flex-wrap gap-2 mb-8">
                {featuredProject.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="px-3 py-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-6">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-blue-700 hover:underline"
                >
                  Explore DocOps →
                </a>

                <a
                  href={featuredProject.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-gray-700 hover:underline"
                >
                  View source →
                </a>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-14">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-gray-900">
              Selected Development Projects
            </h2>

            <p className="text-gray-600">
              Additional full-stack work from my software engineering
              portfolio.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden border border-gray-200 rounded-lg bg-gray-50"
              >
                <a href={project.link} target="_blank" rel="noreferrer">
                  <div className="flex items-center justify-center p-6 bg-white">
                    <img
                      src={project.image}
                      alt={`${project.title} application`}
                      className="object-contain w-full h-56"
                    />
                  </div>
                </a>

                <div className="p-6 text-left">
                  <p className="mb-2 text-sm font-medium text-blue-700">
                    {project.subtitle}
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mb-4 leading-relaxed text-gray-600">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-blue-700 hover:underline"
                  >
                    View project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
