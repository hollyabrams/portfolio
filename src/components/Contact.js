import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="text-gray-900 bg-gray-50">
      <div className="container px-6 py-16 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-blue-700 uppercase">
            Get in touch
          </p>

          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Let's work together.
          </h2>

          <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-gray-600">
            I'm interested in opportunities where technical writing,
            documentation engineering, and software development come together
            to make complex products easier to understand and use.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:holly.d.abrams@gmail.com"
              className="inline-flex px-6 py-3 font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/hollyabrams/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/hollyabrams"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
