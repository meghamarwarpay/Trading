// components/HomeProgram.js
import React from 'react';
import img1 from "../../assets/images/telegram.png";
import img2 from "../../assets/images/stock-market.png";
import img3 from "../../assets/images/support.png";
import img4 from "../../assets/images/trading-skills.png";
import imgchart1 from "../../assets/images/guidance-pic1.png"
import imgchart2 from "../../assets/images/guidance-pic2.png"
import imgchart3 from "../../assets/images/guidance-pic3.png"
import Image from 'next/image';

const HomeProgram = () => {
  return (
    <div id="home-program" className="py-16 bg-gradient-to-r from-purple-200 via-blue-300 to-gray-300">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-3xl font-bold mb-10 text-white">
          Trade Safely With SEBI REGISTERED ANALYST’S Guidance
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* First Box */}
          <div
            className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg h-full transition-all transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="w-24 h-24 mb-4">
              <Image src={img1} alt="Telegram" className="w-full h-full object-contain" />
            </div>
            <h4 className="text-xl font-semibold text-center text-gray-700">JOIN THE TELEGRAM CHANNEL</h4>
          </div>

          {/* Second Box */}
          <div
            className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg h-full transition-all transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            <div className="w-24 h-24 mb-4">
              <Image src={img2} alt="Stock Market" className="w-full h-full object-contain" />
            </div>
            <h4 className="text-xl font-semibold text-center text-gray-700">Get 2-3 Researched Options Calls & Breakout Stocks</h4>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
          {/* Third Box */}
          <div
            className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg h-full transition-all transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="900"
          >
            <div className="w-24 h-24 mb-4">
              <Image src={img3} alt="Support" className="w-full h-full object-contain" />
            </div>
            <h4 className="text-xl font-semibold text-center text-gray-700">Live Market Support & Updates</h4>
          </div>

          {/* Fourth Box */}
          <div
            className="flex flex-col items-center justify-center bg-white shadow-lg p-6 rounded-lg h-full transition-all transform hover:scale-105 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1200"
          >
            <div className="w-24 h-24 mb-4">
              <Image src={img4} alt="Trading Skills" className="w-full h-full object-contain" />
            </div>
            <h4 className="text-xl font-semibold text-center text-gray-700">Improve Your Trading Skills</h4>
          </div>
        </div>

        {/* Stock Table Section */}
        <div className="mt-16">
          <h3 className="text-center text-3xl font-bold mb-8 text-white">
            Discover What Our Satisfied Telegram Community Members Have to Say About Their Experience with Us
          </h3>
          <div className="flex justify-center gap-8">
            {/* Stock Info Box 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg w-1/4 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h4 className="font-semibold text-xl mb-4">ICICIPRULI JUN FUT</h4>
              <Image src={imgchart1} alt="Chart 1" className="rounded-md"/>
            </div>

            {/* Stock Info Box 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg w-1/4 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h4 className="font-semibold text-xl mb-4">ICICIPRULI JUN FUT</h4>
              <Image src={imgchart2} alt="Chart 2" className="rounded-md"/>
            </div>

            {/* Stock Info Box 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg w-1/4 transition-all transform hover:scale-105 hover:shadow-2xl">
              <h4 className="font-semibold text-xl mb-4">ICICIPRULI JUN FUT</h4>
              <Image src={imgchart3} alt="Chart 3" className="rounded-md"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProgram;
