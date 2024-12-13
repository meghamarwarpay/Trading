// components/HomeProgram.js
import React from 'react';
import 'aos/dist/aos.css'; // For AOS (Animate on Scroll)

const HomeProgram = () => {
  return (
    <div id="home-program" className="step-section">
      <div className="container">
        <h3 className="section-heading text-center">
          Trade Safely With SEBI REGISTERED ANALYST’S Guidance
        </h3>
        <div className="row">
          <div
            className="col-md-6 col-sm-12 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <div className="row program_wrap">
              <div className="col-md-3 program-left">
                <div className="program-left_img">
                  <img src="/images/telegram.png" alt="Telegram" />
                </div>
              </div>
              <div className="col-md-9 program-right">
                <div className="program-right_text">
                  <h4>JOIN THE TELEGRAM CHANNEL</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-sm-12 program-btmbox aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            <div className="row program_wrap">
              <div className="col-md-3 program-left">
                <div className="program-left_img">
                  <img src="/images/stock-market.png" alt="Stock Market" />
                </div>
              </div>
              <div className="col-md-9 program-right">
                <div className="program-right_text">
                  <h4>Get 2-3 Researched Options Calls & Breakout Stocks</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row program-btmrow">
          <div
            className="col-md-6 col-sm-12 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="900"
          >
            <div className="row program_wrap">
              <div className="col-md-3 program-left">
                <div className="program-left_img">
                  <img src="/images/support.png" alt="Support" />
                </div>
              </div>
              <div className="col-md-9 program-right">
                <div className="program-right_text">
                  <h4>Live Market Support & Updates</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-sm-12 program-btmbox aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1200"
          >
            <div className="row program_wrap">
              <div className="col-md-3 program-left">
                <div className="program-left_img">
                  <img src="/images/trading-skills.png" alt="Trading Skills" />
                </div>
              </div>
              <div className="col-md-9 program-right">
                <div className="program-right_text">
                  <h4>Improve Your Trading Skills</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProgram;
