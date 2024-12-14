"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Ensure this import is present
import img1 from "../../assets/images/dhan-app1.jpeg";
import img2 from "../../assets/images/dhan-app2.jpeg";
import img3 from "../../assets/images/dhan-app3.jpeg";

export default function TradingDashboard() {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        backgroundImage: "url('/path-to-your-image.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundColor: "#1E3A8A", // Fallback color
      }}
    >
      {/* Custom Shape Divider */}
      <div className="custom-shape-divider-top-1731581635">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            className="shape-fill"
            style={{ fill: "#ffffff" }}
          ></path>
        </svg>
      </div>

      <div className="container mx-auto py-10">
        <div className="row">
          {/* Column 4: Heading Section */}
          <div className="col-12 col-md-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="text-left mb-16">
                <h1 className="text-[38px] md:text-[38px] font-bold text-white mt-5">
                  Our Daily Researched
                  <br />
                  Recommendations on{" "}
                  <span className="text-green-400">Free Telegram</span>
                  <br />
                  Channel
                </h1>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full"
                >
                  +12%
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Column 8: Image Cards */}
          <div className="col-12 col-md-8">
            <div className="flex justify-center items-center gap-6">
              {[img1, img2, img3].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 * index,
                  }}
                  whileHover={{ y: -10 }}
                  viewport={{ once: false, amount: 0.5 }} // Triggers animation when the image is 50% in the viewport
                  className="relative"
                >
                  <div className="w-[250px] h-[550px] bg-white/5 rounded-lg shadow-md overflow-hidden">
                    <Image
                      src={image} // Correct dynamic image handling
                      alt={`Card Image ${index + 1}`}
                      className="w-full h-full object-cover"
                      width={250} // Ensure dimensions for next/image
                      height={400}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
