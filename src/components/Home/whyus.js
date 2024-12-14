"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img from "../../assets/images/picture.png";
import img1 from "../../assets/images/expertise.gif";
import img2 from "../../assets/images/customized.gif";
import img3 from "../../assets/images/comprehensive.gif";
import img5 from "../../assets/images/techniqus.gif";
import img6 from "../../assets/images/client-centric.gif";
import img8 from "../../assets/images/helpdesk.gif";

export default function WhyUs() {
  return (
    <div id="why-us" className="section why-us py-16">
      <div className="container mx-auto px-4">
        <div className="header-sec text-center mb-12">
        <motion.h1
          className="text-4xl font-extrabold mb-10 text-center text-blue-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }} // Triggers both scroll up and scroll down
        >
          Why Choose Us
        </motion.h1>
        </div>

        {/* Grid for left, middle, and right sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column */}
          <div className="choose-points-left space-y-6">
            <div
              className="points-wrap p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl"
            >
              <Image
                src={img1}
                alt="Expertise"
                className="whyus-icons w-1/4 rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold">SEBI Registered Expertise</h4>
              <p className="text-gray-600">Our research and recommendations comply with regulatory standards.</p>
            </div>
            <div
              className="points-wrap p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl"
            >
              <Image
                src={img2}
                alt="Customized"
                className="whyus-icons w-1/4 rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold">Proven Track Record</h4>
              <p className="text-gray-600">Over 6 years of experience in identifying high-potential breakout trades.</p>
            </div>
            <div
              className="points-wrap p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl"
            >
              <Image
                src={img3}
                alt="Comprehensive"
                className="whyus-icons w-1/4 rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold">Holistic Approach</h4>
              <p className="text-gray-600">Comprehensive research across cash and F&amp;O markets.</p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="choose-points-mid">
            <div className="points-wrap p-6 mt-10 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl">
              <Image
                src={img}
                alt="Commitment"
                className="w-full rounded-lg"
              />
              <h2 className="mt-4 text-gray-600">We are committed to deliver you with Informed decision making.</h2>
            </div>
          </div>

          {/* Right Column */}
          <div className="choose-points-right space-y-6">
            <div
              className="points-wrap p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl"
            >
              <Image
                src={img5}
                alt="Tailored Insights"
                className="w-1/4 rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold">Tailored Insights</h4>
              <p className="text-gray-600">Customized strategies to meet individual trading goals.</p>
            </div>
            <div
              className="points-wrap p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl"
            >
              <Image
                src={img6}
                alt="Educational Focus"
                className="w-1/4 rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold">Educational Focus</h4>
              <p className="text-gray-600">Empowering clients with knowledge to trade confidently.</p>
            </div>
            <div
              className="points-wrap p-6 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-2xl"
            >
              <Image
                src={img8}
                alt="Support"
                className="w-1/4 rounded-lg"
              />
              <h4 className="mt-4 text-xl font-semibold">Continuous Support</h4>
              <p className="text-gray-600">Breakout Mantra offers continuous guidance and updates.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
