import React from "react";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="bg-white text-gray-900">
      <div className="container px-6 py-16 mx-auto">
        <header className="max-w-3xl mx-auto mb-10 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-blue-700 uppercase">
            Career
          </p>

          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Experience
          </h2>

          <p className="text-base leading-relaxed text-gray-600">
            A career spanning documentation engineering, technical writing,
            software development, content operations, and knowledge management.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.title}`}
              className={`py-7 ${
                index !== 0 ? "border-t border-gray-200" : ""
              }`}
            >
              <div className="grid gap-4 md:grid-cols-4 md:gap-10">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {experience.duration}
                  </p>
                </div>

                <div className="md:col-span-3">
                  <h3 className="mb-1 text-xl font-semibold text-gray-900 sm:text-2xl">
                    {experience.title}
                  </h3>

                  <p className="mb-4 font-medium text-blue-700">
                    {experience.company}
                  </p>

                  <p className="leading-relaxed text-gray-600">
                    {experience.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
