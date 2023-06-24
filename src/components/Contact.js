import React from "react";
import { useTheme } from '../ThemeContext';

export default function Contact() {
  const { theme } = useTheme();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className={theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-900'}>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1698986.2417233023!2d-85.44892738822533!3d33.72621713017681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f501167813287d%3A0x26d21ce27f74b79!2sAtlanta%20Metropolitan%20Area%2C%20GA!5e0!3m2!1sen!2sus!4v1679421558610!5m2!1sen!2sus"
          />
        </div>
        <form
          netlify="true"
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className={`title-font sm:text-4xl text-3xl mb-4 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-500'}`}>
            Contact Me
          </h2>
          <p className={`mb-5 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Whether you are a potential client, collaborator, or simply interested in my work, I would be happy to hear from you. 
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-500">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-gray-100'
                  : 'bg-gray-200 border-gray-300 text-gray-900'
              }`}
              onChange={(e) => setName(e.target.value)}
            />

          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-gray-100'
                  : 'bg-gray-200 border-gray-300 text-gray-900'
              }`}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-500">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`w-full rounded border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 text-gray-100'
                  : 'bg-gray-200 border-gray-300 text-gray-900'
              }`}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}