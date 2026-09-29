import React, { useEffect } from "react";
import Typed from "typed.js";

export default function About() {
  useEffect(() => {
    const typed = new Typed("#description", {
      strings: [
        "I engineer documentation systems.",
        "I make complex technology easier to use.",
        "I also love long walks on the beach.",
        "Just kidding. I prefer the command line. 😂",
      ],
      typeSpeed: 25,
      backSpeed: 10,
      loop: true,
      startDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="about" className="bg-gray-50 pt-20">
      <div className="container flex flex-col items-center px-6 py-16 mx-auto md:flex-row lg:px-20">
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-3/5 md:items-start md:text-left md:pr-16 lg:pr-24">
          <p className="mb-4 text-sm font-semibold tracking-widest text-blue-700 uppercase">
            Documentation Engineering · Technical Writing · Developer Experience
          </p>

          <h1 className="mb-3 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Hi there, I'm Holly.
          </h1>

          <h2 className="hidden min-h-[44px] lg:block">
            <span
              id="description"
              className="text-2xl font-medium text-gray-600 sm:text-3xl"
            />
          </h2>

          <p className="max-w-2xl mt-6 mb-8 text-lg leading-relaxed text-gray-600">
            I'm a Senior Documentation Engineer and Technical Writer
            specializing in API documentation, docs-as-code, and developer
            experience. I combine technical writing with hands-on software
            development to build documentation systems, tooling, and workflows
            that make complex products easier to understand and use.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="inline-flex px-6 py-3 font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="inline-flex px-6 py-3 font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="w-4/5 mt-12 md:mt-0 md:w-2/5 lg:max-w-xs">
          <img
            className="object-cover object-center w-full border border-gray-300 rounded-xl shadow-sm"
            alt="Holly Abrams"
            src="./myProfile.jpg"
          />
        </div>
      </div>
    </section>
  );
}
