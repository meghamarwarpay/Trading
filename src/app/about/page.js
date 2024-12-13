"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import img from "../../assets/images/pic.jpg"; // Your image path

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* About Title */}
        <motion.h1
          className="text-4xl font-extrabold mb-10 text-center text-blue-700"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }} // Triggers both scroll up and scroll down
        >
          About Us
        </motion.h1>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-15">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }} // Triggers both scroll up and scroll down
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010, our company began with a simple idea: to make
              technology accessible to everyone. What started as a small team
              of passionate developers has grown into a global organization
              dedicated to innovation and user-centric design.
            </p>
            <p className="text-gray-700">
              Over the years, we've helped thousands of businesses transform
              their digital presence and millions of users simplify their
              online experiences. Our journey is defined by continuous
              learning, adaptation, and a relentless pursuit of excellence.
            </p>
          </motion.div>
          <motion.div
            className="relative h-64 md:h-auto"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: false }} // Triggers both scroll up and scroll down
          >
            <Image
              src={img}
              alt="Our team collaborating"
              height={400}
              width={600}
              objectFit="cover"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            />
          </motion.div>
        </div>

        {/* Mission Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }} // Triggers both scroll up and scroll down
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-gray-700 bg-white rounded-lg shadow-md p-4 hover:bg-blue-50 transition-colors">
            We are on a mission to empower individuals and businesses with
            intuitive, powerful technology solutions. We believe in creating
            products that not only solve problems but also inspire creativity
            and drive growth. Our goal is to be at the forefront of
            technological innovation, always pushing the boundaries of what's
            possible.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }} // Triggers both scroll up and scroll down
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h2>
          <p className="text-gray-700 bg-white rounded-lg shadow-md p-4 hover:bg-blue-50 transition-colors">
            Our vision is to create a future where technology bridges gaps,
            empowers communities, and drives sustainable growth. We envision
            a world where innovation and collaboration unite to build
            solutions that make life easier and more meaningful. By embracing
            diversity, creativity, and resilience, we aim to leave a lasting
            positive impact on society and the environment.
          </p>
        </motion.div>

        {/* Boxes Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {["Innovation", "Quality", "Customer Focus"].map((title, index) => (
            <motion.div
              key={title}
              className="transform hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
              viewport={{ once: false }} // Triggers both scroll up and scroll down
            >
              <div
                className={`bg-gradient-to-r ${
                  index === 0
                    ? "from-blue-500 to-purple-600"
                    : index === 1
                    ? "from-green-500 to-teal-600"
                    : "from-yellow-500 to-orange-600"
                } text-white shadow-md hover:shadow-xl rounded-lg p-6`}
              >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p>
                  {index === 0
                    ? "We constantly push the boundaries of technology to bring you cutting-edge solutions."
                    : index === 1
                    ? "We are committed to delivering high-quality products that exceed expectations."
                    : "Your success is our priority. We're dedicated to providing exceptional support and service."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
