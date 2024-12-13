"use client";

import { motion } from "framer-motion";

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
    <h1 className="text-[38px] md:text-[38px] font-bold text-white mb-4">
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
  </motion.div>
</div>


          {/* Column 8: Phone Mockups */}
          <div className="col-12 col-md-8">
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 * index,
                  }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  <div className="w-[200px] overflow-hidden"> {/* Adjusted width */}
                    <motion.div
                      className="relative aspect-[9/16]"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-blue-600/10 p-4">
                        {/* Mock Trading Interface */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-green-500/20" />
                            <div className="text-sm text-white font-medium">
                              #MasterOfTrade
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-4 bg-white/10 rounded w-3/4" />
                            <div className="h-4 bg-white/10 rounded w-1/2" />
                          </div>
                          <div className="mt-4 space-y-2">
                            <div className="h-20 bg-white/5 rounded" />
                            <div className="grid grid-cols-2 gap-2">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="py-2 px-4 bg-red-500/20 text-red-400 rounded text-sm"
                              >
                                Sell Trade
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="py-2 px-4 bg-green-500/20 text-green-400 rounded text-sm"
                              >
                                Buy Trade
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
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
