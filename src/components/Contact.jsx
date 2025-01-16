import React from "react";
import { useInView } from "react-intersection-observer";

function Contact({ darkMode }) {
  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div
      id="contact"
      className={`p-8 ${darkMode ? "bg-black text-white" : "bg-white text-black"} font-serif`}
    >
      <h1 className="text-3xl font-bold mb-8 text-center">
        Contact Me
      </h1>
      <div
        ref={formRef}
        className={`max-w-3xl mx-auto p-6 space-y-6 ${
          formInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        } transform transition duration-700 ease-out`}
      >
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="p-2 border-b-2 border-gray-500 dark:border-gray-300 bg-transparent text-black dark:text-white focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="p-2 border-b-2 border-gray-500 dark:border-gray-300 bg-transparent text-black dark:text-white focus:outline-none"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="message" className="mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              rows="4"
              className="p-2 border-b-2 border-gray-500 dark:border-gray-300 bg-transparent text-black dark:text-white focus:outline-none"
            ></textarea>
          </div>

          <div className="flex justify-center sm:col-span-2">
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white rounded-full hover:bg-black transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        input,
        textarea {
          transition: border-color 0.3s ease;
        }

        input:focus,
        textarea:focus {
          border-color: ${darkMode ? "#fff" : "#000"};
        }
      `}</style>
    </div>
  );
}

export default Contact;