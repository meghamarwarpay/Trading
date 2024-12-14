"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import img from "../../assets/images/picture.png";
import Image from "next/image";

const carouselItems = [
  {
    title: "Expert Financial Analysis",
    description: "Get insights from a SEBI Registered Research Analyst",
  },
  {
    title: "6+ Years of Experience",
    description: "Benefit from years of market knowledge and expertise",
  },
  {
    title: "Personalized Strategies",
    description: "Tailored investment advice for your financial goals",
  },
];

export const Hero = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % carouselItems.length);
    }, 5000); // Change item every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-[#474bbd] overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full bg-blue-100 transform origin-top-right"
        initial={{ skewX: 0, opacity: 0 }}
        animate={{ skewX: 12, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="container relative z-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center min-h-[70vh]">
          <div className="text-white space-y-6 p-8">
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-yellow-400"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hiteshwari Kumari
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl max-w-xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A SEBI Registered Research Analyst(INH000016472) with 6+ years of
              experience.
            </motion.p>
            <motion.div
              className="h-32" // Fixed height for carousel
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {carouselItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: currentItem === index ? 1 : 0,
                    y: currentItem === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute ${
                    currentItem === index ? "block" : "hidden"
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-lg">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
            <div className="relative z-10 pb-8 ">
              {" "}
              {/* Move button upwards using -mt-8 */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button
                  className="bg-white text-[#0a0b2e] hover:bg-gray-100 text-lg px-8 py-6 mb-20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  as={motion.button}
                >
                  CONTACT NOW!!
                </Button>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Image
              src={img}
              alt="Trading Expert"
              className="w-full max-w-m mx-auto"
            />
          </motion.div>
        </div>
      </div>

      {/* Wave Animation */}

      <div className="absolute bottom-0 left-0 w-full mt-20">
        {" "}
        {/* Adjust margin to control the position */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
          <path fill="#ffffff" fillOpacity="1">
            <animate
              attributeName="d"
              dur="20000ms"
              repeatCount="indefinite"
              keyTimes="0;0.33;0.66;1"
              keySplines="0.25 0.1 0.25 1; 0.25 0.1 0.25 1; 0.25 0.1 0.25 1"
              values=" 
          M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
          M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,133.3C672,107,768,117,864,138.7C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
          M0,64L48,74.7C96,85,192,107,288,133.3C384,160,480,192,576,170.7C672,149,768,75,864,80C960,85,1056,171,1152,181.3C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
          M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,117.3C960,85,1056,75,1152,90.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></animate>
          </path>
        </svg>
      </div>
    </div>
  );
};
