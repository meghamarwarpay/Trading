'use client'

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Features from "./features"

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 opacity-20"
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-cyan-200">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 opacity-10"
          animate={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * -0.03,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-cyan-300">
            <circle cx="50" cy="50" r="50" />
          </svg>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-10 left-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-8 h-8 text-cyan-200" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <svg className="w-12 h-12 text-cyan-100" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </motion.div>

        {/* Wavy Pattern */}
        <motion.div
          className="absolute -bottom-4 left-0 right-0 h-32 opacity-20"
          animate={{ 
            x: [-20, 20, -20],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path
    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
    fill="currentColor"
    className="text-blue-900"
  ></path>
</svg>

        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              At Breakout Mantra, we are more than just a financial advisory firm; we are a community of traders, investors, and market enthusiasts committed to achieving financial growth. Led by Hiteshwari, an expert in advanced trading strategies and a Post Graduate in Financial Management, our team blends technical expertise with market insights to deliver actionable trading recommendations. With over 6 years of experience, we specialize in cash stocks, intraday trading, futures, and options, providing breakout levels that give our clients an edge in the dynamic world of finance.
            </p>
          </div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Introduction</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">
              Welcome to Breakout Mantra – your trusted partner in navigating the stock market. With precision, experience, and dedication, we specialize in identifying breakout opportunities that help traders and investors succeed.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h4 className="text-2xl md:text-2xl font-bold  mt-10 mb-4">SEBI Registered Research Analyst Firm</h4>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed">Breakout Mantra is proud to be a SEBI Registered Research Analyst (Registration No.
						INH000016472). Compliance and transparency are at the core of our services, ensuring the
						highest standards in stock market research and advisory.
					</p>
         </div>
         <Features/>
        
                    
                    </motion.div>

        {/* Dot Pattern */}
        <div className="absolute top-0 right-0 grid grid-cols-6 gap-4 opacity-20">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-cyan-300 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
