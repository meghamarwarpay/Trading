"use client"; // If you're using Next.js with App Router

import React from "react";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(to bottom, #1e3a8a, #1e40af, #1d4ed8)", // Dark blue gradient
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side: Contact Form */}
        <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">Contact Us</h1>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-300 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Headings or Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center px-8 lg:px-16 mt-8 lg:mt-0">
          <h1 className="text-5xl font-bold text-white mb-4">Get Free Highly-Researched Stocks & Options Recommendations by SEBI Registered Analyst!</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
