import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="text-gray-900 bg-gray-50">
      <div className="container px-6 py-16 mx-auto">
        <header className="max-w-3xl mx-auto mb-10 text-center">
          <ChipIcon className="inline-block w-9 mb-3 text-gray-700" />

          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Skills &amp; Technologies
          </h2>

          <p className="text-base leading-relaxed text-gray-600">
            Documentation engineering expertise supported by hands-on
            experience with software development, developer tooling, content
            systems, and modern engineering workflows.
          </p>
        </header>

        <div className="flex flex-wrap justify-center max-w-5xl gap-3 mx-auto">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
